const Usermodel = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userLogin=async(req,res)=>{
    const {name, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const User= await Usermodel.create({
        name: name,
        email: email,
        password: hashedPassword,
    })
    res.status(201).send({msg:"registration Successfull"});
}

const userRegist = async (req, res) => {
    try {
      console.log("Request body: ", req.body);  // Log incoming request body
  
      const { email, password } = req.body;
  
      // Check if email and password are provided
      if (!email || !password) {
        return res.status(400).send({ msg: 'Email and password are required' });
      }
  
      // Generate salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user with hashed password
      const user = await Usermodel.create({
        email: email,
        password: hashedPassword,
      });
  
      // Respond with success message and created user data
      return res.status(201).send({ msg: 'Registration successful', user });
  
    } catch (error) {
      console.error(error);
      if (!res.headersSent) {  // Prevent sending headers if already sent
        return res.status(500).send({ msg: 'Server error' });
      }
    }
  };
module.exports={
    userLogin,
    userRegist
}
