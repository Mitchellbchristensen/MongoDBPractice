const express = require('express')
const router = express.Router()
const {
    getTestLogs,
    setTestLogs,
    updateTestLogs,
    deleteTestLogs
} = require('../controllers/testlogController')

router.route('/').get(getTestLogs).post(setTestLogs)
router.route('/:id').put(updateTestLogs).delete(deleteTestLogs)

module.exports = router
