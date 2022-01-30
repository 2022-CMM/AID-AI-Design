import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import LogoSvg from '../media/logo_svg';
import Id_Icon from '../media/Id_icon';
import Pw_Icon from '../media/Pw_icon';


// import AsyncStorage from '@react-native-community/async-storage';   //async 사용.

function FindUser({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.navi}>아이디/비밀번호 찾기</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LogoSvg />
                    <Text style={styles.help}>무엇을 도와드릴까요?</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.login}>
                    <FindId_Btn />
                    <FindPw_Btn />
                </View>
                <View style={styles.SignUp}>
                    <LogIn_Btn onPress={() => navigate('LogIn')} />
                </View>
            </View>
            <View style={styles.footer}>
                <SignUp_Btn onPress={() => navigate('SignUp')} />
            </View>
        </View>
    );
}


const LogIn_Btn = ({onPress}) => { 
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress} >
                <Text style={styles.buttonText}>로그인 화면으로</Text>
            </TouchableOpacity>
        </View>
    );
};

const SignUp_Btn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.SignUp_Btn} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.nothing}>아직 회원이 아닌가요?  </Text><Text style={styles.SignUpText}>회원가입&gt;</Text>
        </TouchableOpacity>
    );
};

const FindId_Btn = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.find_button} activeOpacity={0.6} onPress={onPress} >
                <Id_Icon />
                <Text style={styles.find_buttonText}>아이디 찾기</Text>
            </TouchableOpacity>
        </View>
    );
};

const FindPw_Btn = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.find_button} activeOpacity={0.6} onPress={onPress} >
                <Pw_Icon />
                <Text style={styles.find_buttonText}>비밀번호 찾기</Text>
            </TouchableOpacity>
        </View>
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
        borderBottomRightRadius:80
    },
    logo: {
        flex: 1,
        paddingTop:48,
        alignItems:'center'
    },
    help:{
        color:'#999999',
        fontSize:12,
        marginTop:22
    },
    login:{
        flex: 2.3,
        justifyContent:"flex-start",
        alignItems:'center',
        paddingTop:20

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
        alignItems: "center",
        marginTop:50
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
        width:270, 
        borderColor:'#CACACA' ,
        borderTopWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:12
    },
    find_button:{
        width:315,
        height:100,
        backgroundColor:'#ffffff',
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12
    },
    find_buttonText:{
        color:'#999999',
        fontSize:16,
        marginTop:12
    },
    SignUp:{
        flex: 1.8,
        justifyContent:'center',
        alignItems:'center'
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

export default FindUser;