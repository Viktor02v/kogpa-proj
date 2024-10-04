import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVqBxHYTCkkzbGriGRnmdGVx4ZWPBkMdg",
  authDomain: "vue-firebase-kogpa.firebaseapp.com",
  projectId: "vue-firebase-kogpa",
  storageBucket: "vue-firebase-kogpa.appspot.com",
  messagingSenderId: "958500559199",
  appId: "1:958500559199:web:f3aa0e3e77b68974e23eea",
  measurementId: "G-3T40Z03F2P"
};

// Initialize Firebase

initializeApp(firebaseConfig);
getAnalytics(initializeApp(firebaseConfig));

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
