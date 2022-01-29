import axios from "axios";
import { toast } from "react-toastify";

export async function getRequest(path) {
  try {
    const response = await axios.get(path);
    if (response.status==200) {
      return response;
    }
  } catch (error) {
    toast.error(error.message, {
      theme: "colored",
    });
  }
}

export function capitalizeFirstLetter(string) {
  string = string.replace('-', ' ')
  return string.charAt(0).toUpperCase() + string.slice(1);
}