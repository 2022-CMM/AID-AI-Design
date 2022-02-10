import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Email_Icon from '../media/email_icon';
import Back_Icon from '../media/goBack';
import Id_Icon from '../media/Id_icon';

function FindID({ navigation: { navigate } }) {

    const [sended,setsended] = useState(false);

    const SendEmail = () => {
        return (
            <TouchableOpacity style={styles.sendemail} activeOpacity={0.6} onPress={()=>setsended(true)}>
                <Text style={styles.emailtext}>이메일 인증</Text>
            </TouchableOpacity>
        );
    };

    const Login = () => {
        return (
            <TouchableOpacity style={styles.smallbtn} activeOpacity={0.6} onPress={()=>navigate('LogIn')}>
                <Text style={styles.smalltext}>로그인</Text>
            </TouchableOpacity>
        );
    };

    const Findpw = () => {
        return (
            <TouchableOpacity style={styles.smallbtn} activeOpacity={0.6} onPress={()=>navigate('FindPw')}>
                <Text style={styles.smalltext}>비밀번호 찾기</Text>
            </TouchableOpacity>
        );
    };

    const EmailSended = () => {
        return(
            <View style={{width:315,height:122,borderRadius:9,backgroundColor:'#ffffff',borderColor:'#04AA8C',borderWidth:1,marginTop:60,justifyContent:'center',alignItems:'center'}}>
                <Id_Icon />
                <Text style={{marginTop:14}}>000 회원님의 아이디는 qwert123 입니다.</Text>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:12}}>
                    <Login />
                    <Findpw />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', marginLeft:30, marginBottom:12,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigate('FindUser')}><Back_Icon /></TouchableOpacity><Text style={{fontSize:20}}>  아이디 찾기</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:12,color:'#999999',marginLeft:30,marginTop:40}}>등록된 회원정보 확인을 통해 비밀번호를 재설정 하실 수 있습니다.</Text>
                <View style={{alignItems:'center',marginTop:8}}>
                    <TextInput placeholder='이름...' style={styles.input}/>
                    <TextInput placeholder='이메일 주소...' style={styles.input}/>
                    <SendEmail />
                    {sended && <EmailSended />}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    header:{
        flex:1,
        justifyContent: 'flex-end',
        borderColor:'#CACACA',
        borderBottomWidth:1
    },
    navi:{
        fontSize:20,
        marginBottom:18,
        marginLeft:30
    },
    content:{
        flex:6.74,
    },
    input:{
        color:'#000000',
        fontSize:14,
        padding:19,
        width:315,
        height:54,
        borderRadius:18,
        backgroundColor:'#ffffff',
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginTop:10
    },
    sendemail:{
        width:315,
        height:50,
        backgroundColor:'#04AA8C',
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginTop:42
    },
    emailtext:{
        fontSize:18,
        color:'#ffffff',
        fontWeight:'600'
    },
    smallbtn:{
        width:110,
        height:30,
        backgroundColor:'#04AA8C',
        borderRadius:9,
        justifyContent:'center',
        alignItems:'center',
        marginRight:13,
        marginLeft:13
    },
    smalltext:{
        color:'#ffffff',
    }
})

export default FindID;