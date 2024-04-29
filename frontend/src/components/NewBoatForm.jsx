import { useState } from "react";
import { backendUrl } from "../api/api";

const NewBoatForm = () => {
  const [name, setName] = useState("");
  const [material, setMaterial] = useState([]);
  const [builtyear, setBuiltyear] = useState(2000);
  const [serialnumber, setSerialnumber] = useState("");
  const [type, setType] = useState("ghostship");
  const [img, setImg] = useState("");
  const [capacity, setCapacity] = useState(2);

  const checkBoxSetter = (param) => {
    //console.log(param.target.checked, param.target.value);

    if (param.target.checked === true) {
      setMaterial([param.target.value, ...material]);
    } else {
      setMaterial(material.filter((filteredItem) => filteredItem !== param.target.value));
    }
    console.log(material);
  };

  const addBoat = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(serialnumber);
    console.log(material);
    console.log(builtyear);
    console.log(type);
    console.log(capacity);

    if (name.length <= 0 || serialnumber.length <= 0 || material.length <= 0 || builtyear.length <= 0 || type.length <= 0 || capacity.length <= 0) {
      return console.log("please enter a valid information");
    }

    const newBoat = {
      name: name,
      serialnumber: serialnumber,
      material: material,
      type: type,
      img: img,
      builtYear: builtyear,
      capacity: capacity,
    };
    /* fetch zum speichern des bilder
    const formData = new FormData();
    formData.append("attachment", img, img.name);

fetch zum speichern */
    fetch(`${backendUrl}/api/v1/boats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBoat),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setName("");
    setMaterial([]);
    setBuiltyear(2000);
    setSerialnumber("");
    setType("ghostship");
    setImg("");
    setCapacity(2);
  };

  return (
    <>
      <form className="flex flex-col">
        <input
          type="text"
          name="boatname"
          id="boatname"
          placeholder="Boat name"
          className=" w-60 px-2 py-1 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          name="serialnumber"
          id="serialnumber"
          placeholder="serialnumber"
          className=" w-60 px-2 py-1 rounded-lg"
          value={serialnumber}
          onChange={(e) => setSerialnumber(e.target.value)}
        />

        <input type="file" name="file" id="file" placeholder="image" />
        <input
          type="number"
          name="builtyear"
          id="builtyear"
          placeholder="builtyear"
          className=" w-60 px-2 py-1 rounded-lg"
          value={builtyear}
          onChange={(e) => setBuiltyear(e.target.value)}
        />

        <input
          type="number"
          name="capacity"
          id="capacity"
          placeholder="capacity"
          className=" w-60 px-2 py-1 rounded-lg"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <fieldset className="flex flex-row flex-wrap gap-8">
          <div>
            <input type="checkbox" name="wood" id="wood" value="Wood" onChange={(e) => checkBoxSetter(e)} />
            <label htmlFor="wood" className="pl-2">
              Wood
            </label>
          </div>
          <div>
            <input type="checkbox" name="metal" id="metal" value="Metal" onChange={(e) => checkBoxSetter(e)} />
            <label htmlFor="metal" className="pl-2">
              Metal
            </label>
          </div>
          <div>
            <input type="checkbox" name="cardboard" id="metal" value="Cardboard" onChange={(e) => checkBoxSetter(e)} />
            <label htmlFor="cardboard" className="pl-2">
              Cardboard
            </label>
          </div>
          <div>
            <input type="checkbox" name="souls" id="souls" value="Souls" onChange={(e) => checkBoxSetter(e)} />
            <label htmlFor="souls" className="pl-2">
              Souls
            </label>
          </div>
          <div>
            <input type="checkbox" name="gfk" id="gfk" value="GFK" onChange={(e) => checkBoxSetter(e)} />
            <label htmlFor="gfk" className="pl-2">
              GFK
            </label>
          </div>
        </fieldset>
        <select name="type" id="type" placeholder="Boat type" className="bg-white w-40 px-2 py-1 rounded-lg" onChange={(e) => setType(e.target.value)}>
          <option value="ghostship">Ghostship</option>
          <option value="sailboat">Sailboat</option>
          <option value="paddleboat">Paddleboat</option>
          <option value="containership">Containership</option>
          <option value="hovercraft">Hovercraft</option>
        </select>
        <button type="button" className="bg-cyan px-4 py-2 rounded-lg hover:bg-skyblue" onClick={addBoat}>
          Submit
        </button>
      </form>
    </>
  );
};

export default NewBoatForm;
