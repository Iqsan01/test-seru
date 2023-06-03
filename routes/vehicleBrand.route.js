import { Router } from "express";
import { authorizeAdmin } from "../middleware/middleware.js";
import {
  createVehicleBrand,
  deleteVehicleBrand,
  getVehicleBrandById,
  getVehicleBrands,
  updateVehicleBrand,
} from "../controllers/vehicleBrand.controller.js";

const router = Router();

router.get("/", getVehicleBrands);
router.get("/:id", getVehicleBrandById);
router.post("/",authorizeAdmin, createVehicleBrand);
router.patch("/:id", authorizeAdmin, updateVehicleBrand);
router.delete("/:id", authorizeAdmin, deleteVehicleBrand);

export default router;
