const express = require('express'),
    webconfig = require('./common/webconfig'),
    bodyParser = require('body-parser'),
    moment = require('moment');

app = express();

process.env.NODE_ENV = 'dev';

(async () => {
    try {
        app.use(require('./src/api/cors'));
        app.use(bodyParser.json({ limit: '500mb' }));
        app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

        require('./src/api/ping')(app);
        require('./src/api/token')(app);
        require('./src/api/routes')(app);
        require('./src/api/sync')(app);

        moment.locale('pt-BR');

        app.listen(webconfig.portApi, () => {
            console.log(`[${webconfig.nameApi}] - Ativo | ${webconfig.urlApi}:${webconfig.portApi}`);
        });

    } catch (error) {
        console.log(error.message);
    }
})();