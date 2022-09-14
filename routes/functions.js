var fs = require('fs')

var UData = fs.readFileSync('userData.json')
var  userData= JSON.parse(UData)

var GData = fs.readFileSync('data.json')
var groupData = JSON.parse(GData)

exports.getgroupData = function getgroupData(){
    return groupData
}

exports.Auth = function Auth(username, password){
    let i = 0
    while(i <= userData.users.length){
       
        if (userData.users[i].userName == username && userData.users[i].password == password){

                return userData.users[i]
        }
        i++
    }
    return("err")
}

exports.findUser = function findUser(username){
    let i = 0
    while(i <= userData.users.length){
       
        if (userData.users[i].userName == username ){

                return userData.users[i]
        }
        i++
    }
}