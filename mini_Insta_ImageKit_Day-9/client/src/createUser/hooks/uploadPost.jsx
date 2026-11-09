import { createPost } from "../api/createPost";
import { useForm } from "react-hook-form";

const useCreatePost = () => {
  const { register, handleSubmit, formState:{errors} ,reset} = useForm();

  const postCreation = async (data) => {
    const formData = new FormData();

       formData.append("caption", data.caption);
       formData.append("Image", data.Image[0]);

       await createPost(formData);
  };

  const handleCreate = async (data) => {
    await postCreation(data);
    reset()
  };

  return {
    register,
    handleSubmit,
    errors,
    handleCreate,
  };
};

export default useCreatePost;
