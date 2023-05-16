"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        foreignKey: "idUser",
      });
      Transaction.hasMany(models.DetailTransaction, {
        foreignKey: "idTransaction",
      });
    }
  }
  Transaction.init(
    {
      idUser: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      date: DataTypes.DATE,
      status: DataTypes.ENUM,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
