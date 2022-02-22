// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,doc,  getDoc, getDocs,  collections, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw81ReBk_83FA_HQ5BuXkc9pzheIx54sY",
  authDomain: "turin-8fb9a.firebaseapp.com",
  projectId: "turin-8fb9a",
  storageBucket: "turin-8fb9a.appspot.com",
  messagingSenderId: "547212168448",
  appId: "1:547212168448:web:9291e61f389fc3cc90b7e5",
  measurementId: "G-FHWG07JJ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);



export const getProductsFromCategory = async (category) => {
 const snap = await getDoc(doc(db, 'Category', category))
  let productos = snap.data().productos;
  let items = [];
  for(let producto of productos){
    let item = await getDoc(producto);
    items.push(item.data()); 
  }
  return items;
}

export const getProductsById = async (id) => {
  const snap = await getDoc(doc(db, 'Items', id));
  let producto = snap.data();
  console.log(producto);
  return producto;
}

export const getAllCategories = async () => {
  let categories = await getDocs(collection(db, "Category"));
  console.log(categories);
  return categories.docs.map(category => category.id);
}

export const getAllProducts = async () => {
  let products = await getDocs(collection(db, "Items"));
  return products.docs.map(producto => producto.data());
}

