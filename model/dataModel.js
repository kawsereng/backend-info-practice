const mongooss =require('mongoose')
const {Schema}= mongooss


let infoData = new Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    city:{
            type:String,
        require:true
    }
})
module.exports = mongooss.model('idata',infoData)