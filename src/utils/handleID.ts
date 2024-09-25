export const setID = (id: string) => {
  localStorage.setItem("userID", id);
};

export const getID = () => {
  try {
    const userID = localStorage.getItem("userID");

    return userID ? userID : null;
  } catch (error) {
    return null;
  }
};

export const clearID = () => {
  localStorage.removeItem("userID");
};
