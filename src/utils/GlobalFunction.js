import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import GlobalVar from "./GlobalVar";

export async function getRequest(path) {
  try {
    const response = await axios.get(path);
    if (response.status == 200) {
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

export function releasePokemon(item, context, listPokemon, navigate) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You will release this pokemon?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: GlobalVar.secondaryColor,
    cancelButtonColor: '#c4c4c4',
    confirmButtonText: 'Yes, release it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let checkPokemon = listPokemon.findIndex(val => item.nickname === val.nickname)
      listPokemon.splice(checkPokemon, 1)
      context.setMyPokemon(listPokemon)
      localStorage.setItem('myPokemon', JSON.stringify(listPokemon))
      Swal.fire(
        {
          title: 'Released!',
          text: 'Your pokemon has been released.',
          icon: 'success',
          confirmButtonColor: GlobalVar.secondaryColor,
        }
      ).then((r) => {
        if (r.isConfirmed) {
          if (navigate) {
            navigate(-1)
          } else {
            window.location.reload()
          }
        }
      })
    }
  })
}