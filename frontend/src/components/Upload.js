import * as React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Pressable, Platform, Image,Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Swiper from 'react-native-swiper';
import DateTimePicker from '@react-native-community/datetimepicker';

import RadioButton from './RadioButton';
import CatDetails from './CatDetails';

import Photo_Icon from '../media/photo_icon';
import Cancle_Icon from '../media/cancle_icon';
import axios from 'axios';
import API from './AxiosAPI';

const SizeData = [
    { value : 'XS', info : '대충 사이즈 어떤 정도인지', key : '1'},
    { value : 'S', info : '대충 사이즈 어떤 정도인지', key : '2'},
    { value : 'M', info : '대충 사이즈 어떤 정도인지', key : '3'},
    { value : 'L', info : '대충 사이즈 어떤 정도인지', key : '4'},
    { value : 'XL', info : '대충 사이즈 어떤 정도인지', key : '5'}
];

const CatDetailData1 = [
    {key : '1', value:'코트'},
    {key : '2', value:'레더자켓'},
    {key : '3', value:'패딩'},
    {key : '4', value:'데님자켓'},
    {key : '5', value:'니트/스웨터'},
    {key : '6', value:'맨투맨'},
    {key : '7', value:'셔츠 블라우스'},
    {key : '8', value:'티셔츠'},
    {key : '9', value:'원피스'}
];

const CatDetailData2 = [
    {key : '1', value:'코튼'},
    {key : '2', value:'슬랙스'},
    {key : '3', value:'데님'},
    {key : '4', value:'스웨트'},
    {key : '5', value:'레더'},
    {key : '6', value:'트레이닝'},
    {key : '7', value:'코듀로이'},
    {key : '8', value:'스커트'},
    {key : '9', value:'레깅스'}
]

