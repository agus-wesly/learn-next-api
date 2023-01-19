import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebase";

export const uploadImage = (image: File) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, image.name);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
          console.log("Download: ", downloadURL);
        });
      }
    );
  });
};
