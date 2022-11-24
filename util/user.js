import { onValue, ref, set } from "firebase/database"
import { databaseFirebase, storage } from "../config/firebase"
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage"

export const insertUserBiodata = async (id, userData) => {
  await set(ref(databaseFirebase, `user/${id}`), userData)
}

export const getUserBiodataById = (id) => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(databaseFirebase, `user/${id}`)
    onValue(dbRef, (data) => {
      resolve(data.val())
    })
  })
}

export const uploadUserImage = async (fileObject) => {
  const imgRef = storageRef(storage, `user/${fileObject.name}`)
  await uploadBytes(imgRef, fileObject)
  const url = await getDownloadURL(imgRef)
  return url
}
