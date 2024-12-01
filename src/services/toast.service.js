import Swal from "sweetalert2";
export class ToastService {
    constructor() { }
    showToast(title, message, type) {
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
