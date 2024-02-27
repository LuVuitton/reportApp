import { useGetReportListQuery } from "../../api/report.api";
import { ProgressLine } from "../";

const ReportList = () => {
  const { data } = useGetReportListQuery();

  const mappedReports = data?.map((report) => (
    <article key={report.id}>
      <h3>{report.abusedURL}</h3>
      <section>{report.email}</section>
      <section>{report.createdAt}</section>
      <section>{report.reportType}</section>
      <section>{report.status}</section>
      <section>{report.spamProof}???</section>
      <section>{report.updatedAt}</section>
    </article>
  ));

  return (
    <div>
      {mappedReports}
    </div>
  );
};

export default ReportList;
