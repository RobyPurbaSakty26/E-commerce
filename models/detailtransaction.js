"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailTransaction.belongsTo(models.Transaction, {
        foreignKey: "idTransaction",
      });
      DetailTransaction.belongsTo(models.Product, {
        foreignKey: "idProduct",
      });
    }
  }
  DetailTransaction.init(
    {
      idTransaction: DataTypes.INTEGER,
      idProduct: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DetailTransaction",
    }
  );
  return DetailTransaction;
};
