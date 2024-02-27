import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SceletonTable() {
  return (
    <Stack spacing={1} margin={"10px 5px"}>
      <Skeleton variant="rounded" width={"100%"} height={"15vh"} />
      <Skeleton variant="rounded" width={"100%"} height={"15vh"} />
      <Skeleton variant="rounded" width={"100%"} height={"15vh"} />
      <Skeleton variant="rounded" width={"100%"} height={"15vh"} />
      <Skeleton variant="rounded" width={"100%"} height={"15vh"} />
    </Stack>
  );
}
