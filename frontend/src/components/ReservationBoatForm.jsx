import { useState } from "react";
import { backendUrl } from "../api/api";

const ReservationBoatForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");

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
      <form className="flex flex-col">
        <input
          type="text"
          name="startDate"
          id="startDate"
          placeholder="start date DD/MM/YYYY"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input type="text" name="endDate" id="endDate" placeholder="end date DD/MM/YYYY" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <input type="text" name="name" id="name" placeholder="ship name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="button" className="bg-cyan px-4 py-2 rounded-lg hover:bg-skyblue" onClick={reserveBoat}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ReservationBoatForm;