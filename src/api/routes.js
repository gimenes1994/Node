const fs = require("fs"),
  authenticate = require("./authenticate"),
  content = require("./content"),
  sequelize = require("../../common/sequelizeConfig").sequelize();

module.exports = app => {
  fs.readdir("src/core/", (err, files) => {
    files.forEach(element => {
      const path = `src/core/${element}/${element}Route.js`;
      if(fs.existsSync(path)){
        require(`../core/${element}/${element}Route`).map(func => {
          app[func.verbo](func.rota, api(func.metodo));
        });
      }
    });
  });
};

function api(metodo) {
  return async (req, res) => {
    try {
      await authenticate(req, res);
      const page = Number(req.query.page ? req.query.page : 1),
        limit = Number(req.query.limit ? req.query.limit : 100),
        offset = page * limit - limit,
        order = req.query.order;
      let pg = {
        page: page,
        limit: limit,
        offset: offset,
        order: order
      };
      let ret = await metodo(req, pg);
      ret.pg = pg;
      return content(res, ret);
    } catch (err) {
      err.errorCode = err ? err.status || err.errorCode || 500 : 500;
      return content(res, err.error ? err.error : err);
    }
  };
}
