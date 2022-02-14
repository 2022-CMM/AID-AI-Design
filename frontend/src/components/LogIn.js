import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import LogoSvg from '../media/logo_svg';
import axios from 'axios';

import API from './AxiosApi';

function LogIn({ navigation: { navigate } }) {
    const [Id, setId] = React.useState(null);
    const [Pw, setPw] = React.useState(null);

    // const IsValid = async () =>{
    //     const data = {
    //         username : Id,
    //         password : Pw
    //     }
    //     try { 
    //         const {
    //             data: { path }
    //         } = await axios.post("http://192.168.1.7:8000/rest-auth/login/",data,{
    //             headers: { 
    //                 "content-type": "application/json"
    //             }
    //         });
    //     } catch (e) {
    //         console.log(e);
    //         console.log(Id);
    //         console.log(Pw);
    //     }
    //     // fetch('http://192.168.1.7:8000/rest-auth/login/', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         Accept: 'application/json',
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     // send our base64 string as POST request
    //     //     body: JSON.stringify({
    //     //         username : Id,
    //     //         password : Pw,
    //     //     }),
    //     // })
    // };

    function IsValid(Id, Pw) {
        axios.get('http://20.194.101.73:8000/results/', {
            id: Id,
            password: Pw
        })
        .then(function (response) {
            console.log(response)
            navigate('Main')
        })
        .catch(function (error) {
            console.log(error);
            console.log(Id);
            console.log(Pw);
        });
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.navi}>로그인</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LogoSvg />
                </View>
                <View style={styles.login}>
                    <TextInput style={styles.getId} placeholder="아이디를 입력해주세요" onChangeText={(Id) => setId(Id)} placeholderTextColor={'#999999'}/>
                    <TextInput style={styles.getPw} placeholder="비밀번호를 입력해주세요" onChangeText={(Pw) => setPw(Pw)} placeholderTextColor={'#999999'} secureTextEntry={true}/>
                    <Forgot_Btn onPress={() => navigate('Main')} /> 
                    {/* 임시로 forgot 버튼에 메인페이지 이동 넣어놓음 */}
                    <LogIn_Btn onPress={() => {IsValid(Id,Pw)}} />
                </View>
                <View style={styles.SignUp} >
                    
                    <View style={styles.line}></View>
                    
                </View>
            </View>
            <View style={styles.footer}>
                <SignUp_Btn onPress={() => navigate('FindUser')} />
            </View>
        </View>
    );    
}



// const IsValid = async(Id,Pw) => {
//     await API.post('/rest-auth/login/', {
//         username: Id,
//         email:'',
//         password: Pw
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//         console.log(Id);
//         console.log(Pw);
//     })
// };

const LogIn_Btn = ({onPress}) => { 
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress} >
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
};

const Forgot_Btn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.Forgot_Btn} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.ForgotText}>아이디/비밀번호 찾기</Text>
        </TouchableOpacity>
    );
};

const SignUp_Btn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.SignUp_Btn} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.nothing}>아직 회원이 아닌가요?  </Text><Text style={styles.SignUpText}>회원가입&gt;</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    header:{
        flex:1,
        justifyContent: 'flex-end'
    },
    navi:{
        fontSize:20,
        marginBottom:30,
        marginLeft:24
    },
    content:{
        flex:5.7,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        backgroundColor:'#ffffff'
    },
    logo: {
        flex: 1,
        paddingTop:48
    },
    login:{
        flex: 2.3,
        justifyContent:"flex-start"

    },
    getId:{
        width:315,
        height:54,
        padding:19,
        fontSize:14,
        color:'#111111',
        borderRadius:18,
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
    getPw:{
        marginTop:9,
        width:315,
        height:54,
        padding:19,
        fontSize:14,
        color:'#111111',
        borderRadius:18,
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
    button:{
        width:315,
        height:54,
        backgroundColor:'#04AA8C',
        borderRadius:18,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    Forgot_Btn:{
        alignItems: "flex-end",
        marginBottom:25,
        marginTop:22
    },
    ForgotText:{
        fontSize:12,
        color:'#999999',
        textDecorationLine: 'underline'

    },
    line:{
        width:250, 
        borderColor:'#EAEAEA' ,
        borderTopWidth:1, 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:45
    },
    SignUp:{
        flex: 1.8
    },
    SignUp_Btn:{
        flexDirection:'row',
        marginTop:35
    },
    SignUpText:{
        fontSize:12,
        color:'#fff',
        fontWeight:'bold'
    },
    nothing:{
        fontSize:12,
        color:'#fff'
    },
    footer:{
        flex:1.07,
        alignItems: 'center',
        backgroundColor:'#04AA8C'
    }
    
});

export default LogIn;