//FIREBASE//
const firebaseConfig = {
  apiKey: "AIzaSyAxzXLVzQu1ntYdl_2LZv1VsUQOY_T1tgs",
  authDomain: "medcity-bc852.firebaseapp.com",
  databaseURL: "https://medcity-bc852-default-rtdb.firebaseio.com",
  projectIdL: "medcity-bc852",
  storageBucket: "medcity-bc852.appspot.com",
  messagingSenderIdL: "160511469632",
  appId: "1:160511469632:web:5aadc8362d681b4e94d7a5",
  measurmentId: "G-YW7SN5H47F",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

var usersRef = 'users';
var checkoutChild = 'checkout_details';
var account_settingsChild = 'account_settings';
var orderChild = 'orders';
var bookChild = 'book_details';
var donateChild = 'donate_details';
var contactChild = 'contact_details';

