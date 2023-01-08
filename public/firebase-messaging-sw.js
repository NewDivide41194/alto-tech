// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBw02jh9tTqt-Q19UjbsHhhIbwwZzrzM5c",
    authDomain: "alto-chat-17886.firebaseapp.com",
    databaseURL: "https://alto-chat-17886-default-rtdb.firebaseio.com",
    projectId: "alto-chat-17886",
    storageBucket: "alto-chat-17886.appspot.com",
    messagingSenderId: "303637769215",
    appId: "1:303637769215:web:a4f172ff1770d78374d5ca",
    measurementId: "G-KFC9WSMM2N",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
})