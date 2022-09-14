const func = require("./functions")
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log("Here")
    res.render("loginPage")
})
router.post("/", (req, res) =>{
 let usernamne = req.body.uname
 let password = req.body.psw
 result = func.Auth(usernamne,password)
 if(result != "err"){
     console.log(result)
     if (result.role == "SuperAdmin"){
        res.redirect(`./${result.userName}`)
     }
 }else{
     console.log("err")
 }

})

router
.route("/:userName")
.get((req, res) => {
    
    let userData = func.findUser(req.params.userName)
    let groupData = func.getgroupData()
    const names = []
    for(i = 0; i <= groupData.groups.length - 1; i++){
        names.push(groupData.groups[i].name)
        console.log(typeof(names))
    }
    
    
    
    res.render("SuperAdminGroups", {'userData': userData.groups, 'groupData': groupData, "names": names})
  })

  router.get("/signUp", (req, res) => {
    res.render("signUp")
})





module.exports = router