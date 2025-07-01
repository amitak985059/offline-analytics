const express = require('express')
const router = express.Router();
const logController = require('../controller/logController')

router.get('/session', logController.getUniqueSessionId)
router.get('/numberOfSession', logController.numberOfUniqueUser)
router.get('/getSessionDuration', logController.getAllSessionDurations)
router.get('/formSubmitCount', logController.formSubmitCount)
router.get('/pageViewCount', logController.pageViewCount)

module.exports = router