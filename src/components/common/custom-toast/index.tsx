import { Fragment } from "react";

import toast from "react-hot-toast";
import StatusToast from "./StatusToast";

const CustomToast = () => {
  return <Fragment />;
};

export default CustomToast;

export const showSuccessToast = (message: string) => {
  toast.custom(() => <StatusToast message={message} type="success" />, {
    duration: 3000,
    position: "bottom-right",
    id: "success-toast",
  });
};

export const showErrorToast = (message: string) => {
  toast.custom(() => <StatusToast message={message} type="error" />, {
    duration: 3000,
    position: "bottom-right",
    id: "error-toast",
  });
};
