import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

function RequestDetail() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>주문 번호 00100056151</Text>
            </View>
            <View style={styles.content}>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:'https://comart.io/images/rn/react-native.png'}} style={styles.img} />
                    <Text style={{color:'#888888',marginBottom:25}}>최종 디자인 예상도</Text>
                </View>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.label}>사이즈</Text>
                    <View style={{alignItems:'center',width:'100%'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <View style={{backgroundColor:'#04AA8C',width:83,height:34,alignItems:'center',justifyContent:'center',borderTopLeftRadius:16}}>
                                <Text style={{color:'#ffffff',fontSize:16}}>총장</Text>
                            </View>
                            <View style={{backgroundColor:'#04AA8C',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderRightWidth:1,borderColor:'#fff'}}>
                                <Text style={{color:'#ffffff',fontSize:16}}>어깨너비</Text>
                            </View>
                            <View style={{backgroundColor:'#04AA8C',width:83,height:34,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#ffffff',fontSize:16}}>가슴단면</Text>
                            </View>
                            <View style={{backgroundColor:'#04AA8C',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderColor:'#fff',borderTopRightRadius:16}}>
                                <Text style={{color:'#ffffff',fontSize:16}}>소매길이</Text>
                            </View>
                        </View>
                        <View>
                        <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderBottomLeftRadius:16,borderLeftWidth:1,borderColor:'#04AA8C'}}>
                                <Text style={{color:'#000000',fontSize:16}}>70</Text>
                            </View>
                            <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderRightWidth:1,borderColor:'#04AA8C'}}>
                                <Text style={{color:'#000000',fontSize:16}}>46</Text>
                            </View>
                            <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderColor:'#04AA8C'}}>
                                <Text style={{color:'#000000',fontSize:16}}>54</Text>
                            </View>
                            <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderColor:'#04AA8C',borderBottomRightRadius:16}}>
                                <Text style={{color:'#000000',fontSize:16}}>24</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>사이즈</Text>
                    </View>
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
        flex:6.6
    },
    img:{
        width:205,
        height:205,
        marginTop:20,
        marginBottom:12
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        width:90,
        marginLeft:30
    }
})

export default RequestDetail;