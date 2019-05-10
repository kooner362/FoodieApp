'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurants = sequelize.define('restaurants', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    website: DataTypes.STRING,
    description: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.restaurants.hasMany(models.restaurant_tags, {
          onDelete: "CASCADE",
        });
        models.restaurants.hasMany(models.menu_items, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return restaurants;
};