import React from "react";

import Buton from "./Buton";
function CardProfile(props) {
    let stars = props.profile.stars
    let starcontent = []
    for(let i=1;i<= 5;i++){
        if(starcontent.length < stars){
            starcontent.push({star: i, complete: true})
        }else{
            starcontent.push({star: i, complete: false})
        }
    }
    let startss = starcontent
    console.log({starcontent})
    return (
      <div className="super_box">
        <div className="box_profile">
        <div className="avatar_user">
          <div className="picture_container">
            <img className="picture" src={props.profile.avatar} alt="Img"/>
          </div>
          <p className="name">{props.profile.name}</p>
          <div className="stars">
            {startss.map(el => {
                if(el.complete == true){
                    return <div key={el.star} className="star start_select"></div>
                }else{
                    return <div key={el.star} className="star"></div>
                }
            })
            }
          </div>
        </div>
        <div className="description_user">
          <p>{props.profile.description}</p>
        </div>
        <div className="butons">
            <Buton active={true} text="Read More"/>
            <Buton active={false} text="Contact"/>
        </div>
      </div>
    </div>
    );
  
}

export default CardProfile;
