 // Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";    


 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries

export class FireBase{
    
    constructor(){
        const firebaseConfig = {
            apiKey: "AIzaSyCVZjAVLA_Uwu20ipJHxdTRvVPfpjOU0zg",
         
            authDomain: "dropboxclone-47b48.firebaseapp.com",
         
            databaseURL: "https://dropboxclone-47b48-default-rtdb.firebaseio.com",
         
            projectId: "dropboxclone-47b48",
         
            storageBucket: "dropboxclone-47b48.appspot.com",
         
            messagingSenderId: "1078096441947",
         
            appId: "1:1078096441947:web:4707a3ed64f1653db0057e",
         
            measurementId: "G-3FQ27F16M6"
          };
         
         
          // Initialize Firebase
         this.initFireBase();
          
    }

    static initFireBase(){
        const app = initializeApp(this.firebaseConfig);
        return app;
    }
}

 