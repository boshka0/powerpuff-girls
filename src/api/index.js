const fetchShow = async () => {
  const response = await fetch('http://api.tvmaze.com/shows/6771');
  const data = response.json();

  //TODO: will it throw error???

  return data;
};

const fetchEpisodes = async () => {
  const response = await fetch('http://api.tvmaze.com/shows/6771/episodes');
  const data = response.json();

  //TODO: will it throw error???

  return data;
};

const fetchEpisode = async (id) => {
  const response = await fetch(`http://api.tvmaze.com/episodes/${id}`);
  const data = response.json();

  //TODO: will it throw error???

  return data;
};

export {
  fetchShow,
  fetchEpisodes,
  fetchEpisode,
};
