import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import LogoSvg from '../media/logo2_svg';
import {useAsync} from 'react-async';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        url: 'http://20.194.101.73:8000/api/results/',
        headers: { 
            'Authorization': 'Token ' + token
        }
    };
    await axios(config)
        .then(function (response) {
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


function HomePage({ navigation: { navigate } }) {

    function Item({item}){
        let uri='http://20.194.101.73:8000'+item.image_results;
        return(
            <View style={styles.listitem}>
                <TouchableOpacity onPress={() => navigate('Piece',item)}>
                    <Image source={{uri:uri}} style={styles.img} />
                </TouchableOpacity>
            </View>
        );
    }

    function HomeView(){
        const { data:DATA, error, isLoading } = useAsync({ promiseFn: getData});
        // if (error) {console.log(error);}
        // if (DATA) {console.log(DATA);}
        // if(isLoading){console.log(isLoading);}
        // console.log(DATA);
        return (
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item}/>}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        );
    }

    return(
        <View style={styles.container}>
                <View style={styles.header}>
                    <LogoSvg />
                </View>
                <View style={styles.content}>
                    <HomeView />
                </View>
        </View>
        
    )
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
    content:{
        flex:6.6,
        paddingLeft:24,
        paddingRight:24
    },
    listitem:{
        width:156,
        height:200,
        marginRight:15,
        marginBottom:15
        
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'stretch'
    }
})

export default HomePage;

