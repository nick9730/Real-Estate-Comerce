
import supabase from "./supabase"



export default async function Regions(){

    let { data, error } = await supabase
    .from('cities')
    .select('*')

if (error) throw new Error('cant be reached')

    return data 
   }


   export async  function GetOneImage(id){
 
if(id==='ouranoupoli'){
    id=3
}
if(id==='ammouliani'){
     id=2
}
if(id==='nearoda'){
     id=1
}
if(id==='ierissos'){
     id=4
}



let { data, error } = await supabase.from('imageRegions').select("*").eq('relation',id)

    if(error) throw new Error("Couldnt load the data")

    return data
}


export  async function GetOneRegion(region_name){
    let { data, error } = await supabase
    .from('cities')
    .select('*')
    .eq('name',region_name)
    
    if (error) throw new Error('cant be reached')

    return data 
   }
