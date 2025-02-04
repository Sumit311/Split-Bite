import { useState } from "react";
import "./App.css";
import { FriendsList } from "./Components/FriendsList";
import { AddNewFriend } from "./Components/AddNewFriend";
import { Split } from "./Components/Split";

// Initial Frineds list
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// REUSABLE BUTTON COMPONENT
export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

// APP COMPONENT
function App() {
  const [frndList, setfrndList] = useState(initialFriends);
  const [showAddFrnd, setshowAddFrnd] = useState(false);
  const [selectedFrnd, setselectedFrnd] = useState(null);

  function handleShowAddFrnd() {
    setshowAddFrnd((show) => !show);
  }

  function handleAddFrnd(newFrnd) {
    setfrndList((frnd) => [...frnd, newFrnd]);
    setshowAddFrnd(false);
  }

  function handleSelectedFrnd(friend) {
    // setselectedFrnd(friend);
    setselectedFrnd((currFrnd) => (currFrnd?.id === friend.id ? null : friend));
  }

  function handleSplitValue(value) {
    setfrndList(
      frndList.map((frnd) =>
        frnd.id === selectedFrnd.id
          ? { ...frnd, balance: frnd.balance + value }
          : frnd
      )
    );

    setselectedFrnd(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          frndList={frndList}
          onSelectFriend={handleSelectedFrnd}
          selectedFriend={selectedFrnd}
        ></FriendsList>

        {showAddFrnd && <AddNewFriend onAddFrnd={handleAddFrnd}></AddNewFriend>}

        <Button onClick={handleShowAddFrnd}>
          {showAddFrnd ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFrnd && (
        <Split
          selectedFriend={selectedFrnd}
          onSplitValue={handleSplitValue}
        ></Split>
      )}
    </div>
  );
}

export default App;
