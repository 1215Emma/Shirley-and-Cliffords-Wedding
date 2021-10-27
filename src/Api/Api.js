
export const loginAuth = (value) => {

}

export const getPages = async () => {
  await fetch(`http://localhost:3001/api/pages`)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
    });
};

export const sectionUpdater = async (value, endpoint, setSectionData) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: value,
  };

  await fetch(`http://localhost:3001/api/home-metadata/${endpoint}`, options)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      setSectionData(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSectionData = async (setData, setIsDataLoaded) => {
  fetch(`http://localhost:3001/api/home-metadata`)
    .then((response) => response.json())
    .then((body) => {
      console.log(body, "here??");
      setData(body);
      setIsDataLoaded(true)
    });
};
export const getIndividualSectionData = async (section) => {
  await fetch(`http://localhost:3001/api/home-metadata/:${section}`,
  section)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
    });
}
export const rsvpFormSubmit = (value) => {
  console.log("hello?")
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: value,
  };
  fetch("http://localhost:3001/rsvp", options)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
    });  
}