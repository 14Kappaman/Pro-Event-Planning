const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rsvp extends Model{}

Rsvp.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      guest_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      event_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'events',
              key: 'id'
          }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'rsvp',
    }
  );
  
  module.exports = Rsvp;