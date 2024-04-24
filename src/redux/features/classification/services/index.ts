import { API_URL } from "@/configs";
import { baseApi } from "@/redux/features/baseQuery";

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ["classifications"] });

export const classificationApi = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getClassification: build.query({
      query: () => ({
        url: `${API_URL}/api/klasifikasi.php`,
        method: "GET",
      }),
    })
  }),
});

export const {
  useGetClassificationQuery
} = classificationApi;
