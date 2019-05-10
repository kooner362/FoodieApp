'use strict';
module.exports = (sequelize, DataTypes) => {
  var tags = sequelize.define('tags', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.tags.hasMany(models.restaurant_tags, {
          onDelete: "CASCADE",
        });
        models.tags.hasMany(models.menu_item_tags, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return tags;
};