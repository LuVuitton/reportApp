import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function ProgressLine() {
  const isLoading = useAppSelector((state) => state.app.isLoading);

  return isLoading ? (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  ) : null;
}
