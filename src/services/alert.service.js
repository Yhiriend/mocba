import Swal from "sweetalert2";
export class AlertService {
    constructor() { }
    showAlert(title, message, type, callback) {
        Swal.fire({
            titleText: title,
            text: message,
            position: "center",
            showConfirmButton: true,
            showCancelButton: true,
            icon: type,
            customClass: {
                confirmButton: "btn-alert-success",
            },
        }).then(callback);
    }
}
const alertService = new AlertService();
export default alertService;
