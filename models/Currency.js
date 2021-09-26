const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Currency extends Model {}

Currency.init({
    // Define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'currency',
});

module.exports = Currency;