import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index";
import "firebase/storage";

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJidynViTcNBNzgSCbAfHI0oN7uVuc19M",
  authDomain: "picture-blog-project7.firebaseapp.com",
  projectId: "picture-blog-project7",
  storageBucket: "picture-blog-project7.appspot.com",
  messagingSenderId: "260451823172",
  appId: "1:260451823172:web:58db5d6cdfa85711be5611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


createApp(App).use(VueRouter).mount("#app");
