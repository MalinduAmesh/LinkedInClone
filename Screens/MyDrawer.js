import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import StackNavigator from './StackNavigator'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
}