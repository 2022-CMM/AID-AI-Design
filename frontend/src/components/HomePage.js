import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import LogoSvg from '../media/logo2_svg';
import API from './AxiosAPI';

let DATA;

var config = {
    method: 'get',
    url: 'http://20.194.101.73:8000/api/results/',
    headers: { 
        'Authorization': 'Token 07e12559d52155ff82358aa3e797234b4e6ee938'
    }
};

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
        React.useEffect(async()=>{
            await axios(config)
            .then(function (response) {
                DATA = response.data;
                // console.log(DATA);
            })
            .catch(function (error) {
                console.log(error);
            });
        },[])

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