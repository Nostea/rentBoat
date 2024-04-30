import { useState } from "react";
import { backendUrl } from "../api/api";
import { useParams } from "react-router-dom";

const ReservationBoatForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");

  const { boatId } = useParams();

  const reserveBoat = (e) => {
    e.preventDefault();
    console.log(startDate);
    console.log(endDate);
    console.log(name);

    if (name.length <= 0 || startDate.length <= 0 || endDate.length <= 0) {
      return console.log("please add valid info");
    }

    const newReservation = {
      startDate: startDate,
      endDate: endDate,
      name: name,
      boatId: boatId,
    };

    fetch(`${backendUrl}/api/v1/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReservation),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setStartDate("");
    setEndDate("");
    setName("");
  };

  return (
    <>
      <h2 className="pb-4 text-2xl font-bold">Add Reservations</h2>
      <form className="flex flex-col gap-2 w-1/2">
        <input
          type="text"
          name="startDate"
          id="startDate"
          placeholder="start date DD/MM/YYYY"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className=" px-4  py-2 rounded-lg"
        />
        <input
          type="text"
          name="endDate"
          id="endDate"
          placeholder="end date DD/MM/YYYY"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className=" px-4  py-2 rounded-lg"
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="ship name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" px-4  py-2 rounded-lg"
        />
        <button type="button" className="bg-cyan px-4 py-2 rounded-lg hover:bg-skyblue" onClick={reserveBoat}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ReservationBoatForm;
