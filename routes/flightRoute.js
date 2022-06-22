const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.example);

// book flight
router.post("/book", controller.bookFlight);

// get all flights route
router.get("/allflights", controller.getFlights);

// single flight route
router.get("/:id", controller.singleFlight);

//update Flight

router.put("/updateflight/:id", controller.updateFlight);

// delete flight

router.delete("/deleteflight/:id", controller.deleteFlight);

module.exports = router;
