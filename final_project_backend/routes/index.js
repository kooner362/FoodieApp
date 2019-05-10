var models  = require('../models');
var express = require('express');
var router  = express.Router();
var cors = require('cors')

router.use(cors());


/**
 * Endpoint to login
 */
router.get('/login/:id', function(req, res) {
  const user_id = req.params.id;
  models.users.find({where:{email: user_id}})
  .then(function(user) {
    res.json(user.dataValues);
  })
  .catch(function(err) {
    res.json({});
  })
});

/**
 * Endpoint to login
 */
router.get('/logout', function(req, res) {
  res.json({});
});

/**
 * Returns all tags
 */
router.get('/tags', function(req, res) {
  return models.tags
  .findAll()
  .then(function(results) {
    let tags = [];
    results.forEach(function(result) {
      tags.push({id : result.dataValues.id, name : result.dataValues.name});
    });
    res.json(tags);
  })
  .catch(function(err) {
    res.json({});
  })
});

/**
 * Endpoint to retrieve all items in database
 */
router.get('/items', function(req, res) {
  allItems().then(function(results) {
    res.json(results);
  });
});

/**
 * Endpoint to retrieve all items in database
 */
router.get('/unapproveditems', function(req, res) {
  unApprovedItems().then(function(results) {
    res.json(results);
  });
});

/**
 * Endpoint to retrieve all items for a restaurant with id id
 */
router.get('/restaurants/:id/items', function(req, res) {
  const id = req.params.id;
  getMenuItemsByRestaurant(id).then(function(results) {
    res.json(results);
  });
});

/**
 * Route for creating a new menu item for a restaurant
 */
router.post('/items', function(req, res) {
  const name = req.body.name;// || 'test';
  const restaurantId = req.body.restaurantId;// || 1;
  const approved = false;
  const tags = req.body.tags; //|| [{id: 28, name: 'pizza'}, {id: 7, name:'italian'}, {id :2, name: 'pasta'}];

  models.menu_items.build({name: name, restaurantId: restaurantId, approved: approved, createdAt: new Date(), updatedAt: new Date()})
    .save().then(function(menu_item) {
      let menuitemId = menu_item.dataValues.id;
      tags.forEach(function(tag) {
        models.menu_item_tags.build({menuitemId: menuitemId, 
          tagId: tag.id, createdAt: new Date(), updatedAt: new Date()}).save()
      });
     res.send();
    })
    .catch(function (err) {
      // print the error details
      console.log(err);
    });
});

/**
 * Route for getting a list of all restaurants
 */
router.get('/restaurants', function(req, res) {
  allRestaurants().then(function(result) {
    res.json(result);
  });
});

/**
 * Route for getting a list of all unapproved restaurants
 */
router.get('/unapprovedrestaurants/', function(req, res) {
  notApprovedRestaurants().then(function(result) {
    res.json(result);
  });
});

 /* Route for getting detailed information for a restaurant
 */
router.get('/restaurant/:id/', function(req, res) {
  const restaurantId = req.params.id;
  getRestaurant(restaurantId)
  .then(function(result){
    res.json(result);
  })
  .catch(function(err) {
    res.json({});
  })
});

 /* Route for updating detailed information for a restaurant
 */
router.patch('/restaurant/:id/', function(req, res) {
  const restaurantId = req.params.id;
  models.restaurants.update({approved: true, updatedAt: new Date()}, 
  {where: {id: restaurantId}})
  .then(function(rows) {
    res.json(rows);
  });
});

 /* Route for deleting detailed information for a restaurant
 */
router.delete('/restaurant/:id/', function(req, res) {
  const restaurantId = req.params.id;
  models.restaurants.destroy({where: {id: restaurantId}})
  .then(function(rows) {
    res.json(rows);
  });
});

/**
 * Route for processing search results based on id(tags)
 */
router.get('/restaurants/:id/', function(req, res) {
  const tag = req.params.id;
  getRestaurantIds(tag)
  .then(function(idsArr) {
    getRestaurantsById(idsArr)
    .then(function(restaurants) {
      res.json(restaurants);
    })
    .catch(function(err) {
      res.json({});
    })
  })
  .catch(function(err) {
    res.json({});
  })
});

/**
 * Route for processing search results based on id(tags)
 */
router.get('/items/:id/', function(req, res) {
  const tag = req.params.id;
  getMenuItemIds(tag) 
  .then(function(idsArr) {
    getMenuItemsById(idsArr) 
    .then(function(menuItems) {
      res.json( menuItems);
    })
    .catch(function(err) {
      res.json({});
    })
  })
  .catch(function(err) {
    res.json({});
  })
});

 /* Route for getting detailed information for a restaurant
 */
