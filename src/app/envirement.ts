export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA85YBVtX_fFHaq5LbUXFUAko2jIybLywQ",
    authDomain: "wasalny-21e66.firebaseapp.com",
    databaseURL: "https://wasalny-21e66.firebaseio.com",
    projectId: "wasalny-21e66",
    storageBucket: "wasalny-21e66.appspot.com",
    messagingSenderId: "367249551316",
    appId: "1:367249551316:web:1d1ca84cc5638f934f7041",
    measurementId: "G-NHD1FP1SKD"
  };

  export const snapshotToArray = snapshot =>{
      let returnArray = [];
      snapshot.forEach(element => {
          let item = element.val();
          item.key = element.key;
          returnArray.push(item);
          
      });
     return returnArray;
  }