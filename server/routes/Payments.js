// Import the required modules
const express = require("express")
const router = express.Router()
const {
  capturePayment,
  // verifySignature,
  verifyPayment,
  sendPaymentSuccessEmail,
} = require("../controllers/payments")
const { auth, isInstructor, isPatient, isAdmin } = require("../middlerware/auth")
router.post("/capturePayment", auth, isPatient, capturePayment)
router.post("/verifyPayment", auth, isPatient, verifyPayment)
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isPatient,
  sendPaymentSuccessEmail
)
// router.post("/verifySignature", verifySignature)

module.exports = router