router.patch('/item/:id/', function(req, res) {
  const menuId = req.params.id;
  models.menu_items.update({approved: true, updatedAt: new Date()}, 
  {where: {id: menuId}})
  .then(function(rows) {
    res.json(rows);
  });
});

 /* Route for getting detailed information for a restaurant
 */
router.delete('/item/:id/', function(req, res) {
  const menuId = req.params.id;
  models.menu_item_tags.destroy({where: {menuitemId: menuId}})
  .then(function(row) {
    models.menu_item_ratings.destroy({where:{menuitemId: menuId}})
    .then(function(result) {
      models.menu_items.destroy({where: {id: menuId}})
      .then(function(rows) {
        res.json(rows);
      });
    })
  });
});

/**
 * Endpoint to create new restaurants
 */
router.post('/restaurants', function(req, res) {
  const name = req.body.name;
  const address = req.body.address;
  const phone_number = req.body.phone_number;
  const website = req.body.website;
  const approved = false;
  const description = req.body.description;
  models.restaurants.build({name: name, address: address, phone_number: phone_number, 
    website: website, approved: approved, description: description, createdAt: new Date(), updatedAt: new Date()})
    .save()
    .then(function(restaurant) {
      res.status(200).end();
    })
    .catch(function(err){
      if (err) {
        console.log(err)
      }
    })
});

function getMenuItemsByRestaurant(restaurantId) {
  return models.menu_items
  .findAll({where: {approved: true, restaurantId: restaurantId}, include: [models.menu_item_ratings,
     {model: models.menu_item_tags, include: [models.tags]}]})
  .then(function(results) {
    let itemsArr = [];
    results.forEach(function(item) {
      let tags = [];
      item.menuitemtags.forEach(function(tag) {
        tags.push(tag.dataValues.tag.dataValues.name);
      });
      let sum_ratings = 0;
      let count_ratings = 0;
      item.menuitemratings.forEach(function(rating) {
        sum_ratings += rating.dataValues.rating;
        count_ratings++;
      });
      item.dataValues.menuitemtags = tags;
      let avg_rating = (sum_ratings/count_ratings) ? parseFloat((sum_ratings/count_ratings).toPrecision(2)) : 0
      item.dataValues.menuitemratings = avg_rating;
      delete item.menuitemratings;
      item.dataValues.numRatings = count_ratings;
      itemsArr.push(item.dataValues)
    });
    return itemsArr;
  });
}

/**
 * Gets all items for explore dishes page
 */
function allItems() {
  return models.menu_items
  .findAll({where: {approved: true}, include: [{model: models.menu_item_tags, include: [models.tags]}, 
    models.menu_item_ratings, models.restaurants]})
  .then(function(results) {
    let menuArr = [];
    results.forEach(function(result) {
      let tagsArr = [];
      result.dataValues.menuitemtags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      result.dataValues.menuitemtags = tagsArr;
      let count = result.dataValues.menuitemratings.length;
      let sum_ratings = 0;
      result.dataValues.menuitemratings.forEach(function(rating) {
        sum_ratings += rating.dataValues.rating;
      });
      result.dataValues.restaurant = result.restaurant.dataValues.name;
      delete result.dataValues.menuitemratings;
      result.dataValues['numRatings'] = count;
      result.dataValues['avg_rating'] = (sum_ratings/count) ? parseFloat((sum_ratings/count).toPrecision(2)) : 0
      menuArr.push(result.dataValues);
    });
    menuArr.sort(compare_avg_ratings);
    return menuArr;
  });
}

/**
 * Gets all items for explore dishes page
 */
function unApprovedItems() {
  return models.menu_items
  .findAll({where: {approved: false}, include: [{model: models.menu_item_tags, include: [models.tags]}, 
    models.menu_item_ratings, models.restaurants]})
  .then(function(results) {
    let menuArr = [];
    results.forEach(function(result) {
      let tagsArr = [];
      result.dataValues.menuitemtags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      result.dataValues.menuitemtags = tagsArr;
      let count = result.dataValues.menuitemratings.length;
      let sum_ratings = 0;
      result.dataValues.menuitemratings.forEach(function(rating) {
        sum_ratings += rating.dataValues.rating;
      });
      result.dataValues.restaurant = result.restaurant.dataValues.name;
      delete result.dataValues.menuitemratings;
      result.dataValues['numRatings'] = count;
      result.dataValues['avg_rating'] = (sum_ratings/count).toPrecision(2);
      menuArr.push(result.dataValues);
    });
    menuArr.sort(compare_avg_ratings);
    return menuArr;
  });
}

