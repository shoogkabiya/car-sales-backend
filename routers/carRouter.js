const router = require("express").Router();

//handlers imports
const { getCars, getCarByImage } = require("../handlers/cars/getCars");

//getCars
router.get("/car/getCars", getCars);

// getCarByImage
router.get("/car/getCarByImage", getCarByImage);

module.exports = router;
