const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Registration
async function register(req, res) {

  try {
    const { username, email, password } = req.body;

    // validate 
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Fields 'username,' 'email' and 'password' are required. Please ensure they are filled out.");
    }

    // check if email is already used
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Email taken; user already exists");
    }

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // trial ends
    newUser.trialExpires = new Date(
      new Date().getTime() + (newUser.trialPeriod * 24 * 60 * 60 * 1000)
    );

    await newUser.save();

    res.json({
      status: true,
      message: "Registration was successful",
      user: {
        username,
        email
      }
    });
  } catch (err) {
    throw new Error(err.message);
  }


}

// Login


// Logout


// Profile 


// Check user Auth Status




module.exports = {
  register
};