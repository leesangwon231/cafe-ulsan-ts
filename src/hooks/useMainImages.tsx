import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const getMainImage = () => {
    return axios.get("http://localhost:3002/main");
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