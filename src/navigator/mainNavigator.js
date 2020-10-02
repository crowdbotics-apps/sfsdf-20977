import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial122037Navigator from '../features/Tutorial122037/navigator';
import NotificationList122009Navigator from '../features/NotificationList122009/navigator';
import Settings122008Navigator from '../features/Settings122008/navigator';
import Settings122000Navigator from '../features/Settings122000/navigator';
import UserProfile121998Navigator from '../features/UserProfile121998/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial122037: { screen: Tutorial122037Navigator },
NotificationList122009: { screen: NotificationList122009Navigator },
Settings122008: { screen: Settings122008Navigator },
Settings122000: { screen: Settings122000Navigator },
UserProfile121998: { screen: UserProfile121998Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
