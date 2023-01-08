import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      const firebaseConfig = {
        apiKey: "AIzaSyBw02jh9tTqt-Q19UjbsHhhIbwwZzrzM5c",
        authDomain: "alto-chat-17886.firebaseapp.com",
        databaseURL:"https://alto-chat-17886-default-rtdb.firebaseio.com",
        projectId: "alto-chat-17886",
        storageBucket: "alto-chat-17886.appspot.com",
        messagingSenderId: "303637769215",
        appId: "G-KFC9WSMM2N",
      };
     firebase?.initializeApp(firebaseConfig);
      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey:
              "BJ-v8ILaDGMziZeeQv1-hsUODxjkYDNggOrSWEfNtCAJAd1UdzbeBZAorMeYtnyAV80MuxPL1dpjcwxkbssxXrA",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
