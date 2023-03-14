import User from "../database/models/users";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({createdAt:-1});
    if (!users) { return res.status(404).json({ status: false, message: 'users not found'}) }
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  const {id} = req.query;
  try {
    const user = await User.findById(id);
    if (!user) { return res.status(404).json({ status: false, message: 'user not found'}) }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addUser = async (req, res) => {
  const { name , email , password } = req.body;
  if (!name && !email && !password ) {
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
        if (!user) { return res.status(404).json({ status: false, message: 'user not found'}) }
        return res.status(200).json({ success: true, message: 'user deleted'});
    } catch (err) { res.status(500).json({ success: false, message: err.name }) }
};

export const updateUser = async (req, res) => {
  const { id } = req.query;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) { return res.status(404).json({ status: false, message: 'user not updated'})}
        return res.status(200).json({ success: true, message: 'user updated', data: user });
    } catch (err) { res.status(500).json({ success: false, message: err.name }) }
};
