import mongoose from "mongoose";

const reservationsSchema = new mongoose.Schema(
  {
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    name: { type: String, required: true },
  },
  { collection: "reservations" }
);

export const Reservations = mongoose.model("Reservations", reservationsSchema);
