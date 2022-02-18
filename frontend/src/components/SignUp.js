import * as React from 'react';
import { Text, View, Button,StyleSheet,TextInput,TouchableOpacity, Alert } from 'react-native';
import Back_Icon from '../media/goBack';
import API from './AxiosAPI';

function SignUp({ navigation: { navigate }}) {

    const [Id,setId] = React.useState(null);
    const [Pw,setPw] = React.useState(null);
    const [name,setname] = React.useState(null);
    const [email,setemail] = React.useState(null);
    const [usertype,setusertype] = React.useState(0);

    function submit(){
        API.post('/register/',{
                id: Id,
                email: email,
                password: Pw,
                name:name,
                user_type:usertype
            })
            .then(function (response) {
                console.log(response);
                Alert.alert('회원가입이 완료되었습니다!');
                navigate('LogIn');
            })
            .catch(function (error) {
                console.log(error);
                Alert.alert('회원가입에 실패하였습니다.');
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', marginLeft:24, marginBottom:30,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigate('LogIn')}><Back_Icon /></TouchableOpacity><Text style={{fontSize:20}}>  회원가입</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>아이디</Text>
                <TextInput style={styles.getSome} placeholder="아이디를 입력해주세요" onChangeText={(Id) => setId(Id)} placeholderTextColor={'#999999'}/>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput style={styles.getPw} placeholder="비밀번호를 입력해주세요" onChangeText={(Pw) => setPw(Pw)} placeholderTextColor={'#999999'} secureTextEntry={true}/>
                <Text style={styles.label}>이름</Text>
                <TextInput style={styles.getSome} placeholder="홍길동" onChangeText={(name) => setname(name)} placeholderTextColor={'#999999'}/>
                <Text style={styles.label}>이메일</Text>
                <TextInput style={styles.getSome} placeholder="example@example.co.kr" onChangeText={(email) => setemail(email)} placeholderTextColor={'#999999'}/>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <TouchableOpacity style={usertype===0?styles.checked:styles.unchecked} onPress={()=>setusertype(0)}>
                        <Text style={usertype===0?styles.checked_text:styles.unchecked_text}>고객</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={usertype===1?styles.checked:styles.unchecked} onPress={()=>setusertype(1)}>
                        <Text style={usertype===1?styles.checked_text:styles.unchecked_text}>디자이너</Text>
                    </TouchableOpacity>
                </View>
                <SignUp_Btn style={{marginTop:70}} onPress={() => submit(Id,Pw,email)} />
            </View>
        </View>
    );
}



const SignUp_Btn = ({onPress}) => {
    return (
        <View style={(styles.container, {marginTop:40, marginBottom:90})}>
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
        paddingLeft:30,
        paddingRight:30
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
    },
    checked:{
        width:150,
        height:53,
        backgroundColor:'#04AA8C',
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center'
    },
    unchecked:{
        width:150,
        height:53,
        backgroundColor:'#ffffff',
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#04AA8C'
    },
    checked_text:{
        fontSize:15,
        fontWeight:'600',
        color:'#ffffff'
    },
    unchecked_text:{
        fontSize:15,
        fontWeight:'600',
        color:'#000000'
    }
    
});

export default SignUp;