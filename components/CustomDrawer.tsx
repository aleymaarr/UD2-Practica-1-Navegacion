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
