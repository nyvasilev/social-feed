export const get = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
    console.log(`Error! Status: ${err?.status}`);
    return null;
  }
};
