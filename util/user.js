import { onValue, ref, set } from 'firebase/database';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
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
