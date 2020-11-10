import React from "react";

import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
          name="Iron Man"
          img="https://avatarfiles.alphacoders.com/139/thumb-139523.jpg"
          tel="123 456 789"
          email="soyelputoamo@vengadores.com"
      />
      <Card 
          name={contacts[2].name}
          img={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
      />
    </div>
  );
}

export default App;