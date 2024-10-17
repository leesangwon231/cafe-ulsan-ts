import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const getMenuInfo = () => {
    return axios.get("https://my-json-server.typicode.com/leesangwon231/cafe-ulsan-ts/menu")
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