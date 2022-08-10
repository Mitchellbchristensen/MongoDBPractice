const express = require('express')
const router = express.Router()
const {
    getTestLogs,
    getValidDayTestLogs,
    setTestLogs,
    updateTestLogs,
    deleteTestLogs,
    deleteOldLogs
} = require('../controllers/testLogController')

router.route('/').get(getTestLogs).post(setTestLogs)
router.route('/:id').put(updateTestLogs).delete(deleteTestLogs)
router.route('/clearHistory').delete(deleteOldLogs)
router.route('/validDayLogs').get(getValidDayTestLogs)

module.exports = router
