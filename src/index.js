import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return(<div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tlf}</p>
    <p>{props.mail}</p>
  </div>)
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>    
    <Card 
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tlf="+123 456 789"
      mail="b@beyonce.com"
      />
    <Card
      name="Iron Man"
      img="https://avatarfiles.alphacoders.com/139/thumb-139523.jpg"
      tlf="+987 654 321"
      mail="imtonystark@vengadores.com"
    />
  </div>,
  document.getElementById("root")
);
