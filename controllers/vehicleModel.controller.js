import VehicleModel from "../models/vehicleModel.model.js";

export const createVehicleModel = async (req, res) => {
  try {
    const { name, type_id } = req.body;

    await VehicleModel.create({
      name,
      type_id,
    });

    res.status(201).json({ msg: "Berhasil ditambahkan" });
  } catch (error) {
    console.error("Gagal ditambahkan:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleModels = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const { count, rows: vehicleModels } = await VehicleModel.findAndCountAll({
      attributes: ['id', 'name', 'type_id'],
      limit: +limit,
      offset: +offset,
    });
    res.json({
        total: count,
        limit: +limit,
        skip: offset,
        data: vehicleModels,
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleModelById = async (req, res) => {
  try {
    const vehicleModel = await VehicleModel.findByPk(req.params.id, {
      attributes: ["id", "name", "brand_id"],
    });

    if (vehicleModel) {
      res.status(200).json({ vehicleModel });
    } else {
      res.status(404).json({ msg: "VehicleModel tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateVehicleModel = async (req, res) => {
  try {
    const { name, type_id } = req.body;
    const vehicleModel = await VehicleModel.findByPk(req.params.id);
    if (vehicleModel) {
      vehicleModel.name = name;
      vehicleModel.type_id = type_id;
      await vehicleModel.save();

      res
        .status(200)
        .json({ msg: "VehicleModel Berhasil di Update", vehicleModel });
    } else {
      res.status(404).json({ msg: "VehicleModel tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteVehicleModel = async (req, res) => {
  try {
    const vehicleModel = await VehicleModel.findByPk(req.params.id);
    if (vehicleModel) {
      await vehicleModel.destroy();

      res.status(200).json({ msg: "VehicleModel Berhasil di Hapus" });
    } else {
      res.status(404).json({ msg: "VehicleModel tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
