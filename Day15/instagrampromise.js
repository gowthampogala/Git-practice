function login(username, password) {
  console.log("Fetching user details....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "gowthamph" && password === "Gowtham@2004") {
        console.log("Feched user details...");
        resolve({
          userId: 0,
          userName: username,
          Token: "gowtham101",
        });
      } else {
        console.log(`${username} or Password mismatch`);
        reject();
      }
    }, 2000);
  });
}

function userProfile(userId, userName) {
  console.log("User profile fetching....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        console.log("User Profile Fetched....");
        resolve({
          userName: userName,
          bio: "Pressure is a privilage",
          followers: 310,
          following: 750,
          userId: userId,
        });
      } else {
        console.log("user profile failed to fetching....");
        reject();
      }
    }, 3000);
  });
}

function friendList(userId, userName) {
  console.log("Friend List profile fetching....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        console.log("Friend List Fetched....");
        resolve({
          userName: userName,
          bio: "Pressure is a privilage",
          followers: 310,
          following: 750,
        });
      } else {
        console.log("Friend list failed to fetching....");
        reject();
      }
    }, 3000);
  });
}

// login("gowthamph", "Gowtham@2004")
//   .then((user) => userProfile(user.userId, user.userName))
//   .then(friendList)
//   .then(() => console.log("All function Callled"))
//   .catch(() => {
//     console.log("Some error as been happened....");
//   });

async function run() {
  try {
    const user = await login("gowthamph", "Gowtham@2004");
    const userprof = await userProfile(user.userId, user.userName);
    const friendist = await friendList(userprof.userId, userprof.userName);
  } catch (error) {
    console.log(error);
  }
}
run();
