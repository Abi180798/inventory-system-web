import { API_URL } from "@/configs";
import { baseApi } from "@/redux/features/baseQuery";

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ["users"] });

export const UsersApi = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getUsers: build.mutation({
      query: () => ({
        url: `${API_URL}/api/pengguna.php`,
        method: "GET",
      }),
      invalidatesTags: ["users"],
    }),
  })
});

export const {
  useGetUsersMutation,
} = UsersApi;
