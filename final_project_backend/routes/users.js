var models = require('../models');
var express = require('express');
var router = express.Router();
var cors = require('cors')

router.use(cors());

/**
 * Endpoint to update a users reviews
 */
router.patch('/:id/ratings/', function (req, res) {
  const id = req.params.id;
  const rating = req.body.rating;
  models.menu_item_ratings.update({ rating: rating, updatedAt: new Date() },
    { where: { id: id } })
    .then(function (rows) {
      res.send();
    });
});

/**
 * Endpoint to get all user reviews for all restaurants
 * they have reviews.
 */
router.get('/:userid/ratings', function (req, res) {
  const userId = req.params.userid;
  getUserRestaurantReviews(userId, null, true)
    .then(function (results) {
      res.json(results);
    });
});

/**
 * Endpoint to delete a user review
 */
router.delete('/:id/ratings/', function (req, res) {
  const id = req.params.id;
  models.menu_item_ratings.destroy({ where: { id: id } })
    .then(function (result) {
      res.send();
    });
});

/**
 * Endpoint to retrieve user reviews for 
 * a specific restaurant
 */
router.get('/:userid/restaurant/:id', function (req, res) {
  const userId = req.params.userid;
  const restaurantId = parseInt(req.params.id);
  getUserRestaurantReviews(userId, restaurantId, false)
    .then(function (results) {
      res.json(results);
    });
});

/**
 * Endpoint to sumbit a review for an item
 */
router.post('/:id/ratings', function (req, res) {
  const userId = req.body.userId;
  const menuitemId = req.body.menuitemId;
  const rating = req.body.rating;
  models.menu_item_ratings.build({
    rating: rating, userId: userId,
    menuitemId: menuitemId, createdAt: new Date(), updatedAt: new Date()
  })
    .save().then(function (rating) {
      res.send();
    })
    .catch(function (err) {
      // print the error details
      console.log(err);
    });
});

/**
 * Retunrs all user reviews with userId for restaurant with restaurantId
 * @param {user id} userId 
 * @param {restaurant id} restaurantId 
 */
function getUserRestaurantReviews(userId, restaurantId, search_all) {
  return models.menu_item_ratings
    .findAll({
      where: { userId: userId }, include: [{
        model: models.menu_items,
        include: [models.restaurants, { model: models.menu_item_tags, include: [models.tags] }]
      }]
    })
    .then(function (results) {
      let reviewsArr = [];
      results.forEach(function (rating) {
        rating.dataValues.menuitem = rating.dataValues.menuitem.dataValues;
        rating.dataValues.menuitem.restaurant = rating.dataValues.menuitem.restaurant.dataValues;
        let itemTags = [];
        rating.dataValues.menuitem.menuitemtags.forEach(function (tag) {
          itemTags.push(tag.tag.dataValues.name);
        });
        rating.dataValues.menuitem.menuitemtags = itemTags;
        let restaurant_id = rating.dataValues.menuitem.restaurant.id;
        if (restaurant_id === restaurantId && !search_all) {
          reviewsArr.push(rating.dataValues);
        } else if (search_all) {
          reviewsArr.push(rating.dataValues);
        }
      });
      return reviewsArr;
    });
}

module.exports = router;
