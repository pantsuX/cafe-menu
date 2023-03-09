let chatroom1   = [];
let chatroom2 =  ["paRIE_to"];
let chatroom3 = ["s234f","mailbox2"];
let chatroom4 = ["pap_ier44","townieBOY","panda321","motor_bike5","sandwichmaker833","violinist91"];

function getUsersOnline(userList) {
    const numUsers = userList.length;
    
    if (numUsers === 0) return "no one online";
    if (numUsers === 1) return `${userList[0]} online`;
    
    const [firstUser, secondUser, ...extraUsers] = userList;
    if (numUsers === 2) return `${firstUser} and ${secondUser} online`; // standard return input , formula found on stackoverflow
    
    return `${firstUser}, ${secondUser}, and ${numUsers - 2} more online`;
  }

console.log("Chatroom 1:", getUsersOnline(chatroom1));
console.log("Chatroom 2:", getUsersOnline(chatroom2));
console.log("Chatroom 3:", getUsersOnline(chatroom3));
console.log("Chatroom 4:", getUsersOnline(chatroom4));