import { Component } from "react";
import MusicainItem from "./MusicianItem";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      AllMusicians: [],
    };
  }
  RenderMusician = () => {
    return this.state.AllMusicians.map((musician) => {
      return (
        // <div>
        //   <h5>Name : {student.name}</h5>
        // </div>
        <MusicainItem oneMusician={musician} key={musician.id} />
      );
    });
  };
  render() {
    return (
      <div>
        Students
        <div>{this.RenderMusician()}</div>
      </div>
    );
  }
  componentDidMount() {
    fetch("http://localhost:4000/artists")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ AllMusicians: data });
        console.log(this.state.AllMusicians);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export default Home;
