import express from 'express';
import Login from '../../models/login.js';

const router = express.Router();

router.use(express.static('public'));

router.get('/profile', (req, res) => {
    Login.findOne({
        where: {
            id: req.session.user.id
        }
    }).then((results) => {
        res.render('admin/profile/index', {
            users: results,
            user: req.session.user || ""
        });
    });
});

router.get('/edit', (req, res) => {
    Login.findOne({
        where: {
            id: req.session.user.id
        }
    }).then((results) => {
        res.render('admin/profile/edit', {
            users: results,
            user: req.session.user || ""
        });
    });
});

router.put('/user', (req, res) => {
    Login.update({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
    }, {
        where: {
            id: req.session.user.id
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

router.delete('/user', (req, res) => {
    Login.destroy({
        where: {
            id: req.session.user.id
        }
    }).then(() => {
        res.json({
            status: 200,
            error: null,
            Response: results
        });
        req.session.destroy();
    }).catch(err => {
        res.json({
            status: 500,
            error: err,
            Response: {}
        });
    });
});

export default router;