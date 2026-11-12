import { createPost } from "../api/createPost";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router'
const useCreatePost = () => {
  const { register, handleSubmit, formState:{errors} ,reset} = useForm();

  const postCreation = async (data) => {
    const formData = new FormData();

       formData.append("caption", data.caption);
       formData.append("Image", data.Image[0]);

       await createPost(formData);
  };
  const navigate =  useNavigate()

  const handleCreate = async (data) => {
    await postCreation(data);
       reset({
         caption: "",
         Image: null,
       });
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    handleCreate,
  };
};

export default useCreatePost;
