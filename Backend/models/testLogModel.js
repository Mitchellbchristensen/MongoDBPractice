const mongoose = require('mongoose');

const testLogSchema = mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please add a title value']
        },
        runDateTime: {
            type: String,
            required: [false, 'Please add a runDateTime value']
        },
        stepFails: {
            type: Number,
            required: [true, 'Please add a stepFails value']
        },
        testFail: {
            type: Boolean,
            required: [true, 'Please add a testFail value']
        }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('testLog', testLogSchema)