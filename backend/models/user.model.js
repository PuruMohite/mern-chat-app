//DB contains multiple collections, each collection has a structure which is defined by model and each entry in collection is called document.
//Model is essentially an object that represents the structure of the document in a collection.
// Field a property of document belonging to a collection. for eg fullname, username, password are all fields
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }  //createdAt, updatedAt => Member since <createdAt>
);

const User = mongoose.model("User", userSchema);

export default User;
