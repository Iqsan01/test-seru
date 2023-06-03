import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import VehicleModel from "./vehicleModel.model.js";
import VehicleYear from "./vehicleYear.model.js";

const PriceList = db.define(
  "PriceList",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    model_id: {
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
      beforeValidate: (priceList) => {
        priceList.updated_at = new Date(); 
      },
    },
  }
);

VehicleModel.hasMany(PriceList, {
  foreignKey: "model_id",
});
PriceList.belongsTo(VehicleModel, {
  foreignKey: "model_id",
});

VehicleYear.hasMany(PriceList, {
  foreignKey: "year_id",
});
PriceList.belongsTo(VehicleYear, {
  foreignKey: "year_id",
});

export default PriceList;
