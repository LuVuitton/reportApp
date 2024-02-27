import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setShowAlert } from "../redux/slices/appSlice";
import { getClientToken } from "../helpers/getClientToken";

const API = "https://profile.short.io/tmp";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Report"],
  endpoints: (builder) => ({
    getReportList: builder.query<ReportItem[], void>({
      query: () => `/abuse-reports?clientToken=${getClientToken()}`,
      providesTags: ["Report"],
    }),
    createReport: builder.mutation<void, CreateReportDTO>({
      query: (requestData) => ({
        url: "/abuse-report",
        method: "POST",
        body: requestData,
      }),
      invalidatesTags: ["Report"],
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            setShowAlert({
              isShow: true,
              message: "successfully reported",
              status: "success",
            })
          );
        } catch (e) {
          console.warn(e); //there is alert in moddlewere
        }
      },
    }),
  }),
});

export const { useGetReportListQuery, useCreateReportMutation } = reportApi;

export type CreateReportDTO = {
  clientToken: string;
  abusedURL: string;
  email: string;
  reportType: string;
  targetCountry?: string | null;
  spamProof?: string | null;
  captchaToken: string;
};

export type ReportItem = {
  abusedURL: string;
  clientToken: string;
  createdAt: string;
  email: string;
  id: number;
  reportType: string;
  spamProof: string;
  status: string;
  targetCountry: string;
  updatedAt: string;
};
