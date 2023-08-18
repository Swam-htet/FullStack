var express = require("express");
var router = express.Router();

// import manufacturer controller
var manufacturers = require("./../controller/manufacturerController");

router.get("/", manufacturers.getAllManufacturer);

router.get("/:id", manufacturers.getManufacturerByID);

// router.get("/:name", manufacturers.getManufacturerByName);

router.post("/", manufacturers.createManufacturer);

router.put("/:id", manufacturers.updateManufacturerByID);

router.delete("/:id", manufacturers.deleteManufacturerByID);

module.exports = router;
