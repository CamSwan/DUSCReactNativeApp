import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from './context';
import { 
  Login,
  SignIn, 
  CreateAccount, 
  Home,
  Points,
  Points2, 
  Teams,
  Teams2, 
  Details,   
  Splash, 
} from "./Screens";

//screen to log in or create an account
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "Create Account" }}
      />
    </AuthStack.Navigator>
  );
};

//Main2 shows the current user info
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} options={({ route }) => 
      ({ title: route.params.name })}
        />
    </HomeStack.Navigator>
  );  
};

const TeamsStack = createStackNavigator();
const TeamsStackScreen = () => {
  return (
    <TeamsStack.Navigator>
      <TeamsStack.Screen name="Teams" component={Teams} />
      <TeamsStack.Screen name="Teams2" component={Teams2} />
    </TeamsStack.Navigator>
  );
};

//Main3 shows the 
const PointsStack = createStackNavigator();
const PointsStackScreen = () => {
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Points" component={Points} />
      <PointsStack.Screen name="Points2" component={Points2} />
    </PointsStack.Navigator>
  );
};

//Main1 holds the signIn, CreateAccount, signOut screens
const LoginStack = createStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

//this is the bottom navigation
const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Points" component={PointsStackScreen} />
      <Tabs.Screen name="Teams" component={TeamsStackScreen} />
    </Tabs.Navigator>
  );
};

//this is the left side navigation
const Drawer = createDrawerNavigator();
const DrawerScreen = ({ userToken }) => {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginStackScreen} />
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Points" component={TabsScreen} />
      
    </Drawer.Navigator>
  );
};

//If user is signed in open App Screen else open Auth Screen
//options={{animationEnabled: false}} turns off inbetween screen animations
const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => {
  return (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen name="App" component={DrawerScreen} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

//Tracks if a user is signed in
export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  //Creates the SignIn, SignUp, SignOut functions
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  //when the app starts up
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  )
};