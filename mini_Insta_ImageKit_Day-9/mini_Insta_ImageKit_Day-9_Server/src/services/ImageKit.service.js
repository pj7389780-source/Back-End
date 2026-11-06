import ImageKit from "imagekit";
import dotenv from 'dotenv'
dotenv.config();

const imageKit = new ImageKit({
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
  urlEndpoint: process.env.IK_URL,
});

const uploadFile = async(file,fileName)=>{
    const response = await imageKit.upload({
        file,
        fileName,
        folder:"/Mini_Insta",
    })
    return response;
}

export default uploadFile;