const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user-schema");

exports.register = async (req, res) => {
  const { name, userName, password, isAdmin } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, userName, password: hashedPassword, isAdmin };
  const user = await User.create({ ...tempUser });
  const token = jwt.sign(
    { id: user._id, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  res.status(201).json({ status: "success", data: { user, token } });
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res
      .status(400)
      .json({ error: "please provide username and password" });
  }

  const user = await User.findOne({ userName });
  if (!user) {
    return res.status(401).json({ error: "wrong username" });
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ error: "wrong password" });
  }

  const token = jwt.sign(
    { id: user._id, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  res.status(200).json({ status: "success", data: { user, token } });
};
