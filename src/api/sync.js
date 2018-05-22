const fs = require("fs"),
  syncOptions = { alter: false, logging: false };

module.exports = app => {
  fs.readdir("src/core/", (err, files) => {
    files.forEach(element => {
      const path = `src/core/${element}/${element}Model.js`;
      if(fs.existsSync(path)){
        require(`../core/${element}/${element}Model`)().sync(syncOptions);
      }
    });
  });
};
