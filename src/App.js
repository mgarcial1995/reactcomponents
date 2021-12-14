import React from "react";
import "./App.css";

import CardProfile from "./CardProfile";

class App extends React.Component {
  render() {
    let students = [
      {
        name: "Giantory",
        avatar:
          "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg",
        stars: 3,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        name: "Martin Garcia",
        avatar:
          "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg",
        stars: 2,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        name: "Juan Fernando",
        avatar:
          "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg",
        stars: 5,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      }

    ]
    let data = {
      name: "Martin Garcia",
      avatar:
        "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg",
      stars: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    };
    return (
      <div className="box">{
        students.map(el => {
          return <CardProfile profile={el} />
        })}
      </div>
    );
  }
}
export default App;
