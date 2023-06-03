import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";

const VehicleBrand = db.define(
  "VehicleBrand",
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
      beforeValidate: (brand) => {
        brand.updated_at = new Date();
      },
    },
  }
);

export default VehicleBrand;
