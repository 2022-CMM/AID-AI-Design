import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAsync} from 'react-async';

const getData = async () => {
    let res;
    let token;
    try {
        token = 'Token ' + await AsyncStorage.getItem('@userToken');
        // console.log(token);
    } catch(e) {
        console.log(e);
    }

    var config = {
        method: 'get',
        url: 'http://20.194.101.73:8000/api/request/',
        headers: { 
            'Authorization': token
        }
    };
    await axios(config)
        .then((response) => {
            res = response.data;
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    // console.log(res);
    return res;
    
}

function Requests({ navigation: { navigate }, route }) {

    function Request_items(){
        let DATA=[];
        const { data, error, isLoading } = useAsync({ promiseFn: getData});
        if(data){DATA=data;}
        // console.log(DATA);
        
        return (
            <View>
                {DATA.map((item) => {
                return (
                    <TouchableOpacity key={item.id} style={styles.items} onPress={()=>navigate('RequestsDetail',item)}>
                        <Image source={{uri:'http://20.194.101.73:8000'+item.goods.image_results}} style={styles.img} />
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
                <ScrollView>
                    <Request_items />
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
        height:'100%',
        marginRight:20,
    }
})

export default Requests;