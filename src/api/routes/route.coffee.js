import { NETWORK } from "../api.instance";

export const getCoffeeList = () => NETWORK.get("coffee/hot");
