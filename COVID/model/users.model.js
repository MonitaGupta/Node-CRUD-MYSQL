const jwt = require("jsonwebtoken");


const authUser = async function(userInfo){
    //const body = userInfo.email;
    let user = {text: "Result"};
    console.log({token: "testing"})
    let constant = jwt.sign({ foo: 'bar' }, 'secret');
    var car = {constant: constant};
    console.log(typeof car)
    return car

}
module.exports.authUser = authUser;