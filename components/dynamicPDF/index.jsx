import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicDocument = dynamic(() => import('../pdf'), {
  ssr: false,
});

function DynamicPDF({ userData }) {
  // eslint-disable-next-line no-unused-vars
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <DynamicDocument userData={userData} />
  );
}

export default DynamicPDF;
