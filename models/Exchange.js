const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Exchange extends Model {}

Exchange.init({
    // Define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    exchange: {
        type: DataTypes.STRING,
        allowNull: false
    },
    impact_score: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exchange',
});

module.exports = Exchange;