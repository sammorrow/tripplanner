var express = require('express');
var Promise = require('bluebird');
var database = require("../models")

var router = express.Router();

router.get("/", function(req, res, next) {
    var pullingActivities = database.Activity.findAll()
    var pullingHotels = database.Hotel.findAll();
    var pullingRestaurants = database.Restaurant.findAll()

    Promise.all([pullingActivities, pullingHotels, pullingRestaurants])
        .spread(function(activities, hotels, restaurants) {
            console.log(activities)
            res.render("sidebar", {
                activities,
                hotels,
                restaurants
            })
        })

});


router.use("/", function(req, res) {
    res.render("error")
})

module.exports = router