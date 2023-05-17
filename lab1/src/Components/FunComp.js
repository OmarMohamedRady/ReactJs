import "./style.css";
// function ElementsFunctional() {
//   const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
//   var imgSrc = "./Images/1.jpg";
//   var index = 1;
//   //   let name = "Ahmed";
//   //   let Styles = {
//   //     style1: {
//   //       backgroundColor: "red",
//   //       textAlign: "right",
//   //       color: "blue",
//   //     },
//   //     style2: {
//   //       backgroundColor: "blue",
//   //       textAlign: "center",
//   //       color: "yellow",
//   //     },
//   //   };
//   //   let getData = function (e) {
//   //     console.log(e.target.value);
//   //     name = e.target.value;
//   //   };

//   let getNextImg = function () {
//     // name = e.target.value;
//     console.log("hiiii");
//     imgSrc = "./Images/" + images[index];
//     index++;
//     if (index >= 3) {
//       index = 3;
//     }
//   };
//   let getPrevImg = function (e) {
//     console.log(e.target.value);
//     // name = e.target.value;
//   };
//   let slideImg = function (e) {
//     console.log(e.target.value);
//     // name = e.target.value;
//   };
//   let StopImg = function (e) {
//     console.log(e.target.value);
//     // name = e.target.value;
//   };
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h1>Welcome</h1>

//       <div>
//         <img src={imgSrc} alt="error" />
//       </div>
//       <div>
//         <button onClick={getNextImg}>Next</button>
//         <button onclick={getPrevImg}>Prev</button>
//         <button onclick={slideImg}>Slide</button>
//         <button onclick={StopImg}>Stop</button>
//       </div>
//     </div>
//   );
// }

// export default ElementsFunctional;

import { Component } from "react";
class ElementsFunctional extends Component {
  images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  index = 1;
  interval;

  //name = "Ahmed";
  //   Styles = {
  //     style1: {
  //       backgroundColor: "red",
  //       textAlign: "right",
  //       color: "blue",
  //     },
  //     style2: {
  //       backgroundColor: "blue",
  //       textAlign: "center",
  //       color: "yellow",
  //     },
  //   };
  //   getData = (e) => {
  //     this.setState({ name: e.target.value });
  //   };
  //   resetText = (e) => {
  //     this.setState({ name: "" });
  //   };

  getData = (e) => {
    this.setState({ name: e.target.value });
  };

  getNextImg = () => {
    // name = e.target.value;
    console.log("hiiii");

    console.log(this.index);
    this.setState({ imgSrc: "./Images/" + this.images[this.index] });
    this.index++;
    console.log(this.index);

    if (this.index >= 3) {
      this.index = 3;
    }
  };

  getPrevImg = () => {
    // // name = e.target.value;
    // console.log("hiiii");

    // console.log(this.index);
    // this.setState({ imgSrc: "./Images/" + this.images[this.index] });
    // this.index++;
    // console.log(this.index);

    // if (this.index >= 3) {
    //   this.index = 3;
    // }

    // this.imgSrc = 'assets/Images/' + this.imgSrcArr[this.index];
    this.setState({ imgSrc: "./Images/" + this.images[this.index] });
    this.index--;
    if (this.index <= 0) this.index = 0;
  };

  slideImg = () => {
    this.interval = setInterval(() => {
      this.setState({ imgSrc: "./Images/" + this.images[this.index] });
      this.index++;
      if (this.index === 4) this.index = 0;
    }, 1000);
  };

  StopImg = () => {
    clearInterval(this.interval);
  };

  //   slide=()=>{
  //     if(this.flag===0){
  //     this.interval=setInterval(()=>{
  //         if(this.index<this.imgArr.length-1){
  //         this.index++;
  //         this.setState({ imgSrc: this.imgArr[this.index] });
  //         }else{
  //         this.index=0;
  //         this.setState({ imgSrc: this.imgArr[this.index] });
  //         } this.flag=1;
  //     },500);}
  //   }

  constructor() {
    super();
    this.state = {
      //   name: "",
      imgSrc: "./Images/1.jpg",
    };
  }
  render() {
    return (
      //   <div>
      //     <input type="text" value={this.state.name} onChange={this.getData} />
      //     <p>{this.state.name}</p>
      //     <button onClick={this.resetText}>Reset</button>
      //   </div>

      <div>
        <h1>Hello World</h1>
        <h1>Welcome</h1>

        <div>
          <img src={this.state.imgSrc} alt="error" />
        </div>
        <div>
          <button onClick={this.getNextImg}>Next</button>
          <button onClick={this.getPrevImg}>Prev</button>
          <button onClick={this.slideImg}>Slide</button>
          <button onClick={this.StopImg} className="myClass">
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default ElementsFunctional;
