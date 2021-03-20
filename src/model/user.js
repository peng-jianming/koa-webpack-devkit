import mongoose from "src/config/DBHelpler";

const userSchema = new mongoose.Schema({
  user_name: String,
  password: {
    type: String,
    select: false,
  },
});

export default mongoose.model("User", userSchema);
