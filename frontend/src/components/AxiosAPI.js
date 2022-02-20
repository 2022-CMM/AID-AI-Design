import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    let Token;
    try {
        Token = 'Token ' + await AsyncStorage.getItem('@userToken');
        if(Token !== null) {
            // console.log('eee');
        }
        // console.log(Token);
    } catch(e) {
        console.log(e);
    }
    return Token;
}

const userToken = getData();
const API = axios.create({
    baseURL:'http://20.194.101.73:8000',
    headers:{
        'Content-Type': 'application/json',
        'Authorization' : userToken
    },
    withCredentials:true,
});

export default API;