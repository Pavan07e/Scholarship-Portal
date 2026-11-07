var mongoose = require('mongoose');

var ForumSchema = new mongoose.Schema({
    id:Number,
    question: [{
        qnumber:Number,
        qtext:String,
        answers:[{
            ansno:Number,
            anstext:String
        }]
    }]

});


module.exports =mongoose.model("Forum",ForumSchema);

