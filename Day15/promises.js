function userDashboard(id) {
  console.log("fetched the userDashboard...");
  setTimeout(() => {
    console.log("Fetching user profile...");
    setTimeout(() => {
      console.log("Fetching user friends list...");
      setTimeout(() => {
        console.log("Fetching user friends post...");
        setTimeout(() => {
          console.log("Fetching user comments...");
        }, 2000);
      }, 2000);
    }, 2000);
    console.log("close the tap");
  }, 2000);
}

userDashboard("101");
