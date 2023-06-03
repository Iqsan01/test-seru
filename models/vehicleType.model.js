import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import VehicleBrand from "./vehicleBrand.model.js";

const VehicleType = db.define(
  "VehicleType",
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
    brand_id: {
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
      beforeValidate: (type) => {
        type.updated_at = new Date();
      },
    },
  }
);

VehicleBrand.hasMany(VehicleType, {
  foreignKey: "brand_id",
});
VehicleType.belongsTo(VehicleBrand, {
  foreignKey: "brand_id",
});

export default VehicleType;
