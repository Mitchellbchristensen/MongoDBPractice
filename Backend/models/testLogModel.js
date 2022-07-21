const mongoose = require('mongoose');

const testLogSchema = mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please add a title value']
        },
        runDateTime: {
            type: String,
            required: [true, 'Please add a runDateTime value']
        },
        suiteFail: {
            type: Boolean,
            required: [true, 'Please add a suiteFail value']
        },
        stepFails: {
            type: String,
            required: [true, 'Please add a stepFails value']
        },
        fullTestLog: {
            type: String,
            required: [true, 'Please add a fullTestLog value']
        },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('testLog', testLogSchema)