const CatDetailData3 = [
    {key : '1', value:'스니커즈'},
    {key : '2', value:'부츠'},
    {key : '3', value:'샌들'},
    {key : '4', value:'쥬얼리'},
    {key : '5', value:'백팩'},
    {key : '6', value:'캐리어'},
    {key : '7', value:'레더백'},
    {key : '8', value:'양말/레그웨어'},
    {key : '9', value:'안경'}
]

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
    const [size, setsize] = React.useState(null);

    const [Cat,setCat] = React.useState(null);
    const [CatDetail, setCatDetail] = React.useState(null);

    const [Style1, setStyle1] = React.useState(false);      //스타일이름1
    const [Style2, setStyle2] = React.useState(false);      //스타일이름2
    const [Style3, setStyle3] = React.useState(false);      //스타일이름3
    const [Style4, setStyle4] = React.useState(false);      //스타일이름4
    const [Style5, setStyle5] = React.useState(false);      //스타일이름5
    const [Style6, setStyle6] = React.useState(false);      //스타일이름6
    const [Style7, setStyle7] = React.useState(false);      //스타일이름7
    const [Style8, setStyle8] = React.useState(false);      //스타일이름8
    const [Style9, setStyle9] = React.useState(false);      //스타일이름9
    const [Style10, setStyle10] = React.useState(false);    //스타일이름10

    const [date, setDate] = React.useState(new Date(Date.now()));
    const [show, setShow] = React.useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const Submit_Btn = ({onPress}) => { 
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={()=>checksubmit()} >
                    <Text style={styles.buttonText}>완료</Text>
                </TouchableOpacity>
            </View>
        );
    };

    let [selectedImage, setSelectedImage] = React.useState(null);
    let [Img_base64,setImg_base64] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('앨범에 대한 접근 권한이 필요합니다!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            base64: true,
        });

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
        setImg_base64({img:pickerResult});
    };
    
    function checksubmit(){

        let style = [];

        Style1 === true ? style.push('Style1') : false;
        Style2 === true ? style.push('Style2') : false;
        Style3 === true ? style.push('Style3') : false;
        Style4 === true ? style.push('Style4') : false;
        Style5 === true ? style.push('Style5') : false;
        Style6 === true ? style.push('Style6') : false;
        Style7 === true ? style.push('Style7') : false;
        Style8 === true ? style.push('Style8') : false;
        Style9 === true ? style.push('Style9') : false;
        Style10 === true ? style.push('Style10') : false;

        let selectdate = date.toDateString();

        let submit_data={
            image : Img_base64.img,
            goods_type:CatDetail,
            size:size,
            deadline:selectdate,
            style:style
        };

        API.post('/api/upload/',submit_data)
        .then((response)=>{
            console.log('성공');
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })

        console.log(submit_data);
    }

    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>사진 업로드</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.modal_center}>
                        <Text style={styles.center_text}>폐기 의류 사진을 등록해주세요!</Text>
                    <TouchableOpacity onPress={openImagePickerAsync} >
                            {(selectedImage === null) && <Photo_Icon />}
                            {(selectedImage !== null) && <Image source={{ uri: selectedImage.localUri }} style={{width:220,height:220,borderRadius:10}} />}
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
                    <Pressable style={Cat === 'Cat1' ? styles.selected_categories : styles.unselected_categories} onPress={()=>setCat('Cat1')}>
                        <Text style={Cat === 'Cat1' ? styles.selected_categories_text : styles.unselected_categories_text}>상의</Text>
                    </Pressable>
                    { (Cat==='Cat1') && <CatDetails data={CatDetailData1} onSelect={(value) => setCatDetail(value)} />}
                    <Pressable style={Cat === 'Cat2' ? styles.selected_categories : styles.unselected_categories} onPress={()=>setCat('Cat2')}>
                        <Text style={Cat === 'Cat2' ? styles.selected_categories_text : styles.unselected_categories_text}>하의</Text>
                    </Pressable>
                    { (Cat==='Cat2') && <CatDetails data={CatDetailData2} onSelect={(value) => setCatDetail(value)} />}
                    <Pressable style={Cat === 'Cat3' ? styles.selected_categories : styles.unselected_categories} onPress={()=>setCat('Cat3')}>
                        <Text style={Cat === 'Cat3' ? styles.selected_categories_text : styles.unselected_categories_text}>기타</Text>
                    </Pressable>
                    { (Cat==='Cat3') && <CatDetails data={CatDetailData3} onSelect={(value) => setCatDetail(value)} />}
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
                        <Text style={{fontSize:12,color:'#999999',marginTop:35,marginBottom:50}}>언제까지 물건을 전달하면 될까요?</Text>
                    <View style={{width:'100%',paddingRight:36,paddingLeft:36}}>
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display="inline"
                            onChange={onChange}
                            style={styles.datepicker}
                        />)}
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.navi}>원하는 스타일</Text>
                </View>
                <View style={styles.content}>
                    <Text style={{fontSize:12,color:'#999999',marginTop:35,marginBottom:50}}>최대 3개까지 선택 가능</Text>
                    <View style={{flexDirection:'row',flexWrap:'wrap', paddingLeft:31,paddingRight:31,justifyContent:'center'}}>
                        <Pressable style={Style1 === true ? styles.checked : styles.unchecked} onPress={()=>setStyle1(!Style1)} >
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
        alignItems:'center',
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
    },
    datepicker:{
        borderColor:'#04AA8C',
        backgroundColor:'#ffffff',
        borderWidth:1,
        borderRadius:20,
        height:320,
        marginTop:40,
        marginBottom:180
    },
    unselected_categories:{
        width:80,
        height:80,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginTop:22,
        marginBottom:22
    },
    selected_categories:{
        width:48,
        height:48,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#04AA8C',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom:20
    },
    unselected_categories_text:{
        fontSize:18,
        fontWeight:'600',
        color:'#111111'
    },
    selected_categories_text:{
        fontSize:14,
        fontWeight:'600',
        color:'#ffffff'
    }
})

export default Upload;