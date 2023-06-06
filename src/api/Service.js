import axiosInstance from "../lib/fetchAPI";

export const getMealsRequest = () => {
  return axiosInstance.get("/foods");
};

export const getBuskett = () => {
  return axiosInstance.get("/basket");
};

export const addToBasket = (newItem) => {
  return axiosInstance.post(`/foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  });
};
export const incrementBasketRequest = (payload) => {
  return axiosInstance.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount + 1,
  });
};
export const decrementBasketRequest = (payload) => {
  return axiosInstance.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount,
  });
};
export const deleteBasketItem = (payload) => {
  return axiosInstance.delete(`/basketItem/${payload.id}/delete`);
};
