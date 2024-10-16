import Swal from "sweetalert2";
type AlertTypes = "success" | "error" | "warning" | "info" | "question";
export class AlertService {
  constructor() {}

  showAlert(
    title: string,
    message: string,
    type: AlertTypes,
    callback: () => void
  ) {
    Swal.fire({
      titleText: title,
      text: message,
      position: "center",
      showConfirmButton: true,
      showCancelButton: true,
      icon: type,
    }).then(callback);
  }
}

const alertService = new AlertService();
export default alertService;
