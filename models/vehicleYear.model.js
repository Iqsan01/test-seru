import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";

const VehicleYear = db.define(
  "VehicleYear",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
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
      beforeValidate: (year) => {
        year.updated_at = new Date();
      },
    },
  }
);

export default VehicleYear;
