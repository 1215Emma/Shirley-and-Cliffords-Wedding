import React, { useState, useEffect } from 'react'
import { ref, onValue, get, child, set } from "firebase/database";
import { database, auth } from "../Utilities/firebaseConfig"

export const useFirebaseData = (page) => {
  const [data, setData] = useState();


  useEffect(() => {
    const dataRef = ref(database);
      get(child(dataRef, `${page}/`))
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

  }, [page]);
  console.log(data);
  return (
    data
  )
}

// header_primary: "Shirley & Clifford",
//       header_secondary: "Day, Month, Year",
//       header_tertiary: "Location" 

export const updateFirebaseData = (page, endpoint, values) => {
  console.log(values)
  set(
    ref(database, `${page}/${endpoint}`),
    // values
    values
  )
    .then(() => {
      console.log("updated successfully");
    })
    .catch((error) => {
      console.log("didn't update:" + error);
    });
}