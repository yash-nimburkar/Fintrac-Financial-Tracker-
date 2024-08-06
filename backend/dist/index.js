"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const mongoURI = "mongodb+srv://yash2020nimburkar2020:0YSzOGk7SvK18aou@fintrac.yzqwami.mongodb.net/?retryWrites=true&w=majority&appName=Fintrac";
mongoose_1.default.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));
app.use("/financial-records", financial_records_1.default);
// app.get("/",(req,res)=>{
//     res.send("Server started")
// })
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
