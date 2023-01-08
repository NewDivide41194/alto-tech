import React, { useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import { firebaseCloudMessaging } from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";

function PushNotificationLayout({ children }) {
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
        
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        console.log("------>",token);
        if (token) {
          console.log("token", token);
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Get the push notification message and triggers a toast to show it
  function getMessage() {
    const messaging = firebase.messaging();
    messaging.onMessage((message) => {
        console.log("MSG------->",message);
      toast(
        // <div onClick={() => handleClickPushNotification(message?.data?.url)}>
        //   <h5>{message?.notification?.title}</h5>
        //   <h6>{message?.notification?.body}</h6>
        // </div>,
        // {
        //   closeOnClick: false,
        // }
      );
    });
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default PushNotificationLayout;
