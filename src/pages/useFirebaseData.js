import { useState, useEffect } from 'react'
import { ref, get, child, set } from "firebase/database";
import { database } from "../Utilities/firebaseConfig"


// grabs firebase data based on the section provided
export const useFirebaseData = (page) => {
  const [data, setData] = useState();


  useEffect(() => {
    const dataRef = ref(database);
      get(child(dataRef, `${page}/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }, [page]);
  return (
    data
  )
}

// updates firebase data based on the section provided
export const updateFirebaseData = (page, keysOfData, section, values, setIsEditing) => {

  set(
    ref(database, `${page}/${keysOfData}/${section}`),
    values
  )
    .then(() => {
      console.log("updated successfully");
      setIsEditing(false)
    })
    .catch((error) => {
      console.log("didn't update:" + error);
    });
}

export const writeFirebaseData = (page, values) => {
  set(
    ref(database, `${page}`),
    values
  )
    .then(() => {
      console.log("Written successfully");
    })
    .catch((error) => {
      console.log("didn't Write:" + error);
    });
}
