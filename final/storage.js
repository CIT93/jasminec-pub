const saveLS = (proData) => {
  const serializedArr = JSON.stringify(proData);
  localStorage.setItem("pap", serializedArr);
};

const getLS = () => {
  const retrievedArr = localStorage.getItem("pap");
  if (retrievedArr !== null) {
    return JSON.parse(retrievedArr);
  } else {
    return [];
  }
};

const proData = getLS();

export { saveLS, getLS, proData };
