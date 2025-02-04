import { useState } from "react";
import { Button } from "../App";

// ADD NEW FRIEND COMPONENT
export function AddNewFriend({ onAddFrnd }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID;

  // HANDLE FORM SUBMISSION
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      balance: 0,
      image: `${image}?${id}`,
      id: Date.now(),
    };

    // calling the funcion from main component to change state of items array.
    onAddFrnd(newItem);

    setname("");
    setimage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setname(e.target.value)}
      ></input>

      <label>Picture URL</label>
      <input
        value={image}
        type="text"
        onChange={(e) => setimage(e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  );
}
