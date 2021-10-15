export const grabData = () => {
  
}

export const loginAuth = (value) => {

}

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

export const getSectionData = async (setData) => {
  await fetch(`http://localhost:3001/api/home-metadata`)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      setData(body);
    });
};

export const rsvpFormSubmit = async( value ) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: value,
  };
  await fetch("http://localhost:3001/rsvp", options)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
    });  
}