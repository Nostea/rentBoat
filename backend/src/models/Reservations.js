import mongoose from "mongoose";

const reservationsSchema = new mongoose.Schema(
  {
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    name: { type: String, required: true },
    /*   boatId: { type: mongoose.Types.ObjectId, ref: "Boat", required: true }, */
  },
  { collection: "reservations" }
);

export const Reservations = mongoose.model("Reservations", reservationsSchema);
