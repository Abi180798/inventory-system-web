import { API_URL } from "@/configs";
import { baseApi } from "@/redux/features/baseQuery";

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ["masterArchives"] });

export const MasterArchiveApi = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getMasterArchivePaged: build.query({
      query: (payload) => ({
        url: `${API_URL}/api/list_arsip.php`,
        method: "POST",
        body: payload,
      }),
      providesTags: ["masterArchives"],
    }),
    getMasterArchiveInternalPaged: build.query({
      query: (payload) => ({
        url: `${API_URL}/api/arsipview.php`,
        method: "POST",
        body: payload,
      }),
      providesTags: ["masterArchives"],
    }),
    getMasterArchiveDetail: build.query({
      query: (payload) => ({
        url: `${API_URL}/api/arsipdetail.php`,
        method: "POST",
        body: payload,
      }),
      providesTags: ["masterArchives"],
    }),
    createMasterArchive: build.mutation({
      query: (payload) => ({
        url: `${API_URL}/api/savearsip.php`,
        method: "POST",
        body: payload,
      }),
      // invalidatesTags: ["masterArchives"],
    }),
    editMasterArchive: build.mutation({
      query: (payload) => ({
        url: `${API_URL}/api/editarsip.php`,
        method: "POST",
        body: payload,
      }),
      // invalidatesTags: ["masterArchives"],
    }),
    deleteMasterArchive: build.mutation({
      query: (payload) => ({
        url: `${API_URL}/api/delarsip.php`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["masterArchives"],
    }),
    uploadMasterArchive: build.mutation({
      query: (payload) => ({
        url: `${API_URL}/api/upload.php`,
        method: "POST",
        body: payload,
      }),
    }),
  })
});

export const {
  useGetMasterArchivePagedQuery,
  useGetMasterArchiveInternalPagedQuery,
  useGetMasterArchiveDetailQuery,
  useCreateMasterArchiveMutation,
  useEditMasterArchiveMutation,
  useDeleteMasterArchiveMutation,
  useUploadMasterArchiveMutation
} = MasterArchiveApi;
