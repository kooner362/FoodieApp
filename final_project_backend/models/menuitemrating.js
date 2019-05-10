'use strict';
module.exports = (sequelize, DataTypes) => {
  var menu_item_ratings = sequelize.define('menuitemratings', {
    rating: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.menu_item_ratings.belongsTo(models.menu_items, {
          onDelete: "CASCADE",
        });
        models.menu_item_ratings.belongsTo(models.users, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return menu_item_ratings;
};