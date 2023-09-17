import mongoose from "mongoose";
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const allUserDetails = [];
    allUsers.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("User unavailable...");
  }
  try {
    // (new: true) means updatedProfile will return the content after updation, not before updation
    const updatedProfile = await User.findByIdAndUpdate(
      _id,
      { $set: { name: name, about: about, tags: tags } },
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const getImage = async (req, res) => {
  try {
    const image = await User.find();
    console.log(image);
    res.status(200).json(image);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const postImage = async (req, res) => {
  const { id: _id } = req.params;
  console.log("id: " + _id);
  const { profileImage } = req.body;
  console.log("profileImage: " + profileImage);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("User unavailable...");
  }
  try {
    await User.findByIdAndUpdate(_id, {
      $set: { profileImage: profileImage },
    });
    res.status(200).json(profileImage);
  } catch (error) {
    console.log(error);
  }
};
