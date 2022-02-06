import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import LogoSvg from '../media/logo2_svg';

const DATA = [
    {
        id: '1',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : 'https://comart.io/images/rn/react-native.png',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '2',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '3',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '4',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '5',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '6',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '7',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '8',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '9',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '10',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            category : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    },
    {
        id: '11',
        uri: 'https://comart.io/images/rn/react-native.png',
        nextpage:{
            designer : '디자이너 이름',
            categroy : '제품 분류',
            size : 'L',
            beforename : '변경 전 제품명',
            aftername : '제품명',
            before : '변경 전 제품사진',
            after : 'https://comart.io/images/rn/react-native.png'
        }
    }
];

// 나중에 데이터에 어디로 네비게이트 해야하는지 추가.



function HomePage({ navigation: { navigate } }) {

    let props = {
        userdata:12
    }
    //이 방식으로 데이터 전달 가능. json형태만
    function Item({item}){
        return(
            <View style={styles.listitem}>
                <TouchableOpacity onPress={() => navigate('Piece',item.nextpage)}>
                    <Image source={{uri:item.uri}} style={styles.img} />
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
                    renderItem={({ item }) => <Item item={item}/>}
                    keyExtractor={item => item.id}
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