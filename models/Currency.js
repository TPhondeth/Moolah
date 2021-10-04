const {
  Model,
  DataTypes
} = require("sequelize");
const sequelize = require("../config/connection");

class Currency extends Model {}

Currency.init({
  // Define columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "currency",
});

module.exports = Currency;