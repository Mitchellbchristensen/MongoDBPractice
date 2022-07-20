const asyncHandler = require('express-async-handler')
const testLog = require('../models')

// get goals
const getTestLogs = asyncHandler(async (req, res) => {
    const testLogs = await testLog.find()

    res.status(200).json(testLogs)
})

// set goals
const setTestLogs = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text data')
    }

    res.status(200).json({setTestLogs})
})

// update goals
const updateTestLogs = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Updated log ${req.params.id}`})
})

// delete goals
const deleteTestLogs = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete log ${req.params.id}`})
})

module.exports ={
    getTestLogs,
    setTestLogs,
    updateTestLogs,
    deleteTestLogs
}