const jwt = require("jsonwebtoken");
const authUser = require('../model/users.model')
const { to, ReE, ReS }  = require('../service/util.service');

const login = async function(req, res){
    const body = req.params;
    console.log(body);
    let err, user;

    [err, obj] = await to(authUser.authUser(body))
    console.log(obj)
    return ReS(res, obj, 201);
}

module.exports.login = login;