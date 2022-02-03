import * as React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import RadioButton from './RadioButton';

import Photo_Icon from '../media/photo_icon';
import Cancle_Icon from '../media/cancle_icon';

const SizeData = [
    { value : 'XS', info : '대충 사이즈 어떤 정도인지'},
    { value : 'S', info : '대충 사이즈 어떤 정도인지'},
    { value : 'M', info : '대충 사이즈 어떤 정도인지'},
    { value : 'L', info : '대충 사이즈 어떤 정도인지'},
    { value : 'XL', info : '대충 사이즈 어떤 정도인지'}
];

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

const Submit_Btn = ({onPress}) => { 
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress} >
                <Text style={styles.buttonText}>완료</Text>
            </TouchableOpacity>
        </View>
    );
};

function Upload({onPress}){
    const [PageState, setPageState] = React.useState('업로드');
    const [size, setsize] = React.useState(null);
    const [Style1, setStyle1] = React.useState(false);
    const [Style2, setStyle2] = React.useState(false);
    const [Style3, setStyle3] = React.useState(false);
    const [Style4, setStyle4] = React.useState(false);
    const [Style5, setStyle5] = React.useState(false);
    const [Style6, setStyle6] = React.useState(false);
    const [Style7, setStyle7] = React.useState(false);
    const [Style8, setStyle8] = React.useState(false);
    const [Style9, setStyle9] = React.useState(false);
    const [Style10, setStyle10] = React.useState(false);

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
                    <View style={{width:80,height:80,backgroundColor:'#C4C4C4',marginBottom:25}}></View>
                    <RadioButton data={SizeData} onSelect={(value) => setsize(value)} />
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
                    <Text style={{fontSize:12,color:'#999999',marginTop:35,marginBottom:50}}>최대 3개까지 선택 가능</Text>
                    <View style={{flexDirection:'row',flexWrap:'wrap', paddingLeft:31,paddingRight:31,justifyContent:'center'}}>
                        <Pressable style={Style1 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle1(!Style1)}>
                            <Text style={Style1 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름1
                            </Text>
                        </Pressable>
                        <Pressable style={Style2 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle2(!Style2)}>
                            <Text style={Style2 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름2
                            </Text>
                        </Pressable>
                        <Pressable style={Style3 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle3(!Style3)}>
                            <Text style={Style3 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름3
                            </Text>
                        </Pressable>
                        <Pressable style={Style4 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle4(!Style4)}>
                            <Text style={Style4 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름4
                            </Text>
                        </Pressable>
                        <Pressable style={Style5 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle5(!Style5)}>
                            <Text style={Style5 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름5
                            </Text>
                        </Pressable>
                        <Pressable style={Style6 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle6(!Style6)}>
                            <Text style={Style6 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름6
                            </Text>
                        </Pressable>
                        <Pressable style={Style7 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle7(!Style7)}>
                            <Text style={Style7 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름7
                            </Text>
                        </Pressable>
                        <Pressable style={Style8 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle8(!Style8)}>
                            <Text style={Style8 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름8
                            </Text>
                        </Pressable>
                        <Pressable style={Style9 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle9(!Style9)}>
                            <Text style={Style9 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름9
                            </Text>
                        </Pressable>
                        <Pressable style={Style10 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle10(!Style10)}>
                            <Text style={Style10 === true ? styles.checkedtext : styles.uncheckedtext}>
                                스타일 이름10
                            </Text>
                        </Pressable>
                    </View>
                    <Submit_Btn />
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
    checked:{
        backgroundColor:'#04AA8C',
        width:125,
        height:60,
        marginRight:15,
        marginBottom:18,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16
    },
    unchecked:{
        backgroundColor:'#ffffff',
        width:125,
        height:60,
        marginRight:15,
        marginBottom:18,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    checkedtext:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'700'
    },
    uncheckedtext:{
        fontSize:14,
        color:'#000000'
    },
    button:{
        width:315,
        height:54,
        backgroundColor:'#04AA8C',
        borderRadius:18,
        justifyContent: "center",
        alignItems: "center",
        marginTop:34
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default Upload;