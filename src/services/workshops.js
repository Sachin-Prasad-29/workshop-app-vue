import axios from "axios";
import Config from "@/config"; // @ represent src folder

const { baseUrl } = Config;

const getWorkshopsByPage = async (_page) => {
  const response = await axios.get(`${baseUrl}/worksdhops`, {
    params: {
      _page,
    },
  });
  return response.data;
};

export { getWorkshopsByPage };
