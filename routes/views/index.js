const {Router} = require('express')
const router = Router();
const {getRegisterPage, getLoginPage} = require('../../controllers/views/index')

router.get("/register", getRegisterPage)

router.get("/login", getLoginPage)



module.exports = router;