

import {  useQuery,useQueryClient } from "@tanstack/react-query";
import  Regions  from "../../servers/apiRegions";


export function useGetRegions(){
    
const queryClient = useQueryClient()

    const {data,isLoading} = useQuery({
        queryFn:()=>Regions(),
        queryKey:['cities'],
        onSuccess:()=>
        {
            queryClient.invalidateQueries(
                {
                    queryKey:['cities']
                }
            )}

        
    })

    
    return {data,isLoading}
}