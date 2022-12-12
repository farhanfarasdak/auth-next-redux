/* eslint-disable jsx-a11y/alt-text */
import {
  Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font,
} from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
});

function PDF({ userData }) {
  const [client, setClient] = useState(false);

  useEffect(() => {
    console.log(userData.profileUrl);
    setClient(true);
  }, []);

  return (
    <PDFViewer width="75%" height="750px">
      <Document title="CV">
        <Page style={styles.body}>
          <View>
            <Image style={{ width: '100px' }} src={userData.profileUrl} />
          </View>
          <View style={{
            display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '20px',
          }}
          >
            <Text wrap={false}>
              Email :
              {' '}
              {userData.email}
            </Text>
            <Text wrap={false}>
              Job :
              {' '}
              {userData.job}
            </Text>
            <Text wrap={false}>
              Age :
              {' '}
              {userData.age}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDF;
