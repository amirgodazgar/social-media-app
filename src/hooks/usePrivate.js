import {useEffect} from 'react';
import {httpsPrivate} from '../services/https';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY4MDkwNjQzLCJleHAiOjE2NzA2ODI2NDN9.ei6cCCBfpVHFo4LvZD6gT42kLvft9L23zghXxQ5xk3U';

export const usePrivate = () => {
  useEffect(() => {
    const requestInterceptor = httpsPrivate.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${TOKEN}`;
          //  config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error),
    );

    const responseInterceptor = httpsPrivate.interceptors.response.use(
      response => response,
      // async error => {
      //   const prevRequest = error?.config;

      //   const authorizationError =
      //     (error?.response?.status === 403 ||
      //       error?.response?.status === 401) &&
      //     !prevRequest?.sent;

      //   if (authorizationError) {
      //     prevRequest.sent = true;
      //     await refresh();
      //     prevRequest.headers['Authorization'] = `Bearer ${auth.accessToken}`;
      //     return httpsPrivate(prevRequest);
      //   }
      //   return Promise.reject(error);
      // },
    );
    return () => {
      httpsPrivate.interceptors.response.eject(responseInterceptor);
      httpsPrivate.interceptors.request.eject(requestInterceptor);
    };
  }, []);
  return httpsPrivate;
};
