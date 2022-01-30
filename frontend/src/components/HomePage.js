import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import LogoSvg from '../media/logo2_svg';

const DATA = [];    //안에 json형태로 삽입. id,uri 넣어야함 일단.

const Item = ({ imguri }) => (
    <View style={styles.item}>
        <Image source={{uri:{imguri}}} style={styles.img} />
    </View>
);
//img, item 스타일 안만들었음.

function HomePage() {

    const renderItem = ({ item }) => (
        <Item imguri={item.uri} />
);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoSvg />
            </View>
            <View style={styles.content}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
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
        alignItems: 'center'
    }
})

export default HomePage;