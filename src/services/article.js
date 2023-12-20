import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({  
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key','0f2047e7demsh29fc3b8236914fdp1dcb90jsn70d4d3ae9ce4')
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params) =>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});
export const {useLazyGetSummaryQuery} = articleApi;