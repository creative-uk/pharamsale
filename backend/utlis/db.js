import mongoose from "mongoose";

const DbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,  // Use the new URL string parser
            useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit the process if there's an error
    }
};

export default DbCon;
