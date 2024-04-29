const NewBoatForm = () => {
  return (
    <>
      <form className="flex flex-col">
        <input type="text" name="boatname" id="boatname" placeholder="Boat name" className=" w-60 px-2 py-1 rounded-lg" />
        <fieldset className="flex flex-row flex-wrap gap-8">
          <div>
            <input type="checkbox" name="wood" id="wood" value="Wood" />
            <label htmlFor="wood" className="pl-2">
              Wood
            </label>
          </div>
          <div>
            <input type="checkbox" name="metal" id="metal" value="Metal" />
            <label htmlFor="metal" className="pl-2">
              Metal
            </label>
          </div>
          <div>
            <input type="checkbox" name="cardboard" id="metal" value="Cardboard" />
            <label htmlFor="cardboard" className="pl-2">
              Cardboard
            </label>
          </div>
          <div>
            <input type="checkbox" name="souls" id="souls" value="Souls" />
            <label htmlFor="souls" className="pl-2">
              Souls
            </label>
          </div>
          <div>
            <input type="checkbox" name="gfk" id="gfk" value="GFK" />
            <label htmlFor="gfk" className="pl-2">
              GFK
            </label>
          </div>
        </fieldset>
        <select name="" id="" placeholder="Boat type" className="bg-white w-40 px-2 py-1 rounded-lg">
          <option value="ghostship">Ghostship</option>
        </select>
        <button type="submit" className="bg-cyan px-4 py-2 rounded-lg hover:bg-skyblue">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewBoatForm;
