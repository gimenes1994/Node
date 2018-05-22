const md5 = require('md5'),
    webconfig = require('../../common/webconfig');

module.exports = (req, res) => {

    let tokenInvalido = {
        success: false,
        userMessage: 'Token inválido!',
        message: 'Você deve possuir um token valido para poder consumir esta api',
        status: 403
    };

    let userToken = req.headers['authorization'];
    if (userToken) {
        try {
            if (md5(webconfig.secretWord) != userToken)
                throw tokenInvalido;
            return;
        } catch (err) {
            throw tokenInvalido;
        }
    } else {
        throw tokenInvalido;
    }
}