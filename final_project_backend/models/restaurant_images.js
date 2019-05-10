'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurant_images = sequelize.define('restaurant_images', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.restaurant_images.belongsTo(models.restaurants, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return restaurant_images;
};