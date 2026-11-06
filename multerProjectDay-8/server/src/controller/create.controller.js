const profileModel = require("../schema/profile.schema");

const createController = (req,res)=>{
    const body = req.body;
    const file = req.file;
    profileModel.create({
        name:body.name[0],
        age:body.name[1],
        profilePic:file.path
    })
    res.send("everything is okkkkk");
}
module.exports = {
    createController
}