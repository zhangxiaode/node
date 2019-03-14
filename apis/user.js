var mysql = require('../db/db.js');
module.exports = (app) => {
    app.get('/user', function (req, res) {
        mysql.getUser(req.query,(response) => {
            res.status(200)
            res.json(response)
        });
    })
    app.post('/user', function (req, res) {
        mysql.createUser(req.query,(response) => {
            res.status(200)
            res.json(response)
        });
    })
    app.put('/user', function (req, res) {
        mysql.updateUser(req.query,(response) => {
            res.status(200)
            res.json(response)
        });
    })
    app.delete('/user', function (req, res) {
        mysql.deleteUser(req.query,(response) => {
            res.status(200)
            res.json(response)
        });
    })
}