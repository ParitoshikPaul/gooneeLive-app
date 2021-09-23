// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyADoi_i0XceEGYPTAfLYtTzaiFuA0-5_6s",
    authDomain: "goone-app-eb264.firebaseapp.com",
    projectId: "goone-app-eb264",
    storageBucket: "goone-app-eb264.appspot.com",
    messagingSenderId: "544518079684",
    appId: "1:544518079684:web:12a5462fc252b18af73591",
    measurementId: "G-V9T99X7P7V"
  },
  API:{
    BaseURL:"https://dev.goonelive.com",
    MiddleWare:"/api/v1/",
    END_Points:{
      "login":"user/login",
      "register":"user/register",
      "emailValidation":"user_email",
      "PhoneValidation":"unique_phone_number",      
      "OTPValidation":"verify_otp",
      "ResetPassword":"",
      "SendOTP":"send_otp",
      "PasswordPhone":"update_password_with_phone",
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
