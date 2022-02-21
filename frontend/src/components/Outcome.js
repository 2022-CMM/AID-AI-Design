import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function OutCome({ navigation: { navigate }, route }) {
    let uri;
    getImg = async() =>{
        try{
            uri = await AsyncStorage.getItem('@selectImg');
        }catch(e){
            console.log(e);
        }
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>추천 결과</Text>
            </View>
            <View style={styles.content}>
                    <View style={styles.beforeView}>
                        <Text style={styles.label1}>upcycling 될 제품</Text>
                        {/* <View style={styles.before}></View> */}
                        <Image source={{uri:route.params.img}} style={styles.before} />
                    </View>
                    <View style={styles.afterView}>
                        <Text style={styles.label1}>AI 추천 디자인</Text>
                        <Image source={{uri:'http://20.194.101.73:8000/media/results/result.png'}} style={styles.after} />
                    </View>
                    <View style={styles.cats}>
                        <View>
                            <Text style={styles.label2}>제품군 추천1</Text>
                            <View style={styles.cat}>
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/25after.jpg'}} style={styles.catImg} />
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/24after.jpg'}} style={styles.catImg} />
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/23after.jpg'}} style={styles.catImg} />
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/22after.jpg'}} style={styles.catImg} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label2}>제품군 추천2</Text>
                            <View style={styles.cat}>
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/21after.jpg'}} style={styles.catImg} />
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/20after.jpg'}} style={styles.catImg} />
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/19after.jpg'}} style={styles.catImg} />
                                <Image source={{uri:'http://20.194.101.73:8000/media/upload_image/18after.jpg'}} style={styles.catImg} />
                            </View>
                        </View>
                    </View>
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
        flex:6.74,
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24
    },
    beforeView:{
        flex:1,
        width:327,
        borderBottomWidth:1,
        borderColor:'#CACACA',
        alignItems:'center'
    },
    label1:{
        fontSize:16,
        marginTop:10,
        marginBottom:8
    },
    before:{
        width:130,
        height:130,
        backgroundColor:'#dddddd'
    },
    afterView:{
        flex:1.04,
        alignItems:'center',
    },
    after:{
        width:240,
        height:130,
        backgroundColor:'#dddddd'
    }, 
    cats:{
        flex:1.53,
        width:'100%'
    },
    cat:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    catImg:{
        width:69,
        height:69,
        backgroundColor:'#dddddd',
        borderRadius:15
    },
    label2:{
        fontSize:16,
        fontWeight:'600',
        marginTop:15,
        marginBottom:12
    }
})

export default OutCome;