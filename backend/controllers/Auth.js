import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

const register = async (req, res) => {
    try {
        const { name, email, password, userType } = req.body;

        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(401).json({ success: false, message: "User already exists" });
        }

        const hashpassword = await bcryptjs.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            password: hashpassword,
            userType,
        });

        await newUser.save();
        res.status(201).json({ success: true, message: "User registered", user: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
        console.error(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid Credentials" });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Password Incorrect" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
        });

        res.status(200).json({ success: true, message: "Login successful", user, token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
        console.log(error);
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('token')
                res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
        console.log(error);
    }
};
const CheckUser=async(req,res)=>{
  try {
      const user=req.user
      if (!user) {
          res.status(404).json({message:'User not found'})
      }
      res.status(200).json(user)

      
  } catch (error) {
      res.status(500).json({message:"internal server error"})
      console.log(error)
      
  }
}


export { register, login, logout , CheckUser};
