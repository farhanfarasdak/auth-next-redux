import Link from 'next/link';
import { useSelector } from 'react-redux';
import VideoPlayer from '../../components/videoPlayer';

function Game() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div>
      <h1>
        Let's Play Game,
        {userData.email}
      </h1>
      <VideoPlayer videoSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      <Link href="/profile">
        <h5>Go To Profile Page</h5>
      </Link>
    </div>
  );
}

export default Game;
