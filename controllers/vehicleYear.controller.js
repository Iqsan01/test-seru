import VehicleYear from "../models/vehicleYear.model.js";

export const createVehicleYear = async (req, res) => {
  try {
    const { year } = req.body;

    await VehicleYear.create({
      year,
    });

    res.status(201).json({ msg: "Berhasil ditambahkan" });
  } catch (error) {
    console.error("Gagal ditambahkan:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleYears = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const { count, rows: vehicleYears } = await VehicleYear.findAndCountAll({
      attributes: ['id', 'year'],
      limit: +limit,
      offset: +offset,
    });
    res.json({
        total: count,
        limit: +limit,
        skip: offset,
        data: vehicleYears,
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVehicleYearById = async (req, res) => {
  try {
    const vehicleYear = await VehicleYear.findByPk(req.params.id, {
      attributes: ["id", "year"],
    });

    if (vehicleYear) {
      res.status(200).json({ vehicleYear });
    } else {
      res.status(404).json({ msg: "VehicleYear tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateVehicleYear = async (req, res) => {
  try {
    const { year } = req.body;
    const vehicleYear = await VehicleYear.findByPk(req.params.id);
    if (vehicleYear) {
      vehicleYear.year = year;
      await vehicleYear.save();

      res
        .status(200)
        .json({ msg: "VehicleYear Berhasil di Update", vehicleYear });
    } else {
      res.status(404).json({ msg: "VehicleYear tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteVehicleYear = async (req, res) => {
  try {
    const vehicleYear = await VehicleYear.findByPk(req.params.id);
    if (vehicleYear) {
      await vehicleYear.destroy();

      res.status(200).json({ msg: "VehicleYear Berhasil di Hapus" });
    } else {
      res.status(404).json({ msg: "VehicleYear tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
