import express from 'express';
import session from 'express-session';

import login_routes from './routers/login.js';
import category_routes from './routers/category.js';
import dashboard_routes from "./routers/admin/dashboard.js";
import profile_routes from "./routers/admin/profile.js";

import { forMember, forAdmin } from './controllers/auth.js';

const app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'Kode rahasia absoluteNews',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300 * 300 * 1000 } // 5 jam
}));

app.use('/auth', login_routes);
app.use('/category', category_routes);
app.use('/admin', forAdmin, dashboard_routes);
app.use('/member', forMember, profile_routes);

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', { user: req.session.user || "" }));
app.get('/about', (req, res) => res.render('tentang', { user: req.session.user || "" }));
app.get('/contact', (req, res) => res.render('hubungi', { user: req.session.user || "" }));
app.get('/forbidden', (req, res) => res.render('forbidden', { user: req.session.user || "" }));
app.get('*', (req, res) => res.redirect('/'));

app.listen(port, () => console.log(`Server running at ${hostname}:${port}`));