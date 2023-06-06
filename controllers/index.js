const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const loggedInRoutes = require('./loggedInRoutes');
const signUpRoutes = require('./signUpRoutes')

router.use('/',homeRoutes);
router.use('/login', loginRoutes);
router.use("/loggedin",loggedInRoutes);
router.use("/loggedin",loggedInRoutes);
router.use('/signUp',signUpRoutes);
module.exports = router;