import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Email_Icon from '../media/email_icon';

function FindPw() {

    const [sended,setsended] = useState(false);

    const SendEmail = ({onPress}) => {
        return (
            <TouchableOpacity style={styles.sendemail} activeOpacity={0.6} onPress={()=>setsended(true)}>
                <Text style={styles.emailtext}>이메일로 받기  </Text>
            </TouchableOpacity>
        );
    };

    const EmailSended = () => {
        return(
            <View style={{width:315,height:92,borderRadius:9,backgroundColor:'#ffffff',borderColor:'#04AA8C',borderWidth:1,marginTop:60,justifyContent:'center',alignItems:'center'}}>
                <Email_Icon />
                <Text style={{marginTop:14}}>비밀번호 재설정을 위한 이메일을 발송하였습니다.</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>비밀번호 찾기</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:12,color:'#999999',marginLeft:30,marginTop:40}}>등록된 회원정보 확인을 통해 비밀번호를 재설정 하실 수 있습니다.</Text>
                <View style={{alignItems:'center',marginTop:8}}>
                    <TextInput placeholder='이름...' style={styles.input}/>
                    <TextInput placeholder='아이디...' style={styles.input}/>
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
    }
})

export default FindPw;