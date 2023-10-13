const User = require("../models/User");
exports.getUser = async (req, res) => {
  try {
    const userData = await User.find({});
    res.status(201).json({ success: true, data: userData });
  } catch (error) {
    console.log("getusers not working");
    res.send(`<p>/getUsers is not working</p>`);
    res.status(500).json({ success: false, error: error });
  }
};
