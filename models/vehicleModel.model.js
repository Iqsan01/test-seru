import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import VehicleType from "./vehicleType.model.js";

const VehicleModel = db.define(
  "VehicleModel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
    hooks: {
      beforeValidate: (model) => {
        model.updated_at = new Date();
      },
    },
  }
);

VehicleType.hasMany(VehicleModel, {
  foreignKey: "type_id",
});
VehicleModel.belongsTo(VehicleType, {
  foreignKey: "type_id",
});

export default VehicleModel;
