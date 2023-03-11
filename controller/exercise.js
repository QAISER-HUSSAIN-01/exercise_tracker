import jwt from "jsonwebtoken";
import Exercise from "../database/models/exercies";
import User from "../database/models/users";

export const getAllExercises = async (req, res) => {
  try {
    const allExercies = await Exercise.find().sort({createdAt:-1});
    res.status(200).json({ success: true, data: allExercies });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getExercise = async (req, res) => {};

export const addExercise = async (req, res) => {
  const { name, description, activityType, duration, date } = req.body;
  if (!name && !description && !activityType && !duration && !date) {
    return res
      .status(404)
      .json({ success: false, message: "please fill all fields" });
  }
  try {
    const token = req.cookies.token;
    const tokenVerification = jwt.verify(token, process.env.SECRET);
    const created = await Exercise.create(req.body);
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
export const deleteExercise = async (req, res) => {
  const { id } = req.query;
    try {
        const exercise = await Exercise.findByIdAndDelete(id);
        if (!exercise) { return res.status(404).json({ status: false, message: 'exercise not deleted' }) }
        return res.status(200).json({ status: true, message: 'exercise deleted', data: exercise });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
};
export const updateExercise = async (req, res) => {
  const { id } = req.query;
    try {
        console.log(req.body);
        const exercise = await Exercise.findByIdAndUpdate(id, req.body, { new: true });
        if (!exercise) { return res.status(404).json({ status: false, message: 'exercise not updated' }) }
        return res.status(200).json({ status: true, message: 'exercise updated', data: exercise });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
};
