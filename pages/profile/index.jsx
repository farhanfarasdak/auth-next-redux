import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button';
import { retrieveUserById } from '../../redux/reducer/user';
import { insertUserBiodata, uploadUserImage } from '../../util/user';
import { validateUser } from '../../util/validateUser';
import style from './Profile.module.css';

function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [imgFile, setImgFile] = useState();
  const [tempImgUrl, setTempImgUrl] = useState('https://img.freepik.com/premium-vector/user-icon_6091-78.jpg');

  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (userData.uid === null) {
      const user = validateUser();
      if (user.status === 'INVALID') {
        router.push('/');
      } else {
        dispatch(retrieveUserById(user.uid));
      }
    }
  }, []);

  const handleSubmit = async () => {
    const url = await uploadUserImage(imgFile);

    const data = {
      age: userData.age,
      email: userData.email,
      job: userData.job,
      profileUrl: url,
    };

    await insertUserBiodata(userData.uid, data);
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      const reader = new FileReader();
      setImgFile(event.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setTempImgUrl(reader.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div>
      <h1>My Profile</h1>
      <div>
        <img className={style.imgProfile} src={userData.profileUrl || tempImgUrl} alt="http://mygambar.jpg" />
      </div>
      <input type="file" onChange={handleImageChange} />
      <h3>
        Email :
        {userData.email}
      </h3>
      <h3>
        Job :
        {userData.job}
      </h3>
      <h3>
        Age :
        {userData.age}
      </h3>
      <Button title="Save" onClick={handleSubmit} color="yellow" />
      <Link href="/game">
        <h5>Go To Game Page</h5>
      </Link>
    </div>
  );
}

export default Profile;
