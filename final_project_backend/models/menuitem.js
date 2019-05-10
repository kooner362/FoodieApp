'use strict';
module.exports = (sequelize, DataTypes) => {
  var menu_items = sequelize.define('menuitems', {
    name: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    imgUrl : DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.menu_items.hasMany(models.menu_item_tags, {
          onDelete: "CASCADE",
        });
        models.menu_items.hasMany(models.menu_item_ratings, {
          onDelete: "CASCADE",
        });
        models.menu_items.belongsTo(models.restaurants, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return  menu_items;
};