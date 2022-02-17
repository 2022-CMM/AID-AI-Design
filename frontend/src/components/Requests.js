import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import axios from 'axios';

var data = [
    {
        id:1,
        title:'00 디자이너 님의 요청서',
        img:'https://comart.io/images/rn/react-native.png',
        nextpage:{
            ordernum:'주문 번호 0010056151',
            img:'https://comart.io/images/rn/react-native.png',
            size:{'총장':70,'어깨너비':46,'가슴단면':54,'소매길이':24},
            category:'반팔',
            due:'0000년 00월 00일',
            request:'가나다라마바사가나다라마바사',
            designers:'ㅁㅁㅁ시 ㅁㅁㅁ구 ㅁㅁㅁ로 ㅁㅁ - ㅁㅁ',
            customers:'ㅁㅁㅁ시 ㅁㅁㅁ구 ㅁㅁㅁ로 ㅁㅁ - ㅁㅁ',
            cost:'30,000원'
        }
    },
    {
        id:2,
        title:'01 디자이너 님의 요청서',
        img:'https://comart.io/images/rn/react-native.png',
        nextpage:{
            ordernum:'주문 번호 0010056151',
            img:'https://comart.io/images/rn/react-native.png',
            size:{'총장':70,'어깨너비':46,'가슴단면':54,'소매길이':24},
            category:'반팔',
            due:'0000년 00월 00일',
            request:'가나다라마바사가나다라마바사',
            designers:'ㅁㅁㅁ시 ㅁㅁㅁ구 ㅁㅁㅁ로 ㅁㅁ - ㅁㅁ',
            customers:'ㅁㅁㅁ시 ㅁㅁㅁ구 ㅁㅁㅁ로 ㅁㅁ - ㅁㅁ',
            cost:'30,000원'
        }
    }
]

function Requests({ navigation: { navigate }, route }) {

    var config = {
        method: 'get',
        url: 'http://20.194.101.73:8000/api/request/',
        headers: { 
            'Authorization': 'Token 07e12559d52155ff82358aa3e797234b4e6ee938'
        }
    };

    React.useEffect(async()=>{
        await axios(config)
            .then(function (response) {
                data = response.data;
                // console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])

    function Request_items({data}){
        return (
            <View>
                {data.map((item) => {
                return (
                    <TouchableOpacity key={item.id} style={styles.items} onPress={()=>navigate('RequestsDetail',item)}>
                        <Image source={{uri:item.img}} style={styles.img} />
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                );
            })}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>{route.params.title} 목록</Text>
            </View>
            <View style={styles.content}>
                <Request_items data={data} />
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
        flex:6.6,
        alignItems:'center'
    },
    items:{
        width:327,
        height:55,
        borderColor:'#CACACA',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:16
    },
    img:{
        width:55,
        height:55,
        marginRight:20
    }
})

export default Requests;