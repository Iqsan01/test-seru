import { Router } from "express";
import { authorizeAdmin } from "../middleware/middleware.js";
import {
  createPricelist,
  deletePricelist,
  getPricelistById,
  getPricelists,
  updatePricelist,
} from "../controllers/pricelist.controller.js";
const router = Router();

router.get("/", getPricelists);
router.get("/:id", getPricelistById);
router.post("/", authorizeAdmin, createPricelist);
router.patch("/:id", authorizeAdmin, updatePricelist);
router.delete("/:id", authorizeAdmin, deletePricelist);

export default router;
