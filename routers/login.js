import express from 'express';
import login_controller from '../controllers/login.js';

const router = express.Router();

router.get("/login", login_controller.login);
router.get("/signup", login_controller.signup);
router.get("/logout", login_controller.logout);
router.post("/login", login_controller.authLogin);
router.post("/signup", login_controller.authSignup);

// router.route('/login').get(login_controller.login).post(login_controller.authSignup)

export default router;