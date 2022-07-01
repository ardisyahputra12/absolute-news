import express from 'express';
import Login from '../../models/login.js';

const router = express.Router();

router.use(express.static('public'));

router.get('/dashboard', (req, res) => {
    Login.findAll().then((results) => {
        res.render('admin/dashboard/index', {
            users: results,
            user: req.session.user || ""
        });
    });
});

router.get('/add', (req, res) => {
    res.render('admin/dashboard/add', {
        user: req.session.user || ""
    });
});

router.get('/edit/:id', (req, res) => {
    Login.findOne({
        where: {
            id: req.params.id
        }
    }).then((results) => {
        res.render('admin/dashboard/edit', {
            users: results,
            user: req.session.user || ""
        });
    });
});

router.post('/users', (req, res) => {
    Login.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        admin: req.body.admin
    }).then((results) => {
        res.json({
            status: 200,
            error: null,
            Response: results
        });
    }).catch(err => {
        res.json({
            status: 502,
            error: err
        });
    });
});

router.put('/user/:id', (req, res) => {
    Login.update({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        admin: req.body.admin
    }, {
        where: {
            id: req.params.id
        }
    }).then((results) => {
        res.json({
            status: 200,
            error: null,
            Response: results
        });
    }).catch(err => {
        res.json({
            status: 502,
            error: err
        });
    });
});

router.delete('/user/:id', (req, res) => {
    Login.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({
            status: 200,
            error: null,
            Response: results
        });
    }).catch(err => {
        res.json({
            status: 500,
            error: err,
            Response: {}
        });
    });
});

export default router;