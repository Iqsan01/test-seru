import { Router } from "express";
import { authorizeAdmin } from "../middleware/middleware.js";
import {
  createVehicleType,
  deleteVehicleType,
  getVehicleTypeById,
  getVehicleTypes,
  getVehicleTypesByBrandId,
  updateVehicleType,
} from "../controllers/vehicleType.controller.js";

const router = Router();

router.get("/", getVehicleTypesByBrandId);
router.get("/all", getVehicleTypes);
router.get("/:id", getVehicleTypeById);
router.post("/", authorizeAdmin, createVehicleType);
router.patch("/:id", authorizeAdmin, updateVehicleType);
router.delete("/:id", authorizeAdmin, deleteVehicleType);

export default router;
