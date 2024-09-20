import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const getMenuInfo = () => {
    return axios.get("http://localhost:3002/menu")
}

export const useMenuInfo = () => {
    return useQuery({
        queryKey : ['get-menu'],
        queryFn : getMenuInfo,
        select : (data) =>{
            return data.data
        }
    })
}