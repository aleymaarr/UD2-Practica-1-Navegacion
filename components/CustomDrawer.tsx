import { StyleSheet } from "react-native";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import appColors from "../assets/styles/appColors";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import PortfolioScreen from "../screens/PersonalPortfolioScreen";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import LogoutScreen from "../screens/LogoutScreen";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: appColors.primary,
    },
    headerTintColor: appColors.titleColor,
    drawerItemStyle: {
      width: "90%",
    },
    drawerStyle: {
      backgroundColor: appColors.secondary,
    },
    drawerActiveTintColor: appColors.titleColor,
    drawerActiveBackgroundColor: appColors.primary,
    drawerInactiveTintColor: appColors.textColor,
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: "slide",
  };

  const { isUserLogged } = useContext(LoginContext);

  return isUserLogged ? (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Login"
        component={WelcomeScreen}
        options={{ title: "Login sesion" }}
      />
      <Drawer.Screen
        name="IniAAAcio"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
    </Drawer.Navigator>
  ) : (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Inicio"
        component={WelcomeScreen}
        options={{ title: "Login" }}
      />
      <Drawer.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{ title: "Portfolio" }}
      />
      <Drawer.Screen
        name="Sign off"
        component={LogoutScreen}
        options={{ title: "Sign off" }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
