import { onValue, ref, set } from 'firebase/database';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
// import cloudinary from '../config/cloudinary';
import { databaseFirebase, storage } from '../config/firebase';

export const insertUserBiodata = async (id, userData) => {
  await set(ref(databaseFirebase, `user/${id}`), userData);
};

export const getUserBiodataById = (id) => new Promise((resolve, reject) => {
  const dbRef = ref(databaseFirebase, `user/${id}`);
  onValue(dbRef, (data) => {
    resolve(data.val());
  });
});

export const uploadUserImage = async (fileObject) => {
  const imgRef = storageRef(storage, `user/${fileObject.name}`);
  await uploadBytes(imgRef, fileObject);
  const url = await getDownloadURL(imgRef);
  return url;
};

export const uploadUserImageCloudinary = async (fileObject) => {
  // const result = await cloudinary.uploader.upload(fileObject);
  // console.log(result);
  // return result;

  const formData = new FormData();
  formData.append('file', fileObject);
  formData.append('upload_preset', 'ywu6ifhk');
  const resp = await fetch('https://api.cloudinary.com/v1_1/dclsiauzk/image/upload', {
    method: 'POST',
    body: formData,
  });
  const data = await resp.json();
  console.log(data);
  return data.url;
};
