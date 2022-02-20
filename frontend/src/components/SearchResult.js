import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import {useAsync} from 'react-async';

function SearchResult({ route, navigation: { navigate } }) {

    const getData = async () => {
        let res;
        await axios.post('http://20.194.101.73:8000/api/search/', {
                searchKey:route.params.keyword
            }, {
                headers: { 
                    'Authorization': 'Token 4e023526e6c3e9d2627fdefb7d6e790abb5966d5',
                }
            }).then(response => {
                console.log(response.data);
                res = response.data;
            }).catch(error=>{
                console.log(error);
            });
        return res;
    }

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
                    <Text style={styles.navi}>{route.params.keyword}</Text>
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
    navi:{
        fontSize:20,
        marginBottom:18,
        marginLeft:30
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

export default SearchResult;