import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function SnackBar() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"error" | "success">("success");
  const [message, setMessage] = useState("");
  const isOpen = useAppSelector((state) => state.app.showAlert);

  const handleClose = (_event:any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    if (isOpen.isShow) {
      setOpen(true);
      setStatus(isOpen.status);
      setMessage(isOpen.message);
    }
  }, [isOpen]);

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={status}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
