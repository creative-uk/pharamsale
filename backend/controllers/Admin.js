import UserModel from "../models/user.js";

const Getuser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
        console.error(error); // Log the error for debugging
    }
};
const Deleteuser = async (req, res) => {
    try {
        const userId = req.params.id;
        const checkAdmin = await UserModel.findById(userId)
        if(checkAdmin.role == "admin") {
            return res.status(404).json({ success: false, message: "Admin cannot delete own id" });

        }
        const user = await UserModel.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
        console.log("Error deleting user:", error); // Log the error for debugging
    }
};


export { Getuser , Deleteuser };
