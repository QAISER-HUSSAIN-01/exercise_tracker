import jwt from "jsonwebtoken";
import User from "../database/models/users";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({createdAt:-1});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {};

export const addUser = async (req, res) => {
  const { name , email , password } = req.body;
  if (!name && !email && !password ) {
    return res
      .status(404)
      .json({ success: false, message: "please fill all fields" });
  }
  try {
    const token = req.cookies.token;
    const tokenVerification = jwt.verify(token, process.env.SECRET);
    const created = await User.create(req.body);
    if (!created) {
      return res
        .status(400)
        .json({ success: false, message: "activity not created" });
    }
    await User.findByIdAndUpdate(
      tokenVerification.id,
      { $push: { exercises: created._id } },
      { new: true }
    );
    res.status(201).json({ success: true, message: "Activity Created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.query;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) { return res.status(404).json({ status: false, message: 'user not deleted' }) }
        return res.status(200).json({ status: true, message: 'user deleted', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
};
export const updateUser = async (req, res) => {
  const { id } = req.query;
    try {
        console.log(req.body);
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) { return res.status(404).json({ status: false, message: 'user not updated' }) }
        return res.status(200).json({ status: true, message: 'user updated', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
};
