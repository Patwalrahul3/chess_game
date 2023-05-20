exports.getRegisterPage = (reg, res) => {
    res.render('auth/register')
}

exports.getLoginPage = (reg, res) => {
    res.render('auth/login')
}