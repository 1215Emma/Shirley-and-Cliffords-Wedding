import { useState, useEffect } from "react";
import {
  ref,
  onValue,
} from "firebase/database";
import { database } from "../Utilities/firebaseConfig";

const useAllFirebaseData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const sectionRef = ref(database, "/");
    onValue(sectionRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("no data available");
      }
    });
    // updateStarCount(postElement, data);
  }, []);
  return data;
};

export default useAllFirebaseData;
