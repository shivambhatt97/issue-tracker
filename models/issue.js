const mongoose= require('mongoose');
const issueSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        require:true
    },
    description:{
        type:String,
        trim:true,
        require:true
    },
    author:{
        type:String,
        trim:true,
        require:true
    },
    labels: [
        {
            type:String,
            trim:true,
            require:true
        }
    ]
},{
    timestamps:true
});

const Issue = mongoose.model('Issue',issueSchema);

module.exports = Issue;