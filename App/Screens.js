//Imports
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { AuthContext } from "./context";

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
 
});

//Reusable Screen Container
const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

//Home Screen
export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button 
      title="React Native Example" 
      onPress={() => navigation.push("Details", { name: 'React Native by Eample' })
      }
    />
    <Button
      title="React Native School"
      onPress={() => navigation.push("Details", { name: 'React Native by School' })
      }
    />
    <Button 
      title="Drawer" 
      onPress={() => navigation.toggleDrawer()}  
    />
  </ScreenContainer>
);

//Details Screen
export const Details = ({ route }) => {
  return (
    <ScreenContainer>
      <Text>Details Screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
  )
};

//Teams Screen
export const Teams = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Teams Screen</Text>
      <Button 
        title="Teams 2" 
        onPress={() => navigation.push('Teams2')} 
      />
      <Button
        title="React Native School"
        onPress={() => {
          navigation.navigate('Home', { 
            screen: 'Details', 
            params: { name: 'React Native School'} 
        })
      }}/>
    </ScreenContainer>
  );
};

//Teams2 Screen
export const Teams2 = () => {
  return (
    <ScreenContainer>
      <Text>Teams2 Screen</Text>
    </ScreenContainer>
  )
};

//Points Screen
export const Points = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Points Screen</Text>
      <Button 
        title="Points 2" 
        onPress={() => navigation.push('Points2')} 
      />
      <Button
        title="React Native School"
        onPress={() => {
          navigation.navigate('Home', { 
            screen: 'Details', 
            params: { name: 'React Native School'} 
        })
      }}/>
    </ScreenContainer>
  );
};

//Points2 Screen
export const Points2 = () => {
  return (
    <ScreenContainer>
      <Text>Points2 Screen</Text>
    </ScreenContainer>
  );
};

//Login Screen
export const Login = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Login Screen</Text>
      <Button 
        title="Drawer" 
        onPress={() => navigation.toggleDrawer()} 
      />
      <Button 
        title="Sign Out" 
        onPress={() => signOut()} 
      />
    </ScreenContainer>
  );
};

//Load Screen
export const Splash = () => {
  return (
    <ScreenContainer>
      <Text>Loading...</Text>
    </ScreenContainer>
  );
};

//SignIn Screen
export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button 
        title="Sign In" 
        onPress={() => signIn()} 
      />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

//Create Account Screen
export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

   return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button 
        title="Sign Up" 
        onPress={() => signUp()} 
      />
    </ScreenContainer>
  );
};
//End Screens