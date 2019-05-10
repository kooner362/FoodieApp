'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurant_tags = sequelize.define('restauranttags', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.restaurant_tags.belongsTo(models.tags, {
          onDelete: "CASCADE",
        });
        models.restaurant_tags.belongsTo(models.restaurants, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return restaurant_tags;
};