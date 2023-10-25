// notification
import { toast } from "react-toastify";

const toastSuccess = (text) => {

    return toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
}

const toastError = (error) => {

    return toast.error(error.response.data.error , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
}

export { toastSuccess, toastError };