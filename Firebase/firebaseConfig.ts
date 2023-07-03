import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCo5PZjr7uGkH78EpRffSMXSKI4aXsXV2U",
  authDomain: "authpscip.firebaseapp.com",
  projectId: "authpscip",
  storageBucket: "authpscip.appspot.com",
  messagingSenderId: "415254941981",
  appId: "1:415254941981:web:edeb5f02d497cbd60d91f4",
  measurementId: "G-MKX20TQ9CW"
};

export const app = initializeApp(firebaseConfig);