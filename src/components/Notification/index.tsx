import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showNotification(message: string) {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "center",
    style: {
      background: "black",
      color: "white",
    },
  }).showToast();
}
