import React, { useState, useEffect } from "react";
import { ref, onValue, get, child } from "firebase/database";
import { database, auth } from "../Utilities/firebaseConfig";

const useAllFirebaseData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dataRef = ref(database);
    get(child(dataRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Main Values", snapshot.val());
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return data;
};

export default useAllFirebaseData;
