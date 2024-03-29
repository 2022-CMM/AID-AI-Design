import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity,Image } from 'react-native';
import Info_Icon from '../media/Info_icon';
import Earth_Svg from '../media/Earth_svg';
import {useAsync} from 'react-async';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    let token;
    try {
        token = 'Token ' + await AsyncStorage.getItem('@userToken');
        // console.log(token);
    } catch(e) {
        console.log(e);
    }

    let res;
    var config = {
        method: 'get',
        url: 'http://20.194.101.73:8000/api/mypage/',
        headers: { 
            'Authorization': token
        }
    };
    await axios(config)
        .then(function (response) {
            res = response.data;
            // console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    // console.log(res);
    return res;
    
}

function MyPage({ navigation: { navigate } },{onPress}) {
    let DATA = new Object();
    let Designers = [];
    let Designs = [];
    const { data, error, isLoading } = useAsync({ promiseFn: getData});
    // console.log(data);
    if(data){
        DATA=data;
        Designers = data.designer;
        Designs = data.image;
    }
    const Paging_Btn = ({text, num}) => {
        return (
            <View>
                <TouchableOpacity style={styles.find_button} activeOpacity={0.6} onPress={()=>navigate('Requests',{title:text})} >
                    <Text style={styles.find_buttonText}>{text}</Text>
                    <Text style={styles.find_buttonNum}>{num}</Text>
                    <View style={{width:25,borderBottomWidth:2}}></View>
                </TouchableOpacity>
            </View>
        );
    };

    const Ders = () => {
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                {Designers.map((item) => {
                return (
                    <TouchableOpacity key={item.id} activeOpacity={0.7}>
                        <Image source={{uri:'http://20.194.101.73:8000'+item.profile_image}} style={styles.designer} />
                    </TouchableOpacity>
                );
            })}
            </View>
        );
    }

    const Des = () => {
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                {Designs.map((item) => {
                return (
                    <TouchableOpacity key={item.id} activeOpacity={0.7}>
                        <Image source={{uri:'http://20.194.101.73:8000'+item.image_results}} style={styles.design} />
                    </TouchableOpacity>
                );
            })}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>마이페이지</Text>
            </View>
            <View style={styles.CO2}>
                <View style={{width:328,height:98,backgroundColor:'#EBEBEB',borderRadius:20,paddingLeft:16,paddingRight:16,justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>navigate('Campaign',{name:DATA.name,num:DATA.num_request+DATA.num_pending+DATA.num_completed})}><View><Text style={{fontSize:16}}>{DATA.name}님이 지금까지 절얀한 옷은? &gt;</Text></View></TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:32,color:'#04AA8C',fontWeight:'600'}}>{DATA.num_request+DATA.num_pending+DATA.num_completed}<Text style={{fontSize:18,color:'#04AA8C',fontWeight:'600'}}> 벌</Text></Text>
                        <Earth_Svg />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.page}>
                        <Paging_Btn text='승인 대기 중' num={DATA.num_request} />
                        <Paging_Btn text='진행중인 의뢰' num={DATA.num_pending} />
                        <Paging_Btn text='완료 의뢰' num={DATA.num_completed} />
                    </View>
                    <View style={styles.like_designer}>
                        <Text style={styles.label2}>즐겨찾는 디자이너</Text>
                        <TouchableOpacity><Text style={styles.more}>더 보기</Text></TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:16}}>
                        <Ders />
                    </View>

                    <View style={styles.like_designer}>
                        <Text style={styles.label2}>좋아요 표시한 디자인</Text>
                        <TouchableOpacity><Text style={styles.more}>더 보기</Text></TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:16,marginBottom:40}}>
                        <Des />
                    </View>

                    <Center_Btn onPress={() => {onPress}} />
                    <SignOut_Btn onPress={() => navigate('LogIn')} />
                </ScrollView>
            </View>
        </View>
    );
}


const Info_Btn = ({onPress}) => {
    return (
            <TouchableOpacity activeOpacity={0.6} onPress={onPress} >
                <Info_Icon />
            </TouchableOpacity>
    );
};

const Center_Btn = ({onPress}) => { 
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress} >
            <Text style={styles.buttonText}>고객센터</Text>
        </TouchableOpacity>
    );
};
const SignOut_Btn = ({onPress}) => { 
    return (
        <TouchableOpacity style={styles.button1} activeOpacity={0.6} onPress={onPress} >
            <Text style={styles.buttonText1}>로그아웃</Text>
        </TouchableOpacity>
    );
};

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
    CO2:{
        flex:1.1,
        paddingLeft:24,
        paddingRight:24,
        width:'100%',
        borderColor:'#CACACA',
        justifyContent:'center'
    }, 
    content:{
        flex:5.64,
        width:'100%',
        paddingLeft:24,
        paddingRight:24
    },
    info:{
        flexDirection: "row", 
        alignItems:'center',
        width:'100%',
        marginTop:16,
        justifyContent:'space-between'
    },
    percent:{
        
    },
    name:{
        color:'#000000',
        fontSize:18
    },
    carbon:{
        color:'#000000',
        fontSize:18,
        textDecorationLine: 'underline',
    },
    earth:{
        position:'absolute',
        right:24,
        top:9
        },
    marker:{
        width:'100%',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    mark:{

    },
    lbs:{

    },
    line:{
    width:410, 
    borderColor:'#CACACA' ,
    borderTopWidth:1,
    marginTop:50,
},
    page:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    marginTop:26
},
find_button:{
    width:95,
    height:95,
    backgroundColor:'#ffffff',
    borderRadius:10,
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
    color:'#000000',
    fontSize:13,
    marginTop:-6
},
find_buttonNum:{
    color:'#000000',
    fontSize:40,
    fontWeight: "bold",
},
    label2:{
        fontSize:16,
        color:'#111111'
    },
    like_designer:{
        marginTop:21,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center'
    },
    designer:{
        width:75,
        height:75,
        borderRadius:50,
        backgroundColor:'#C4C4C4',
    },
    design:{
        width:75,
        height:75,
        backgroundColor:'#C4C4C4',
    },
    more:{
        fontSize:12,
        color:'#CACACA',
        textDecorationLine: 'underline',
    },
    footer:{
        flex:2.5,
        alignItems: 'center',
    },
    button:{
        width:327,
        height:50,
        borderRadius:18,
        borderColor: '#04AA8C',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color:'#04AA8C',
        fontSize:16,
        fontWeight:'bold'
    },
    button1:{
        width:327,
        height:50,
        backgroundColor:'#F16363',
        borderRadius:18,
        justifyContent: "center",
        alignItems: "center",
        marginTop:15,
        marginBottom:60
    },
    buttonText1:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default MyPage;