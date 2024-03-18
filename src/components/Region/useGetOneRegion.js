
import { useParams } from "react-router-dom";

import {  useQuery,useQueryClient } from "@tanstack/react-query";
import { GetOneRegion } from "../../servers/apiRegions";


export function useGetOneRegion(){
 
    const queryClient = useQueryClient()
    const {name} = useParams();

    const {data:oneRegion,isLoading} = useQuery({
        queryFn:()=>GetOneRegion(name),
        queryKey:['city'],
        onSuccess:()=>
        {
            queryClient.invalidateQueries(
                {
                    queryKey:['city']
                }
            )}

        
    })
  
    
    return {oneRegion,isLoading}
}