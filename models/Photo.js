const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Photo extends Model {}

Photo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Events',
            key: 'id'
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "User",
        key: "id"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "photo",
  }
);


module.exports = Photo;
