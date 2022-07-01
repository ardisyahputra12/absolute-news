import express from 'express';

const router = express.Router();

router.get('/business', (req, res) => res.render('category/business', { user: req.session.user || "" }));
router.get('/entertainment', (req, res) => res.render('category/entertainment', { user: req.session.user || "" }));
router.get('/health', (req, res) => res.render('category/health', { user: req.session.user || "" }));
router.get('/science', (req, res) => res.render('category/science', { user: req.session.user || "" }));
router.get('/sports', (req, res) => res.render('category/sports', { user: req.session.user || "" }));
router.get('/technology', (req, res) => res.render('category/technology', { user: req.session.user || "" }));
router.get('/data-covid19', (req, res) => res.render('data-covid19', { user: req.session.user || "" }));

export default router;