import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import API from './AxiosAPI';

let DATA;

function SearchResult({ route, navigation: { navigate } }) {

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

    function ResultView(){
        React.useEffect(async()=>{
            await axios.post('http://20.194.101.73:8000/api/search/', {
                searchKey:route.params.keyword
            }, {
                headers: { 
                    'Authorization': 'Token 07e12559d52155ff82358aa3e797234b4e6ee938',
                }
            }).then(response => {
                // console.log(response.data);
                DATA = response.data;
            }).catch(error=>{
                console.log(error);
            });
        },[])

        if(Array.isArray(DATA)&&DATA.length===0){
            console.log(1);
            return(
                <View style={{backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{fontSize:16}}>찾으시는 검색어에 대한 결과가 없습니다.</Text>
                </View>
            )
        }else{
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
    }


    return(
        <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>{route.params.keyword}</Text>
                </View>
                <View style={styles.content}>
                    <ResultView />
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