var sql = require('mysql');
var con = sql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '05cqwsbsy27',
    database: 'shopping'
});
con.connect();
const db = {
    getUser(params,callback) {
        var sql = `select * from wx_user where openid = '${params.openid}'`;
        con.query(sql, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback({
                    code: 200,
                    msg: "新增成功",
                    data: result
                });
            }
        });
    },
    createUser(params,callback) {
        var sql = `insert into wx_user(openid, nickname, avatarurl, gender, country, province, city, language, unionid, ctime) values ('${params.openid}','${params.nickname}','${params.avatarurl}',${params.gender},'${params.country}','${params.province}','${params.city}','${params.language}','${params.unionid}',${params.ctime})`;
        con.query(sql, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback({
                    code: 200,
                    msg: "新建成功"
                });
            }
        });
    },
    updateUser(params,callback) {
        var sql = `update wx_user 
        set 
            openid='${params.openid}',
            nickname='${params.nickname}',
            avatarurl='${params.avatarurl}',
            gender=${params.gender},
            country='${params.country}',
            province='${params.province}',
            city='${params.city}',
            language='${params.language}',
            unionid='${params.unionid}',
            ctime=${params.ctime} 
        where
            openid = '${params.openid}'`
        con.query(sql, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback({
                    code: 200,
                    msg: "更新成功"
                });
            }
        });
    },
    deleteUser(params,callback) {
        var sql = `delete from wx_user where openid = '${params.openid}'`;
        con.query(sql, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback({
                    code: 200,
                    msg: "删除成功"
                });
            }
        });
    }
}
// 查询
module.exports = db