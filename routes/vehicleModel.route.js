import { Router } from "express";
import { authorizeAdmin } from "../middleware/middleware.js";
import {
  createVehicleModel,
  deleteVehicleModel,
  getVehicleModelById,
  getVehicleModels,
  updateVehicleModel,
} from "../controllers/vehicleModel.controller.js";

const router = Router();

router.get("/", getVehicleModels);
router.get("/:id", getVehicleModelById);
router.post("/", authorizeAdmin, createVehicleModel);
router.patch("/:id", authorizeAdmin, updateVehicleModel);
router.delete("/:id", authorizeAdmin, deleteVehicleModel);

export default router;
