const mongoose = require('mongoose');

const testLogSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.models('testLog', testLogSchema)