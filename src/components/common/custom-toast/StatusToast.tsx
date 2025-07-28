import { cn } from "@/utils/common.utils";
import { RoundedCheckIcon, RoundedCloseIcon } from "../../icons";

const StatusToast: React.FC<StatusToastProps> = ({ message, type }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={cn(
        "max-w-[500px] min-w-[270px]",
        "flex items-center gap-2 p-3",
        isSuccess
          ? "bg-dark-green-100 border-success border-l-[5px]"
          : "border-error-100 bg-error-200 text-error-100 border-l-[5px]"
      )}
    >
      {isSuccess ? (
        <RoundedCheckIcon className="text-success h-6 w-6" />
      ) : (
        <RoundedCloseIcon className="text-error-100" />
      )}

      <span
        className={cn(
          "text-sm font-bold",
          isSuccess ? "text-success" : "text-error-100"
        )}
      >
        {message}
      </span>
    </div>
  );
};

export default StatusToast;

interface StatusToastProps {
  message: string;
  type: "success" | "error";
}
