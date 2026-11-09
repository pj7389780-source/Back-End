import { axiosInstance } from "../../config/axiosInstance"

export const createPost = async(data)=>{
    const res = await axiosInstance.post("/MiniInsta/create",data);
    return res;
}