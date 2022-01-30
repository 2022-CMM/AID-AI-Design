import * as React from 'react';
import { Text, View, Button,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

function SignUp({ navigation: { navigate }}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>회원가입</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>아이디</Text>
                <TextInput style={styles.getSome} placeholder="아이디를 입력해주세요" placeholderTextColor={'#999999'}/>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput style={styles.getPw} placeholder="비밀번호를 입력해주세요" placeholderTextColor={'#999999'} secureTextEntry={true}/>
                <Text style={styles.label}>이름</Text>
                <TextInput style={styles.getSome} placeholder="홍길동" placeholderTextColor={'#999999'}/>
                <Text style={styles.label}>이메일</Text>
                <TextInput style={styles.getSome} placeholder="example@example.co.kr" placeholderTextColor={'#999999'}/>
                <SignUp_Btn style={{marginTop:70}} onPress={() => navigate('LogIn')} />
            </View>
        </View>
    );
}

const SignUp_Btn = ({onPress}) => {
    return (
        <View style={styles.container, {marginTop:40, marginBottom:90}}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress}>
                <Text style={styles.buttonText}>회원가입</Text>
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
        marginLeft:24,
        marginBottom:30
    },
    content:{
        flex:6.77,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        paddingLeft:30
    },
    label:{
        fontSize: 15,
        marginBottom: 10
    },
    getSome:{
        width:315,
        height:54,
        padding:19,
        fontSize:14,
        color:'#111111',
        borderWidth:1,
        borderRadius:18,
        borderColor:'#04AA8C',
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 30
    },
    getPw:{
        width:315,
        height:54,
        padding:19,
        fontSize:14,
        color:'#111111',
        borderWidth:1,
        borderRadius:18,
        borderColor:'#04AA8C',
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 30
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
    }
    
});

export default SignUp;