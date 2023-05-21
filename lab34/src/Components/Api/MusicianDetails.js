import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
let MusicianDetails = () => {
  let { id } = useParams();
  let [artist, setArtist] = useState({});
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:4000/artists/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //   this.setState({ AllStudents: data });
        console.log(data);
        setArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h5>{artist.name}</h5>
      <h5>
        <img src={`../covers/${artist.cover}.jpg`} alt="ee" />
      </h5>
      <h5>{artist.bio}</h5>
    </div>
  );
};
export default MusicianDetails;
