import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Client } from 'react-native-appwrite';

export default function App() {
  const PROJECT_ID = 'project_id';  //an appwrite project need to be create at cloud.appwrite.io/console
  const ENDPOINT = 'https://cloud.appwrite.io/v1';// Set universal endpoint

  useEffect(() => {

    const client = new Client();
    client.setEndpoint(ENDPOINT); 
    client.setProject(PROJECT_ID); 





    const unsubscribe = client.subscribe('files', response => {
      console.log(response);
    });

   
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Check console for output</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
