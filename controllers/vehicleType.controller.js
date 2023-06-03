import VehicleType from "../models/vehicleType.model.js";

export const getVehicleTypesByBrandId = async (req, res) => {
  try {
    const { brand_id } = req.query;

    const vehicleTypes = await VehicleType.findAll({
      where: {
        brand_id: +brand_id,
      },
      attributes: ["name", "brand_id"],
    });

    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createVehicleType = async (req, res) => {
  try {
    const { name, brand_id } = req.body;

    await VehicleType.create({
      name,
      brand_id,
    });

    res.status(201).json({ msg: "Berhasil ditambahkan" });
  } catch (error) {
    console.error("Gagal ditambahkan:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleTypes = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const { count, rows: vehicleTypes } = await VehicleType.findAndCountAll({
      attributes: ['id', 'name', 'brand_id'],
      limit: +limit,
      offset: +offset,
    });
    res.json({
        total: count,
        limit: +limit,
        skip: offset,
        data: vehicleTypes,
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleTypeById = async (req, res) => {
  try {
    const vehicleType = await VehicleType.findByPk(req.params.id, {
      attributes: ["id", "name", "brand_id"],
    });

    if (vehicleType) {
      res.status(200).json({ vehicleType });
    } else {
      res.status(404).json({ msg: "VehicleType tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateVehicleType = async (req, res) => {
  try {
    const { name, brand_id } = req.body;
    const vehicleType = await VehicleType.findByPk(req.params.id);
    if (vehicleType) {
      vehicleType.name = name;
      vehicleType.brand_id = brand_id;
      await vehicleType.save();

      res
        .status(200)
        .json({ msg: "VehicleType Berhasil di Update", vehicleType });
    } else {
      res.status(404).json({ msg: "VehicleType tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteVehicleType = async (req, res) => {
  try {
    const vehicleType = await VehicleType.findByPk(req.params.id);
    if (vehicleType) {
      await vehicleType.destroy();

      res.status(200).json({ msg: "VehicleType Berhasil di Hapus" });
    } else {
      res.status(404).json({ msg: "VehicleType tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
