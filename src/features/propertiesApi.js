import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const propertyApi = createApi({
reducerPath: 'propertyApi',
baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
endpoints: (builder) => ({
getProperties: builder.query({
query: ({ page, filters }) => {
const params = new URLSearchParams({ page });
if (filters.type) params.append('type', filters.type);
if (filters.minPrice) params.append('minPrice', filters.minPrice);
if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
return `/properties?${params.toString()}`;
},
}),
getPropertyById: builder.query({ query: (id) => `/properties/${id}` }),
sendMessage: builder.mutation({ query: (body) => ({ url: '/contact', method: 'POST', body }) }),
}),
});


export const { useGetPropertiesQuery, useGetPropertyByIdQuery, useSendMessageMutation } = propertyApi;