import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import API from './AxiosAPI';

function RequestDetail() {

    const Accept = async() =>{
        await API.post()
    }

    const Reject = async() =>{
        await API.post()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>주문 번호 00100056151</Text>
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'https://comart.io/images/rn/react-native.png'}} style={styles.img} />
                        <Text style={{color:'#888888',marginBottom:25}}>최종 디자인 예상도</Text>
                    </View>
                    <View style={{alignItems:'flex-start'}}>
                        <Text style={{fontSize:16, fontWeight:'600', width:90, marginLeft:30}}>사이즈</Text>
                        <View style={{alignItems:'center',width:'100%',marginTop:14,marginBottom:29}}>
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
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderBottomLeftRadius:16,borderLeftWidth:1,borderBottomWidth:1,borderColor:'#04AA8C'}}>
                                    <Text style={{color:'#000000',fontSize:16}}>70</Text>
                                </View>
                                <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderBottomWidth:1,borderColor:'#04AA8C'}}>
                                    <Text style={{color:'#000000',fontSize:16}}>46</Text>
                                </View>
                                <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderColor:'#04AA8C',borderBottomWidth:1}}>
                                    <Text style={{color:'#000000',fontSize:16}}>54</Text>
                                </View>
                                <View style={{backgroundColor:'#fff',width:83,height:34,alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderRightWidth:1,borderColor:'#04AA8C',borderBottomRightRadius:16,borderBottomWidth:1}}>
                                    <Text style={{color:'#000000',fontSize:16}}>24</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:'100%',paddingLeft:30,paddingRight:30}}>
                            <View style={{width:1,height:300,borderWidth:0.5,position:'absolute',top:0,left:118,borderColor:'#CACACA'}}></View>
                            <View style={styles.info}>
                                <Text style={styles.label}>사이즈</Text>
                                <Text style={styles.desc}>반팔</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>예상 기한</Text>
                                <Text style={styles.desc}>0000년 00월 00일</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>고객 요청사항</Text>
                                <Text style={styles.desc}>가나다라마바사가나다라마바사가나다라마바사가나다라마바사</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>디자이너{'\n'}배송지</Text>
                                <Text style={styles.desc2}>ㅁㅁㅁ시 ㅁㅁㅁ구 ㅁㅁㅁ로 ㅁㅁ - ㅁㅁ</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>고객 배송지</Text>
                                <Text style={styles.desc2}>ㅁㅁㅁ시 ㅁㅁㅁ구 ㅁㅁㅁ로 ㅁㅁ - ㅁㅁ</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>청구비용</Text>
                                <Text style={styles.desc}>30,000 원</Text>
                            </View>
                        </View>
                        <View style={{width:'100%',paddingLeft:30,paddingRight:30, flexDirection:'row', justifyContent:'space-between',marginTop:12,marginBottom:60}}>
                            <TouchableOpacity style={{width:150,height:50,backgroundColor:'#ffffff',borderColor:'#04AA8C',borderRadius:12,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                                <Text style={{fontSize:16,color:'#04AA8C',fontWeight:'600'}}>거절</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:150,height:50,backgroundColor:'#04AA8C',borderColor:'#04AA8C',borderRadius:12,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                                <Text style={{fontSize:16,color:'#ffffff',fontWeight:'600'}}>승인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
    info:{
        flexDirection:'row',
        width:'100%',
        marginBottom:30
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        width:100,
    },
    desc:{
        fontSize:16,
        width:215
    },
    desc2:{
        fontSize:16,
        width:180,
    }
})

export default RequestDetail;