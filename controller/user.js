import User from "../database/models/users";
import Exercise from "../database/models/exercies";
import bcrypt from 'bcrypt'
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    if (!users) { return res.status(404).json({ status: false, message: 'users not found' }) }
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    if (!user) { return res.status(404).json({ status: false, message: 'user not found' }) }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) {
    return res
      .status(404)
      .json({ success: false, message: "please fill all fields" });
  }
  try {
    const created = await User.create(req.body);
    if (!created) {
      return res
        .status(400)
        .json({ success: false, message: "user not created" });
    }
    res.status(201).json({ success: true, message: "User Created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) { return res.status(404).json({ status: false, message: 'user not found' })}
    const exerciseDeleted = await Exercise.deleteMany({userId:id})
    console.log(exerciseDeleted);
    return res.status(200).json({ success: true, message: 'user deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }) }
};

export const updateUser = async (req, res) => {
  const { id } = req.query;
  const { username, email, password, newpassword } = req.body;
  if (!username && !email && !password) {
    return res
      .status(404)
      .json({ success: false, message: "please fill all fields" });
  }
  try {
    const exist = await User.findById(id);
    console.log(exist);
    if (!exist) { return res.status(404).json({ status: false, message: 'user not found' }) }
    const compared = await bcrypt.compare(password, exist.password)
    if (!compared) { return res.status(400).json({ status: false, message: 'password is incorrect' }) }
    if (newpassword) {
      const newEncrypted = await bcrypt.hash(newpassword,10);
      const user = await User.findByIdAndUpdate(id, { username: username, email: email, password: newEncrypted }, { new: true });
      console.log('user with new password', user);
      if (!user) { return res.status(404).json({ status: false, message: 'user not updated' }) }
      return res.status(200).json({ success: true, message: 'user updated', data: user });
    }

    const user = await User.findByIdAndUpdate(id, {username: username, email: email} , { new: true });
    console.log('user with old password', user);

    if (!user) { return res.status(404).json({ status: false, message: 'user not updated' }) }
    return res.status(200).json({ success: true, message: 'user updated', data: user });
    

  } catch (err) { res.status(500).json({ success: false, message: err.message }) }
};
