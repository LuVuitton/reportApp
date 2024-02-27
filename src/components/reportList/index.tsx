import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetReportListQuery } from "../../api/report.api";
import { reportTypes } from "../../data";
import { formatIsoDateToDMHM } from "../../helpers/getDate";
import { SceletonTable } from "../";
import Container from "@mui/material/Container";

function createData(
  abusedURL: string,
  email: string,
  reportType: string,
  spamProof: string,
  status: string,
  updatedAt: string,
  createdAt: string,
  id: number
) {
  return {
    abusedURL,
    email,
    reportType,
    spamProof,
    status,
    updatedAt,
    createdAt,
    id,
  };
}

export default function ReportList() {
  const { data } = useGetReportListQuery();

  if (!data)
    return (
      <Container maxWidth="lg">
        <SceletonTable />
      </Container>
    );

  const rows = data.map((r) =>
    createData(
      r.abusedURL,
      r.email,
      reportTypes[r.reportType].label,
      r.spamProof,
      r.status,
      formatIsoDateToDMHM(r.updatedAt, "DMHM"),
      formatIsoDateToDMHM(r.createdAt, "DMHM"),
      r.id
    )
  );

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Abused URL</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Report Type</TableCell>
              <TableCell align="right">Spam Proof</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Updated at</TableCell>
              <TableCell align="right">Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.abusedURL}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.reportType}</TableCell>
                <TableCell align="right">{row.spamProof}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.updatedAt}</TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
