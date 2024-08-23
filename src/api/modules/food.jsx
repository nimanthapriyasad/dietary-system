import { axiosClient, resolver } from "../client";

export default {
  getAllFoods() {
    return resolver(axiosClient.get("/food/moderator/dashboard"));
  },
  updateState(foodId, newState) {
    const data = { id: foodId, state: newState };
    return resolver(axiosClient.post("/food/moderator/dashboard", data));
  },
};
