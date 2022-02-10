import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';

import HomePage from "./src/components/HomePage"
import SearchPage from "./src/components/SearchPage"
import ChatPage from "./src/components/ChatPage"
import MyPage from "./src/components/MyPage"
import SignUp from './src/components/SignUp';
import LogIn from './src/components/LogIn';
import Home_Icon from './src/media/home_icon';
import Search_Icon from './src/media/search_icon';
import Chat_Icon from './src/media/chat_icon';
import Mypage_Icon from './src/media/mypage_icon';
import Upload_Icon from './src/media/upload_icon';
import FindUser from './src/components/FindUser';
import Upload from './src/components/Upload';
import FindID from './src/components/FindID';
import FindPw from './src/components/FindPw';
import Piece from './src/components/Piece';
import SearchResult from './src/components/SearchResult';
import Chatting from './src/components/Chatting'
import Requests from './src/components/Requests';
import RequestDetail from './src/components/RequestsDetail';
import Designer from './src/components/designer';

import Tabbar_Svg from './src/media/TabBar';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function sleep (ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function delay_splash() {
  await SplashScreen.preventAutoHideAsync();
  await sleep(1500);
  await SplashScreen.hideAsync();    
};

function TabBarAdvancedButton(props) {
  return (
    <View style={{position:'relative', alignItems: 'center'}} pointerEvents="box-none" >
      <TouchableOpacity style={{width:55,height:55,backgroundColor:'#04AA8C',justifyContent:'center',alignItems:'center',borderRadius:100, bottom:28}} onPress={props.onPress} >
        <Upload_Icon />
      </TouchableOpacity>
      {/* <Tabbar_Svg style={{position:'absolute'}}/> */}
    </View>
  );
}

function HomeStack(){
  return(
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Piece" component={Piece} />
        <Stack.Screen name="Designer" component={Designer} />
      </Stack.Navigator>
  );
}

function SearchStack(){
  return(
      <Stack.Navigator initialRouteName="Search" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="Piece" component={Piece} />
        <Stack.Screen name="Designer" component={Designer} />
      </Stack.Navigator>
  );
}

function ChatStack(){
  return(
      <Stack.Navigator initialRouteName="Chats" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chats" component={ChatPage} />
        <Stack.Screen name="Chatting" component={Chatting} />
      </Stack.Navigator>
  );
}

function MyPageStack(){
  return(
      <Stack.Navigator initialRouteName="Mypage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Mypage" component={MyPage} />
        <Stack.Screen name="Requests" component={Requests} />
        <Stack.Screen name="RequestsDetail" component={RequestDetail} />
      </Stack.Navigator>
  );
}

function AppStack() {
  delay_splash();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerShown: false, gestureEnabled:false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="FindUser" component={FindUser} />
        <Stack.Screen name="FindID" component={FindID} />
        <Stack.Screen name="FindPw" component={FindPw} />
        <Stack.Screen name="Main" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTab() {
  return (
    <Tab.Navigator initialRouteName='Home'  screenOptions={{headerShown: false, tabBarShowLabel:false, tabBarVisible: false, tabBarStyle:{ backgroundColor: '#ffffff' }}}>
      {/* tabBarBackground:()=>(<Tabbar_Svg style={{position:'absolute',bottom:0}} />) 이거 탭바모양인데 안먹어서 일단 주석 */}
      <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarIcon: ()=>{ return <Home_Icon />}}} />
      <Tab.Screen name="SearchStack" component={SearchStack} options={{tabBarIcon: ()=>{ return <Search_Icon />}}} />
      <Tab.Screen name="Upload" component={Upload} options={{tabBarButton: (props)=>{ return <TabBarAdvancedButton {...props} />}}} />
      <Tab.Screen name="Chat" component={ChatPage} options={{tabBarIcon: ()=>{ return <Chat_Icon />}}} />
      <Tab.Screen name="My" component={MyPageStack} options={{tabBarIcon: ()=>{ return <Mypage_Icon />}}} />
    </Tab.Navigator>
  );
}


export default AppStack;



// function Uplaod(){
//   const [modalVisible, setModalVisible] = useState(false);
//     return (
//         <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//             onRequestClose={() => { setModalVisible(!modalVisible); }}>
//             <View>
//                 <Text>안녕하세요!</Text>
//             </View>
//         </Modal>
//     );
// }