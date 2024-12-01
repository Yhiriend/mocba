import Swal from "sweetalert2";
type ToastTypes = "success" | "error" | "warning" | "info" | "question";
export class ToastService {
  constructor() {}

  showToast(title: string, message: string, type: ToastTypes) {
    Swal.fire({
      titleText: title,
      text: message,
      toast: true,
      position: "bottom-right",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      icon: type,
    });
  }
}

const toastService = new ToastService();
export default toastService;
