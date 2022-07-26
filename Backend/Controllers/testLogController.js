const asyncHandler = require('express-async-handler')
const testLog = require('../models/testLogModel')

// get goals
const getTestLogs = asyncHandler(async (req, res) => {
    const testLogs = await testLog.find()

    res.status(200).json(testLogs)
})

// set goals
const setTestLogs = asyncHandler(async (req, res) => {
    const setDateTime = Date.now()

    if(!req?.body?.title) {
        res.status(400)
        throw new Error('Title not found')
    }
    if(typeof(req?.body?.testPassed) !== "boolean") {
        res.status(400)
        throw new Error('testPassed not found')
    }
    if(typeof(req?.body?.numberOfStepFails) !== "number") {
        res.status(400)
        throw new Error('numberOfStepFails not found')
    }
    const setLog = await testLog.create({
        title: req.body.title,
        runDateTime: setDateTime,
        numberOfStepFails: req.body.numberOfStepFails,
        testPassed: req.body.testPassed
    })

    res.status(200).json(setLog)
})

// update goals
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

// delete goals
const deleteTestLogs = asyncHandler(async (req, res) => {
    const log = await testLog.findById(req.params.id)

    if (!log) {
        res.status(400)
        throw new Error('Log not found')
    }

    await log.remove()

    res.status(200).json({id: req.params.id})
})

module.exports ={
    getTestLogs,
    setTestLogs,
    updateTestLogs,
    deleteTestLogs
}