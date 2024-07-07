const mongoose = require('mongoose')
const {schema} = mongoose

const userSchema = new schema({
    name: String,
    email: {
        type:String,
        unique:true
    },
    password:String
})
const UserModel = mongoose.model('user',userSchema)
module.exports = UserModel;