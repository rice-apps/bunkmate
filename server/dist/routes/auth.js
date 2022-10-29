const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
console.log("reached router");
router.post('/auth', authController.login);
module.exports = router;
//# sourceMappingURL=auth.js.map