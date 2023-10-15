var express = require("express");
var router = express.Router();

// import manufacturer controller
var manufacturersRoute = require("../controller/manufacturer.controller");

router.get("/", manufacturersRoute.getAllManufacturer);

router.get("/:id", manufacturersRoute.getManufacturerByID);

router.post("/", manufacturersRoute.createManufacturer);

router.put("/:id", manufacturersRoute.updateManufacturerByID);

router.delete("/:id", manufacturersRoute.deleteManufacturerByID);

module.exports = router;
