import Link from 'next/link';
import { useSelector } from 'react-redux';

function Game() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div>
      <h1>
        Let's Play Game,
        {userData.email}
      </h1>
      <Link href="/profile">
        <h5>Go To Profile Page</h5>
      </Link>
    </div>
  );
}

export default Game;