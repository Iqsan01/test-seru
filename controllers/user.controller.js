import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, is_admin } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      is_admin,
    });

    res.status(201).json({ msg: "Berhasil Menambahkan User" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const { count, rows: users } = await User.findAndCountAll({
      attributes: ["id", "name", "is_admin"],
      limit: +limit,
      offset: +offset,
    });
    res.json({
      total: count,
      limit: +limit,
      skip: offset,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ["id", "name", "is_admin"],
    });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ msg: "User tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password, is_admin } = req.body;
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.name = name;
      user.email = email;
      user.is_admin = is_admin;

      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      await user.save();

      res.status(200).json({ msg: "User Berhasil di Update", user });
    } else {
      res.status(404).json({ msg: "User tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();

      res.status(200).json({ msg: "User Berhasil di Hapus" });
    } else {
      res.status(404).json({ msg: "User tidak di temukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
