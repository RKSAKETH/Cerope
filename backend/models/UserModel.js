import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const UserSchema = new Schema({
  // -- Sign Up Page Fields --
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // -- Setup Account Page Fields --
  firstName: { type: String },
  lastName: { type: String },
  profilePicture: { type: String }, // URL to image
  dateOfBirth: { type: Date },
  stylePreference: { 
    type: String, 
    enum: ['Men', 'Women', 'Both'] 
  },
  country: { type: String },
  phoneNumber: { type: String },
  city: { type: String },
  
  // -- Profile Page Extra Fields --
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  
  createdAt: { type: Date, default: Date.now }
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel