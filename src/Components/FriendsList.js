import { Friend } from "./Friend";

// LIST OF FRIENDS COMPONENT
export function FriendsList({ frndList, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {frndList.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
}