/**
 * Returns a list of all restaurants with tag names
 */
function allRestaurants() {
  return models.restaurants
  .findAll({where: {approved: true}, include: [{model: models.restaurant_tags, 
    include: [models.tags]}, {model: models.menu_items, include: [models.menu_item_ratings]}]})
  .then(function(results) {
    let restaurants = [];
    results.forEach(function(restaurant) {
      let count_ratings = 0;
      let ratings = [];
      let sum = 0;
      restaurant.menuitems.forEach(function(item) {
        item.menuitemratings.forEach(function(rating) {
          ratings.push(rating.dataValues.rating);
          sum += rating.dataValues.rating;
          count_ratings++;
        });
      });
      const avg_rating = (sum/ratings.length) ?  parseFloat((sum/ratings.length).toPrecision(2)):0;
      restaurant.dataValues['avg_rating'] = avg_rating;
      let restaurant_tags = restaurant.dataValues.restauranttags;
      let tagsArr = [];
      restaurant_tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      restaurant.dataValues.numRatings = count_ratings;
      restaurant.dataValues.restauranttags = tagsArr;
      delete restaurant.dataValues.menuitems
      restaurants.push(restaurant.dataValues);
    });
    restaurants.sort(compare_avg_ratings)
    return restaurants;
  });
}

/**
 * Returns a list of all unapproved restaurants with tag names
 */
function notApprovedRestaurants() {
  return models.restaurants
  .findAll({where: {approved: false}, include: [{model: models.restaurant_tags, 
    include: [models.tags]}, {model: models.menu_items, include: [models.menu_item_ratings]}]})
  .then(function(results) {
    let restaurants = [];
    results.forEach(function(restaurant) {
      let count_ratings = 0;
      let ratings = [];
      let sum = 0;
      restaurant.menuitems.forEach(function(item) {
        item.menuitemratings.forEach(function(rating) {
          ratings.push(rating.dataValues.rating);
          sum += rating.dataValues.rating;
          count_ratings++;
        });
      });
      const avg_rating = (sum/ratings.length) ?  parseFloat((sum/ratings.length).toPrecision(2)):0;
      restaurant.dataValues['avg_rating'] = avg_rating;
      let restaurant_tags = restaurant.dataValues.restauranttags;
      let tagsArr = [];
      restaurant_tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      restaurant.dataValues.numRatings = count_ratings;
      restaurant.dataValues.restauranttags = tagsArr;
      delete restaurant.dataValues.menuitems
      restaurants.push(restaurant.dataValues);
    });
    return restaurants;
  });
}

/**
 * Returns detailed information for specific restaurant
 * including all menu items sorted by highest ranking first
 * @param {restaurantId} id 
 */
function getRestaurant(id) {
  return models.restaurants
  .find({where: {id: id, approved: true}, include: [{model: models.restaurant_tags, 
    include: [models.tags]}, {model: models.menu_items,
      include: [models.menu_item_ratings, {model: models.menu_item_tags, 
        include: [models.tags]}]}]})
  .then(function(restaurant) {
    let menuItems = [];
    let menu_items = restaurant.dataValues.menuitems;
    let restauranttags = [];
    restaurant.restauranttags.forEach(function(tag) {
      restauranttags.push(tag.tag.dataValues.name);
    });
    restaurant.dataValues.restauranttags = restauranttags;
    let avg_ratings = {sum:0, count:0};
    menu_items.forEach(function(item) {
      let ratings = [];
      let sum_ratings = 0;
      let menu_item_tags = [];
      item.menuitemtags.forEach(function(tag) {
        menu_item_tags.push(tag.tag.dataValues.name)
      });
      item.dataValues.menuitemtags = menu_item_tags;
      item.menuitemratings.forEach(function(rating) {
        ratings.push(rating.dataValues);
        sum_ratings += rating.dataValues.rating;
        avg_ratings.sum += parseInt(rating.dataValues.rating);
        avg_ratings.count ++;
      });
      item.dataValues['numRatings'] = ratings.length;
      item.dataValues.menuitemratings = parseFloat((sum_ratings/ratings.length).toPrecision(2)) || 0;
      menuItems.push(item.dataValues);
    });
    restaurant.dataValues['numRatings'] = avg_ratings.count;
    avg_ratings = (avg_ratings.sum/avg_ratings.count) ? parseFloat((avg_ratings.sum/avg_ratings.count).toPrecision(2)): 0;
    menuItems.sort(compare_ratings);
    restaurant.dataValues.menuitems = menuItems;
    restaurant.dataValues['avg_rating'] = avg_ratings;
    return restaurant.dataValues;
  })
}


