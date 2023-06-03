import Pricelist from "../models/priceList.model.js";

export const createPricelist = async (req, res) => {
  try {
    const { year_id, model_id } = req.body;

    await Pricelist.create({
      year_id,
      model_id,
    });

    res.status(201).json({ msg: "Berhasil ditambahkan" });
  } catch (error) {
    console.error("Gagal ditambahkan:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPricelists = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const { count, rows: pricelists } = await Pricelist.findAndCountAll({
      attributes: ['id', 'year_id', 'model_id'],
      limit: +limit,
      offset: +offset,
    });
    res.json({
        total: count,
        limit: +limit,
        skip: offset,
        data: pricelists,
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPricelistById = async (req, res) => {
  try {
    const pricelist = await Pricelist.findByPk(req.params.id, {
      attributes: ["id", "year_id", "model_id"],
    });

    if (pricelist) {
      res.status(200).json({ pricelist });
    } else {
      res.status(404).json({ msg: "Pricelist tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePricelist = async (req, res) => {
  try {
    const { year_id, model_id } = req.body;
    const pricelist = await Pricelist.findByPk(req.params.id);
    if (pricelist) {
      pricelist.year_id = year_id;
      pricelist.model_id = model_id;
      await pricelist.save();

      res
        .status(200)
        .json({ msg: "Pricelist Berhasil di Update", pricelist });
    } else {
      res.status(404).json({ msg: "Pricelist tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePricelist = async (req, res) => {
  try {
    const pricelist = await Pricelist.findByPk(req.params.id);
    if (pricelist) {
      await pricelist.destroy();

      res.status(200).json({ msg: "Pricelist Berhasil di Hapus" });
    } else {
      res.status(404).json({ msg: "Pricelist tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
