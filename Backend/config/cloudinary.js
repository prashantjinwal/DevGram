import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY,
});

const uploaderOncloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:"image"
        })
        console.log("file uploaded", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localfilepath) // remove local file which is save as temporary 
        return null
    }
}

export  {uploaderOncloudinary}