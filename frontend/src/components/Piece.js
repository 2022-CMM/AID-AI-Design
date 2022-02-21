import React,{ useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';

import LogoSvg from '../media/logo2_svg';
import Like from '../media/like';
import Pass from '../media/pass';
import Liked from '../media/liked';
import Passed from '../media/passed'

function Piece({route}) {

    const [like,setlike] = useState(false);
    const [pass,setpass] = useState(false);
    let uri = 'http://20.194.101.73:8000'+route.params.image_results;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoSvg />
            </View>
            <View style={styles.Big_pic}>
                <Image source={{uri:'http://20.194.101.73:8000'+route.params.image_results}} style={styles.img} />
                <Text style={{position:'absolute',left:24,bottom:18,fontSize:24,fontWeight:'bold',backgroundColor:'rgba(255, 255, 255, 0.6)',}}>{route.params.title_changed}</Text>
            </View>
            <View style={styles.info}>
                <View style={{marginLeft: 24,marginTop:15}}>
                    <Text style={styles.key}>디자이너       <Text style={styles.value}>{route.params.designer}</Text></Text>
                    <Text style={styles.key}>분류              <Text style={styles.value}>{route.params.goods_type}</Text></Text>
                    <Text style={styles.key}>사이즈           <Text style={styles.value}>{route.params.size}</Text></Text>
                </View>
                <View style={{position:'absolute', right:24, top:-48,justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:'http://20.194.101.73:8000'+route.params.image}} style={styles.beforeimg} />
                    <Text style={{fontSize:12}}>{route.params.title}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{marginLeft:20,marginRight:20,marginTop:15}} onPress={()=>{setlike(!like);setpass(false);}}>{!like&&<Like />}{like&&<Liked />}</TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:20,marginRight:20,marginTop:15}} onPress={()=>{setpass(!pass);setlike(false);}}>{!pass&&<Pass />}{pass&&<Passed />}</TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

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
        borderBottomRightRadius:30
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

export default Piece;