import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getPhotos = async (topic, currentPage) => {
  const response = await axios.get("/photos/?client_id=WVvkoWB7pFdggoXbNMLId4SllYX7T7ZTvyTx777_Fak", {
    params: {
      query: topic,
      page: currentPage,
      per_page: 15,
      // client_id: "WVvkoWB7pFdggoXbNMLId4SllYX7T7ZTvyTx777_Fak",
    },
  });

  return response.data;
};
