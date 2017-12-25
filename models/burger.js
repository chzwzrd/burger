var orm = require('../config/orm');

var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    }
}

module.exports = burger;