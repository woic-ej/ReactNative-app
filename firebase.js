// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLc6b6dcn0EIq1oq_WY_3jjkxAk9lkFag",
  authDomain: "react-native-todo-app-fd28d.firebaseapp.com",
  projectId: "react-native-todo-app-fd28d",
  storageBucket: "react-native-todo-app-fd28d.appspot.com",
  messagingSenderId: "792925294660",
  appId: "1:792925294660:web:bac18c4055f486a4c2ac11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
