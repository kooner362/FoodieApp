'use strict';
module.exports = (sequelize, DataTypes) => {
  var menu_item_tags = sequelize.define('menuitemtags');
  menu_item_tags.associate = function(models) {
    // associations can be defined here
    models.menu_item_tags.belongsTo(models.tags, {
      onDelete: "CASCADE",
    });
    models.menu_item_tags.belongsTo(models.menu_items, {
      onDelete: "CASCADE",
    });
  }
  return menu_item_tags;
};