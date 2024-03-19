
import {  useQuery,useQueryClient } from "@tanstack/react-query";
import { getVideos } from "../servers/apiVideos";

export  function useGetVideos(){


  const queryClient = useQueryClient();

  const {data,isLoading} = useQuery({
    queryKey: ['videos'],
    queryFn:getVideos,
    onSuccess:()=>
    {
        queryClient.invalidateQueries({
            queryKey:['videos']
        })
    }

  })
  queryClient.prefetchQuery(
    {
        queryKey:['videos']
    }
)

  return {data,isLoading}

}