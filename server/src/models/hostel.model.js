import mongoose,{Schema} from "mongoose";

const hostelSchema = new Schema ({
    name : {
        type : String,
        required : [true,"hostal name is required"],
        trim : true
    },
    city : {
        name : String,
        required : true,
        trim : true
    },
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      default: null, // null until someone verifies the location
    },
    lng: {
      type: Number,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false, // matches your "unverified until confirmed" design
    },
    wardenName: {
      type: String,
      default: "Not on record",
    },
    wardenContact: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      enum: ["boys", "girls", "co-ed"], // restricts to only these 3 values
      required: true,
    },
    capacity: {
      type: Number,
      default: null,
    },
    photos: { 
      type: [String], // array of image URLs
      default: [],
    },
},
{
    timestamps : true
})