/**
 * Returns array of menu item ids for specific tag.
 * @param {Menu Item Tag} tag 
 */
function getMenuItemIds (tag) {
  return models.tags
  .find({where: {name: `${tag}`}, include: [models.menu_item_tags]})
  .then(function(results) {
    let menuItemIds = [];
    results.dataValues.menuitemtags.forEach(function(item) {
      menuItemIds.push(item.dataValues.menuitemId)
    })
    return menuItemIds;
  });
}

/**
 * Returns an array of Menu Item objects
 * @param {Array of menu item ids} arrIds 
 */
function getMenuItemsById (arrIds) {
  return models.menu_items
  .findAll({where: {approved:true, id: {$in: arrIds}}, include:[{model: models.menu_item_tags, 
    include: [models.tags]}, models.menu_item_ratings, models.restaurants]})
  .then(function(results) {
    let menuItems = [];
    results.forEach(function(item) {
      item.dataValues.restaurant = item.dataValues.restaurant.dataValues.name;
      let tags = item.dataValues.menuitemtags;
      let ratings = item.dataValues.menuitemratings;
      let tagsArr = [];
      let reviewsArr = [];
      let avg_ratings = 0;
      tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      item.dataValues.menuitemtags = tagsArr;
      ratings.forEach(function(rating) {
        reviewsArr.push({rating: rating.dataValues.rating, userId: rating.dataValues.userId});
        avg_ratings += rating.dataValues.rating;
      });
      item.dataValues['numRatings'] = reviewsArr.length;
      item.dataValues['avg_rating'] = parseFloat((avg_ratings/reviewsArr.length).toPrecision(2)) || 0;
      (avg_ratings.sum/avg_ratings.count) ? parseFloat((avg_ratings.sum/avg_ratings.count).toPrecision(2)): 0;
      item.dataValues.menuitemratings = reviewsArr;
      menuItems.push(item.dataValues);
    });
    menuItems.sort(compare_avg_ratings);
    return menuItems;
  });
}

/**
 * Returns restaurant objects for each restaurant id in array.
 * @param {Array of restaurant ids} arr 
 */
function getRestaurantsById(arr) {
  return models.restaurants
  .findAll({where: {approved: true, id: {$in: arr}}, include: [{model: models.menu_items, 
    where:{approved:true}, include: [models.menu_item_ratings]}, 
    {model : models.restaurant_tags, include: [models.tags]}]})
  .then(function(restaurants) {
    let restaurantsArr = [];
    restaurants.forEach(function(restaurant) {
      let avg_rating = 0;
      let rating_count = 0;
      restaurant.menuitems.forEach(function(item) {
        item.menuitemratings.forEach(function(rating) {
          avg_rating += rating.dataValues.rating;
          rating_count ++;
        });
      });
      delete restaurant.dataValues.menuitems;
      avg_rating = parseFloat((avg_rating/rating_count).toPrecision(2)) || 0;
      restaurant.dataValues.avg_rating = avg_rating;
      restaurant.dataValues['numRatings'] = rating_count;
      let tags = restaurant.dataValues.restauranttags;
      let tagsArr = [];
      tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.dataValues.name);
      });
      restaurant.dataValues.restauranttags = tagsArr;
      restaurantsArr.push(restaurant.dataValues);
    });
    restaurantsArr.sort(compare_avg_ratings);
    return restaurantsArr;
  });
}

/**
 * Returns array of restaurant ids.
 * @param {Restaurant Tag} tag 
 */
function getRestaurantIds (tag) {
  return models.tags
  .find({where: {name: `${tag}`}, include: [models.restaurant_tags]})
  .then(function(results) {
    let restaurantIds = [];
    results.dataValues.restauranttags.forEach(function(id){
      restaurantIds.push(id.dataValues.restaurantId);
    });
    return restaurantIds;
  });
}

/**
 * Function which sorts by menuitemratings
 */
function compare_ratings( a, b) {
  if ( a.menuitemratings < b.menuitemratings ){
    return 1;
  }
  if (a.menuitemratings > b.menuitemratings) {
    return -1;
  }
  return 0;
}

/**
 * Function which sorts by menuitemratings
 */
function compare_avg_ratings( a, b) {
  if ( a.avg_rating < b.avg_rating ){
    return 1;
  }
  if (a.avg_rating > b.avg_rating) {
    return -1;
  }
  return 0;
}

module.exports = router;
