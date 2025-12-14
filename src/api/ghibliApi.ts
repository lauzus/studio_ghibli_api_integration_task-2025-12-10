import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Film, Person} from './types'

export const ghibliApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ghibliapi.vercel.app/'}),
    endpoints: (builder) => ({
        getFilms: builder.query<Film[], void>({
            query: () => 'films',
        }),
        getPeople: builder.query<Person[], void>({
            query: () => 'people'
        })
    }),
});

export const {
    useGetFilmsQuery
} = ghibliApi;