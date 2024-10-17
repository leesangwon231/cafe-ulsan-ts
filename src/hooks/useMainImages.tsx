import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const getMainImage = () => {
    return axios.get("https://my-json-server.typicode.com/leesangwon231/cafe-ulsan-ts/main");
}

export const useMainImages = () => {
    return useQuery({
        queryKey : ['get-main-image'],
        queryFn :getMainImage,
        select : (data) => {
            return data.data;
        }
    })
}