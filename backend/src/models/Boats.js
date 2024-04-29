import mongoose from "mongoose";
const boatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    serialnumber: { type: String, required: true },
    material: { type: [String], required: true },
    type: { type: String, required: true },
    img: { type: String, required: false },
    builtYear: { type: Number, required: true },
    capacity: { type: Number, required: true },
  },
  { collection: "boats" }
);

export const Boats = mongoose.model("Boats", boatSchema);
