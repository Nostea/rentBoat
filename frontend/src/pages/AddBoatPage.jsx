import Navbar from "../components/Navbar";
import NewBoatForm from "../components/NewBoatForm";
const AddBoatPage = () => {
  /*
 const [attachment, setAttachment] = useState();
  const addTransaction = (event) => {
    //...
     const formData = new FormData();
        formData.append("attachment", attachment, attachment.name); // daten anhängen append("fieldname", file/blob, "name of file")

    fetch("http://localhost:3003/api/v1/files/upload", {
      method: "POST",
      body: formData,
    }).then(...)
  }

  <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />


    <img
        src={"http://localhost:3003/" + transaction.fileName}
        alt="Attachment Image"
        width={600}
      />
    */
  return (
    <>
      <Navbar />
      <section className="flex flex-col pl-32 py-8 pr-4">
        <h1 className="pb-8 text-3xl font-bold">Add Boat</h1>
        <NewBoatForm />
      </section>
    </>
  );
};

export default AddBoatPage;
