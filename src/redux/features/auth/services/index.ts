import { API_URL } from '@/configs';
import { LoginFormType } from '@/models/auth';
import { baseApi } from '@/redux/features/baseQuery';

const apiWithTag = baseApi;

export const authApi = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    login: build.mutation({
      query: (payload: LoginFormType) => ({
        url: `${API_URL}/api/login.php`,
        method: 'POST',
        body: payload,
      }),
    }),
    getCurrentUser: build.query({
      query: () => ({
        url: `${API_URL}/api/general/auth/current-user`,
      }),
    }),
    getRefreshToken: build.mutation({
      query: (payload: { token: string; refreshToken: string }) => ({
        url: `${API_URL}/api/general/auth/refresh`,
        method: 'POST',
        body: payload,
      }),
    }),
    revokeUser: build.mutation({
      query: () => ({
        url: `${API_URL}/api/general/auth/revoke`,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery, useGetRefreshTokenMutation, useRevokeUserMutation } =
  authApi;
