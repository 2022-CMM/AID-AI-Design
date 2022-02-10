import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

let userToken;
try{
    userToken = 'Token '+ AsyncStorage.getItem('userToken');
}catch(e){
    userToken = null;
}
console.log(userToken);
const API = axios.create({
    baseURL:'http://20.194.101.73:8000',
    headers:{
        'Content-Type': 'application/json',
        'Authorization' : userToken
    },
    withCredentials:true,
});

export default API;