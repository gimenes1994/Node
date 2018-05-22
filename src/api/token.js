const md5 = require('md5')

module.exports = (app) => {
    app.get('/token/:token', (req, res) => {
        res.status(200).json({ token: md5(req.params.token) });
    });
}