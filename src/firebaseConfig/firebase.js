import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo9bDSkdu0UzWwrLGxGtIJVDbF0GSrHe0",
  authDomain: "glean-project-5ffa9.firebaseapp.com",
  projectId: "glean-project-5ffa9",
  storageBucket: "glean-project-5ffa9.appspot.com",
  messagingSenderId: "853960295903",
  appId: "1:853960295903:web:b335440aff41e1e99c706a",
  measurementId: "G-Q2V1R570PF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
