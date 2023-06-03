import { Router } from "express";
import { authorizeAdmin } from "../middleware/middleware.js";
import {
  createVehicleYear,
  deleteVehicleYear,
  getVehicleYearById,
  getVehicleYears,
  updateVehicleYear,
} from "../controllers/vehicleYear.controller.js";

const router = Router();

router.get("/", getVehicleYears);
router.get("/:id", getVehicleYearById);
router.post("/", authorizeAdmin, createVehicleYear);
router.patch("/:id", authorizeAdmin, updateVehicleYear);
router.delete("/:id", authorizeAdmin, deleteVehicleYear);

export default router;
