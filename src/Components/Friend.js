import { Button } from "../App";

// FRIEND ATTRIBUTES

export function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;

  return (
    <div>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt="person face"></img>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            {" "}
            You owe {friend.name} $ {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {" "}
            {friend.name} owes you $ {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p> You are equal with {friend.name}</p>}

        <Button onClick={() => onSelectFriend(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </div>
  );
}
