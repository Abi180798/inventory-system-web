import { API_URL } from "@/configs";
import { baseApi } from "@/redux/features/baseQuery";

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ["dashboards"] });

export const dashboardApi = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getDashboardTotalArchivePaged: build.mutation({
      query: (payload) => ({
        url: `${API_URL}/api/jumlaharsip.php`,
        method: "POST",
        body: payload,
      }),
    })
  }),
});

export const {
  useGetDashboardTotalArchivePagedMutation
} = dashboardApi;
