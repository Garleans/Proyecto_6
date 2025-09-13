const User = require("../models/User");
const Cart = require("../models/Cart");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let foundUser = await User.findOne({ email });
    if (foundUser)
      return res.status(400).json({ message: "El usuario ya existe" });
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newCart = await Cart.create({});

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      cart: newCart
    });
    if (!newUser)
      return res.status(400).json({ error: "No se pudo registrar el usuario" });
    return res.status(201).json({ datos: newUser });
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al registrar el usuario",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundUser = await User.findOne({ email });
    if (!foundUser)
      return res.status(400).json({ message: "El usuario no existe" });

    const correctPassword = await bcryptjs.compare(
      password,
      foundUser.password
    );

    if (!correctPassword)
      return res
        .status(400)
        .json({ message: "El email o contrasena no corresponden" });

    const payload = {
      user: {
        id: foundUser._id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    res.json({
      message: "Hubo un error al obtener el token",
      error,
    });
  }
};

exports.verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ usuario: user });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error",
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.user.id;
  const updateData = req.body;

  try {
    if (updateData.email) {
      const emailExists = await User.findOne({ email: updateData.email });
      if (emailExists && emailExists._id.toString() !== userId) {
        return res.status(400).json({ message: "Hubo un error al actualizar la información" });
      }
    }

    if (updateData.password) {
      const salt = await bcryptjs.genSalt(10);
      updateData.password = await bcryptjs.hash(updateData.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario actualizado con éxito", usuario: updatedUser });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al actualizar el usuario",
      error: error.message,
    });
  }
};
