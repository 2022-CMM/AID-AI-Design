import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import LogoSvg from '../media/logo_svg';
import Tape from '../media/tape';
import Dress from '../media/dress';
import Tree from '../media/tree';
import Trees from '../media/trees';

function Campaign(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>AID와 함께하는 환경보호</Text>
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={styles.green}>
                        <Text style={{fontSize:20,fontWeight:'600',color:'#ffffff'}}>AID와 함께하는 환경보호</Text>
                        <Text style={{fontSize:32,fontWeight:'600',color:'#ffffff'}}>SAVE THE EARTH</Text>
                        <Text style={{fontSize:24,fontWeight:'600',color:'#ffffff',marginTop:39}}>옷 1kg = CO2 12kg</Text>
                        <Text style={{fontSize:15,fontWeight:'600',color:'#ffffff',marginTop:39,lineHeight:23,textAlign:'center'}}>
                            패션은 모든 산업 중 세 번째로 많은 환경 오염을 발생시킵니다.
                            합성 섬유로 만들어진 의류가 분해되는 데에는 200년이 소요되며, 우리 옷 장 가득한 면 티셔츠 한장을 만드는 데에는 2.2kg의 탄소가 배출됩니다.
                            버려질 면 티셔츠 3벌의 옷을 재활용하면 1그루의 나무를 심은 것과 같아요.</Text>
                        <View style={{marginTop:29,backgroundColor:'#ffffff',width:285,height:150,borderRadius:15,alignItems:'center'}}>
                            <View style={{position:'absolute',top:-15}}>
                                <Tape />
                            </View>
                            <Text style={{fontSize:17,fontWeight:'700',marginTop:10}}>환경을 생각하는 [000]님이</Text>
                            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:6}}>
                                <View style={{justifyContent:'flex-start',alignItems:'flex-start',width:140,paddingLeft:8,borderRightWidth:1,borderColor:'#CACACA',height:110}}>
                                    <Text style={{fontSize:16,fontWeight:'700'}}>절약한 옷</Text>
                                    <Text style={{fontSize:24,fontWeight:'700'}}>3<Text style={{fontSize:14,fontWeight:'700'}}> 벌</Text></Text>
                                    <View style={{position:'absolute',right:13,bottom:2}}>
                                        <Dress />
                                    </View>
                                </View>
                                <View style={{justifyContent:'flex-start',alignItems:'flex-start',width:140,paddingLeft:8,height:110}}>
                                    <Text style={{fontSize:16,fontWeight:'700'}}>심은 나무</Text>
                                    <Text style={{fontSize:24,fontWeight:'700'}}>1<Text style={{fontSize:14,fontWeight:'700'}}> 그루</Text></Text>
                                    <View style={{position:'absolute',right:13,bottom:2}}>
                                        <Tree />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:65,backgroundColor:'#ffffff',width:285,height:226,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <View style={{position:'absolute',top:-15}}>
                                <Tape />
                            </View>
                            <Trees />
                            <Text style={{fontSize:18,fontWeight:'600',textAlign:'center',marginTop:10}}>에이드 여러분들의 힘을 모아{'\n'} 총 34,321 그루의 나무를 심었어요!</Text>
                            <TouchableOpacity style={{width:65,height:65,borderColor:'#04AA8C',borderRadius:50,backgroundColor:'#ffffff',borderWidth:3,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,fontWeight:'600',textAlign:'center'}}>AID{'\n'}공유하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{marginTop:24,marginBottom:50}}>
                            <LogoSvg />
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        borderBottomWidth:1,
        borderColor:'#CACACA'
    },
    navi:{
        fontSize:20,
        marginBottom:18,
        marginLeft:30
    },
    content:{
        flex:6.74
    },
    green:{
        justifyContent:'center',
        alignItems:'center',
        flex:7.35,
        backgroundColor:'#04AA8C',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingTop:59,
        paddingLeft:24,
        paddingRight:24,
        paddingBottom:60
    }
})

export default Campaign;