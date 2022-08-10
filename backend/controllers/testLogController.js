const asyncHandler = require('express-async-handler')
const testLog = require('../models/testLogModel')

const getTestLogs = asyncHandler(async (req, res) => {
    const testLogs = await testLog.find()

    res.status(200).json(testLogs)
})

// get all valid goals from today
const getValidDayTestLogs = asyncHandler(async (req, res) => {
    let start = new Date();
    start.setHours(0,0,0,0);
    let end = new Date();
    end.setHours(23,59,59,999);

    const validDayTestLogs = await testLog.find({"createdAt": {$gte: start, $lt: end}, "validTestRun": true})

    res.status(200).json(validDayTestLogs)
})

const setTestLogs = asyncHandler(async (req, res) => {
    const setDateTime = Date.now()

    if (!req?.body?.title) {
        res.status(400)
        throw new Error('Title not found')
    }
    if (typeof (req?.body?.testPassed) !== "boolean") {
        res.status(400)
        throw new Error('testPassed not found')
    }
    if (typeof (req?.body?.numberOfStepFails) !== "number") {
        res.status(400)
        throw new Error('numberOfStepFails not found')
    }
    const setLog = await testLog.create({
        title: req.body.title,
        runDateTime: setDateTime,
        numberOfStepFails: req.body.numberOfStepFails,
        testPassed: req.body.testPassed,
        validTestRun: true // Sets the variable to true by default. Manually change it in compass or another tool if the test was invalid
    })

    res.status(200).json(setLog)
})

const updateTestLogs = asyncHandler(async (req, res) => {
    const log = await testLog.findById(req.params.id)

    if (!log) {
        res.status(400)
        throw new Error('Log not found')
    }

    const updatedLog = await testLog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedLog)
})

const deleteTestLogs = asyncHandler(async (req, res) => {
    const log = await testLog.findById(req.params.id)

    if (!log) {
        res.status(400)
        throw new Error('Log not found')
    }

    await log.remove()

    res.status(200).json({id: req.params.id})
})
//deletes logs older than 1 month
const deleteOldLogs = asyncHandler(async (req, res) => {

    const log = await testLog.find({createdAt: {$lte: Date.now() - 2629800000}})
    if (!log.length) {
        res.status(400)
        throw new Error('No Logs Found')
    }
    await log.remove()
    console.log('Logs Deleted')
    res.status(200).json({message: 'Logs Deleted'})

})

module.exports = {
    getTestLogs,
    getValidDayTestLogs,
    setTestLogs,
    updateTestLogs,
    deleteTestLogs,
    deleteOldLogs
}