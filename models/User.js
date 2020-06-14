const mongobd = require ("mongoose")
const Schema = mongobd.Schema
const UserSchema = new Schema({
        nombre:{
        type: String,
        requiere:true
        },
        sexo: {
            type: String,
        requiere:true
        },
        telefono : {
            type: String,
            requiere:true 
        },
        date: {
            type : Date,
            default: Date.now
        }
})

module.exports = User =  mongobd.model("users", UserSchema);
