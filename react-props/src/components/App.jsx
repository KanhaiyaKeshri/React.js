import React from "react";
import contacts from "../contacts.js";
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id} // key props are not fro use, if we want to use it as a props inside our card components we cannot do that,
      // to use id we will have to make another prop with name other than key, such as we can use tha name id = {contacts.id} and use it inside card components.
      name={contacts.name}
      img={contacts.imgURL}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,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" />
      {contacts.map(createCard)};
    </div>
  );
}

export default App;
