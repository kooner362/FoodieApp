'use strict';

var Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://labber:labber@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const models = {
  users: sequelize.import('./user'),
  tags: sequelize.import('./tag'),
  menu_item_ratings: sequelize.import('./menuitemrating'),
  menu_item_tags: sequelize.import('./menuitemtag'),
  menu_items: sequelize.import('./menuitem'),
  restaurant_tags: sequelize.import('./restauranttag'),
  restaurants: sequelize.import('./restaurant'),
  restaurant_images: sequelize.import('./restaurant_images')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
