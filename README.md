# Alto-Tech-Assignment

**Description**: Put a meaningful, short, plain-language description of what
this project is trying to accomplish and why it matters.
Describe the problem(s) this project solves.
Describe how this software can improve the lives of its audience.

- **Technology stack**: This project primarly used Next.JS.Firebase for real-time chat and notification. Used Redux for state management. Styled components by using Tailwind CSS.
- **Status**: 1.1

## Dependencies
- "@fortawesome/fontawesome-svg-core": "^6.2.1",
- "@fortawesome/free-brands-svg-icons": "^6.2.1",
- "@fortawesome/free-solid-svg-icons": "^6.2.1",
- "@fortawesome/react-fontawesome": "^0.2.0",
- "@next/font": "13.1.1",
- "@reduxjs/toolkit": "^1.9.1",
- "@types/node": "18.11.18",
- "@types/react": "18.0.26",
- "@types/react-dom": "18.0.10",
- "eslint": "8.31.0",
- "eslint-config-next": "13.1.1",
- "firebase": "^7.6.2",
- "localforage": "^1.10.0",
- "next": "13.1.1",
- "react": "18.2.0",
- "react-dom": "18.2.0",
- "react-redux": "^8.0.5",
- "swiper": "^8.4.5",
- "typescript": "4.9.4"

## Installation and Run

```bash
npm install
npm run dev
```

## Configuration
- NEXT_PUBLIC_FIREBASE_API_KEY = "your API Key"
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "your Auth Domain"
- NEXT_PUBLIC_FIREBASE_DATABASE_URL="your Database URL"
- NEXT_PUBLIC_FIREBASE_PROJECT_ID = "Your Project ID"
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "Your Storage Bucket"
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "Your Sender ID"
- NEXT_PUBLIC_FIREBASE_APP_ID = "Your APP ID"
- NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = "Your Measurement ID"

## How to test the software
Send message with userId and use different userId for reply via 'live chat'.
Send notification via 'Firbase Cloud Messaging'.

## Create a Real-time Database
**Use Firebase Console**
1. Open the ‘Build’ menu
2. Click on 'Realtime Database' and then ‘Create Database’
3. After that, select the region you want to use
4. Finally, start the database in 'test mode'

## Get Configuration Details
**Use Firebase Console**
1. Click the Gear icon next to 'Project Overview'
2. Choose 'Project Settings'
3. Under ‘Your apps’, select ‘Web app’:
4. Enter a name for your application
5. Click on ‘Register App’
**Your application’s config values will then be visible in the ‘Your apps’ section**
6. Replace firebaseConfig with Your application values in util/firebase.

## Get FCM Key pair
**Use Firebase Console**
1. Click the Gear icon next to 'Project Overview'
2. Go to 'Project Setting'
3. Choose 'Cloud Messaging'
4. Enable both 'Firebase Cloud Messaging API (V1)' and 'Cloud Messaging API (Legacy)'
5. Under Web configuration, Click Generate New Private Key, then confirm by clicking Generate Key.
6. Replace vapidKey:'Your key pair' in utils/firebase.js

## Credits and references

1. https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-firebase
2. https://firebase.google.com/docs/cloud-messaging/js/send-with-console
3. https://tailwindcss.com/docs/installation
4. https://nextjs.org/docs/getting-started