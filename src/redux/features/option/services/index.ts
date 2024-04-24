import { API_URL } from "@/configs";
import { baseApi } from "@/redux/features/baseQuery";

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ["options"] });

export const optionApi = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getOption: build.mutation({
      query: () => ({
        url: `${API_URL}/api/option.php`,
        method: "GET",
      }),
    })
  }),
});

export const {
  useGetOptionMutation
} = optionApi;
