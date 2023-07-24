const mongoose=require('mongoose');
const workschema=new mongoose.Schema({
    info:{
        type:String,
        required:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
       type:String,
        required:true
    }
},{
    timestamps:true
})

const Work=mongoose.model('work',workschema);
module.exports=Work