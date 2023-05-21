import { NavLink } from "react-router-dom";
// import { useState } from "react";

let MusicianItem = (props) => {
  let { oneMusician } = props;
  console.log(oneMusician);
  //   let image = "./covers" + oneMusician.cover;
  //   let [m, setm] = useState({});
  return (
    <div>
      <h5>
        Name :{" "}
        <NavLink to={`/home/${oneMusician.id}`}>{oneMusician.name}</NavLink>{" "}
      </h5>
      <h5>
        <img src={`./covers/${oneMusician.cover}.jpg`} alt="ee" />
      </h5>
    </div>
  );
};
export default MusicianItem;
