import * as React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import Photo_Icon from '../media/photo_icon';
import Cancle_Icon from '../media/cancle_icon';

// function Upload({onPress}){
//     const [modalVisible, setModalVisible] = React.useState(false);
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.navi}>업로드</Text>
//             </View>
//             <View style={styles.content}>
//                 <Modal   
//                     animationType="slide"
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => { setModalVisible(!modalVisible); }}>
//                     <View style={{backgroundColor:'#444444',width:'100%',height:'100%',position:'absolute',opacity:0.8}}></View>
//                         <View style={styles.setcenter}>
//                             <View style={styles.modal}>
//                                 <View style={styles.modal_header}><View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={styles.header_text}>사진 업로드</Text><TouchableOpacity style={{marginTop:42,marginRight:31}} onPress={() => setModalVisible(!modalVisible)}><Cancle_Icon /></TouchableOpacity></View>
//                                 <View style={styles.line}></View></View>
//                                 <View style={styles.modal_center}>
//                                     <Text style={styles.center_text}>폐기 의류 사진을 등록해주세요!</Text>
//                                     <TouchableOpacity onPress={onPress}>
//                                         <Photo_Icon style={styles.photo_icon} />
//                                     </TouchableOpacity>
//                                     <Text style={styles.center_text}>여기를 눌러 추가</Text>
//                                     </View>
//                                 <View style={styles.modal_footer}><Text>안녕하세요!</Text></View>
//                             </View>
//                         </View>
                    
//                 </Modal>
//                 <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
//                     <Text>업로드</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

function Upload({onPress}){
    const [PageState, setPageState] = React.useState('업로드');
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>사진 업로드</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.modal_center}>
                        <Text style={styles.center_text}>폐기 의류 사진을 등록해주세요!</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Photo_Icon style={styles.photo_icon} />
                        </TouchableOpacity>
                        <Text style={styles.center_text}>여기를 눌러 추가</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>제품 분류</Text>
                </View>
                <View style={styles.content}>
                    <Text>djdsadfa</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>사이즈</Text>
                </View>
                <View style={styles.content}>
                    <Text>djdsadfa</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>수령 기한</Text>
                </View>
                <View style={styles.content}>
                    <Text>djdsadfa</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>원하는 스타일</Text>
                </View>
                <View style={styles.content}>
                    <Text>djdsadfa</Text>
                </View>
            </View>
        </Swiper>
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
        justifyContent:'center',
        alignItems:'center'
    },
    setcenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:24
    },
    modal:{
        width:'100%',
        height:600,
        backgroundColor:'#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius:32
    },
    modal_header:{
        flex:2.6,
        width:'100%'
    },
    header_text:{
        fontSize:24,
        marginTop:42,
        marginLeft:31,
        fontWeight:'500'
    },
    modal_center:{
        flex:16.4,
        justifyContent:'center',
        alignItems:'center'
    },
    center_text:{
        fontSize:14,
        color:'#888888',
        margin:12
    },
    modal_footer:{
        flex:1,
        alignItems:'center'
    },
    line:{
        width:265, 
        borderColor:'#CACACA' ,
        borderTopWidth:1, 
        flex:1,
        marginTop:12,
        marginLeft:31   //임시
    },
})

export default Upload;