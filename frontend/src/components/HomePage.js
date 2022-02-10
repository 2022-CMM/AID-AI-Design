import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Rect } from 'react-native-svg';
import LogoSvg from '../media/logo2_svg';
import API from './AxiosAPI';

// const DATA = [
//     {
//         id: '1',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : 'https://comart.io/images/rn/react-native.png',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '2',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '3',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '4',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '5',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '6',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '7',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '8',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '9',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '10',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             category : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     },
//     {
//         id: '11',
//         uri: 'https://comart.io/images/rn/react-native.png',
//         nextpage:{
//             designer : '디자이너 이름',
//             categroy : '제품 분류',
//             size : 'L',
//             beforename : '변경 전 제품명',
//             aftername : '제품명',
//             before : '변경 전 제품사진',
//             after : 'https://comart.io/images/rn/react-native.png'
//         }
//     }
// ];

// 나중에 데이터에 어디로 네비게이트 해야하는지 추가.

let DATA;

var config = {
    method: 'get',
    url: 'http://20.194.101.73:8000/results/',
    headers: { 
        'Authorization': 'Token 07e12559d52155ff82358aa3e797234b4e6ee938'
    }
};

function HomePage({ navigation: { navigate } }) {

    React.useEffect(async()=>{
        axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            //let temp=JSON.stringify(response.data);
            //temp = temp.replace('"[','');
            //temp = temp.replace(']"','');
            //temp = temp.replace('\\','');
            //console.log(temp);
            //let obj = JSON.parse('[' + temp + ']');
            let obj = response.data;
            //console.log(obj);
            DATA = JSON.parse(obj);
            //console.log(DATA);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    //이 방식으로 데이터 전달 가능. json형태만
    function Item({item}){
        console.log(item);
        return(
            <View style={styles.listitem}>
                <TouchableOpacity >
                    <Image source={{uri:'http://20.194.101.73:8000/'+item.image}} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={{width:100,height:100,backgroundColor:'#dddddd'}} onPress={()=>console.log('http://20.194.101.73:8000/'+item.image)}>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoSvg />
            </View>
            <View style={styles.content}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item item={item.fields}/>}
                    keyExtractor={item => item.pk}
                    numColumns={2}
                />
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