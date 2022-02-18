import React,{ useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import API from './AxiosAPI';

import LogoSvg from '../media/logo2_svg';
import Like from '../media/like';
import Pass from '../media/pass';
import Liked from '../media/liked';
import Passed from '../media/passed'
import Filled_Heart from '../media/Filled_heart';
import Empty_Heart from '../media/Empty_heart';

function Designer({route}) {

    const [like,setlike] = useState(false);
    let uri = 'http://20.194.101.73:8000' + route.params.profile_image;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoSvg />
            </View>
            <View style={styles.Big_pic}>
                <Image source={{uri:uri}} style={styles.img} />
                <Text style={{position:'absolute',left:24,bottom:18,fontSize:24,fontWeight:'bold'}}>{route.params.name}</Text>
            </View>
            <View style={styles.info}>
                <View style={{marginLeft: 24,marginTop:15}}>
                    <Text style={styles.key}>contact      <Text style={styles.value}>{route.params.phone_no}</Text></Text>
                    <Text style={styles.key}>포트폴리오    <Text style={styles.value}>{route.params.portfolio}</Text></Text>
                    {/* contact랑 포트폴리오도 디비에 추가 */}
                </View>
                <View style={{position:'absolute', right:24, top:-48,justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:uri}} style={styles.beforeimg} />
                    <Text style={{fontSize:12}}>{route.params.beforename}</Text>
                    <TouchableOpacity style={{marginLeft:20,marginRight:20,marginTop:15}} onPress={()=>{setlike(!like);}}>{like&&<Filled_Heart />}{!like&&<Empty_Heart />}</TouchableOpacity>
                    <Text>{route.params.likes}</Text>
                    {/* likes라는 db데이터 만들어야겠음 */}
                </View>
            </View>
        </View>
    );
}

// 변수명이랑 디비 한 번 싹 정리 필요

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        flex:1,
        justifyContent: 'flex-end',
        borderColor:'#CACACA',
        borderBottomWidth:1
    },
    Big_pic:{
        flex: 4.55
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'stretch',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        borderBottomWidth:0.5,
        borderColor:'#04AA8C',
        borderLeftWidth:0.5,
        borderRightWidth:0.5
    },
    info:{
        flex: 2.18
    },
    key:{
        fontSize:14,
        fontWeight:'700',
        marginBottom:13
    },
    value:{
        fontWeight:'normal'
    },
    beforeimg:{
        width:110,
        height:110,
        borderRadius:100,
        resizeMode:'cover',
        borderWidth:7,
        borderColor:'#ffffff'
    }
})

export default Designer;