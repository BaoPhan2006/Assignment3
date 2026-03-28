const express = require("express");
const router = express.Router();

const {
  addReference,
  getAllReferences,
  getReferenceById,
  updateReference,
  deleteReference
} = require("../controllers/referenceController");

router.post("/", addReference);
router.get("/", getAllReferences);
router.get("/:id", getReferenceById);
router.put("/:id", updateReference);
router.delete("/:id", deleteReference);

module.exports = router;