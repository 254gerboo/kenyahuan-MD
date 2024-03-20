const mongooseose = require('mongoose');
const HaiguSchema = new mongoose.Schema({ id: { type: String, required: true, unique: true }, haig: { type: String,  default: "false"},  })
const haigu =  mongooseose.model("haigu", HaiguSchema)
module.exports = { haigu }  
        

