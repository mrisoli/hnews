import firebase from "firebase";

export default async function loadDB() {

  try {
    firebase.initializeApp({
      databaseURL: "https://hacker-news.firebaseio.com",
    });
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      return null;
    }
  }

  return firebase.database().ref("v0");
}
