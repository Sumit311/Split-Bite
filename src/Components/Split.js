import { useState } from "react";
import { Button } from "../App";

// SPLIT COMPONENT
export function Split({ selectedFriend, onSplitValue }) {
  const [bill, setbill] = useState("");
  const [expense, setexpense] = useState("");
  const payByFrnd = bill ? bill - expense : "";
  const [payer, setpayer] = useState("user");

  // HANDLING SUBMISSION OF FORM
  function handleSubmit(e) {
    e.preventDefault(); //Stopping reload of the screen

    if (!bill || !expense) return;

    onSplitValue(payer === "user" ? payByFrnd : -payByFrnd);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>{`Split the Bill with ${selectedFriend.name}`}</h2>
      <label>Bill value</label>
      <input
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
        type="text"
      ></input>

      <label>Your Expense</label>
      <input
        value={expense}
        onChange={(e) =>
          setexpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
        type="text"
      ></input>

      <label>{selectedFriend.name}'s Expense</label>
      <input value={payByFrnd} type="text" disabled></input>

      <label>Who is paying?</label>
      <select onChange={(e) => setpayer(e.target.value)}>
        <option value={"user"}>You</option>
        <option value={"friend"}>{selectedFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}
