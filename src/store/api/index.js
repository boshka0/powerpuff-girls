const fetchApi = async (url) => {
  const response = await fetch(url);
  const data = response.json();

  if (response.status >= 400) throw new Error(data.message);

  return data;
};

export default fetchApi;
