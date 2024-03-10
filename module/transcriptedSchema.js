const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    roomId: {
        type:String,
        required: true,
    },
    conversation : [{
        myId: {
            type:String,
            required: true,
        },
        transcript : {
            type:String,
            required: true,
        },
    }]
}, {strict: false});

const Conversation = mongoose.model.transcriptedSchema || mongoose.model('transcriptedSchema', Schema);

export default Conversation;