import VehicleBrand from "../models/vehicleBrand.model.js";

export const createVehicleBrand = async (req, res) => {
  try {
    const { name } = req.body;

    await VehicleBrand.create({
      name,
    });

    res.status(201).json({ msg: "Berhasil ditambahkan" });
  } catch (error) {
    console.error("Gagal ditambahkan:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleBrands = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const { count, rows: vehicleBrands } = await VehicleBrand.findAndCountAll({
      attributes: ["id", "name"],
      limit: +limit,
      offset: +offset,
    });
    res.json({
      total: count,
      limit: +limit,
      skip: offset,
      data: vehicleBrands,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleBrandById = async (req, res) => {
  try {
    const vehicleBrand = await VehicleBrand.findByPk(req.params.id, {
      attributes: ["id", "name"],
    });

    if (vehicleBrand) {
      res.status(200).json({ vehicleBrand });
    } else {
      res.status(404).json({ msg: "VehicleBrand tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateVehicleBrand = async (req, res) => {
  try {
    const { name } = req.body;
    const vehicleBrand = await VehicleBrand.findByPk(req.params.id);
    if (vehicleBrand) {
      vehicleBrand.name = name;
      await vehicleBrand.save();

      res
        .status(200)
        .json({ msg: "VehicleBrand Berhasil di Update", vehicleBrand });
    } else {
      res.status(404).json({ msg: "VehicleBrand tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteVehicleBrand = async (req, res) => {
  try {
    const vehicleBrand = await VehicleBrand.findByPk(req.params.id);
    if (vehicleBrand) {
      await vehicleBrand.destroy();

      res.status(200).json({ msg: "VehicleBrand Berhasil di Hapus" });
    } else {
      res.status(404).json({ msg: "VehicleBrand tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
