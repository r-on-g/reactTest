import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true},
    password: { type: String, required: true}

});

export default mongoose.model("User", userSchema);
