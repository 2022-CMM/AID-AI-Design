import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity,Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchBar_Icon from '../media/searchbar_icon';

function Designers({data}){
    return(
        <View>
            {data.map((item) => {
                uri = 'http://20.194.101.73:8000' + item.profile_image;
                return (
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',{item})}><Image source={{uri:uri}} style={styles.designer} /></TouchableOpacity>
                );
            })}
        </View>
    )
}

function SearchPage({ navigation: { navigate } }) {

    let DATA=[];
    let DATA2=[];

    React.useEffect(async()=>{
        let token;
        try {
            token = 'Token ' + await AsyncStorage.getItem('@userToken');
            // console.log(token);
        } catch(e) {
            console.log(e);
        }

        var config = {
            method: 'get',
            url: 'http://20.194.101.73:8000/api/designer/',
            headers: { 
                'Authorization': token
            }
        };

        axios(config)
            .then(function (response) {
                DATA = response.data;
                // console.log(DATA);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        var config2 = {
            method: 'get',
            url: 'http://20.194.101.73:8000/api/results/',
            headers: { 
                'Authorization': token
            }
        };

        axios(config2)
            .then(function (response) {
                DATA2 = response.data;
                // console.log(DATA2);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);

    const [SearchWord, setSearchWord] = React.useState(null);

    return(
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <View style={styles.inputbar}>
                <SearchBar_Icon />
                <TextInput style={styles.input} placeholder='검색어를 입력해주세요' placeholderTextColor={'#666666'} keyboardType={"web-search"} onChangeText={(SearchWord) => setSearchWord(SearchWord)} returnKeyType={"search"} onSubmitEditing={()=>navigate('SearchResult',{keyword:SearchWord})} />
                </View>
            </View>
            <View style={styles.recommand_word}>
                <Text style={styles.label1}>추천 검색어</Text>
                <ScrollView style={styles.scroll}>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'코트'})} >코트</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'반팔'})} >반팔</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'원피스'})} >원피스</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'쇼츠'})} >쇼츠</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'드레스'})} >드레스</Text></TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'민소매'})} >민소매</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'블레이져'})} >블레이져</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'맨투맨'})} >맨투맨</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.recommand_idea}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.label2}>추천 아이디어</Text>
                </View>
                <View style={{alignItems:'flex-end', marginBottom:10}}>
                    <TouchableOpacity><Text style={styles.more}>더 보기</Text></TouchableOpacity>
                    {/* onpress로 페이징 하나 더 */}
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece',DATA2[0])}><Image source={{uri:'http://20.194.101.73:8000/media/upload_image/10after.jpg'}} style={styles.idea}/></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece',DATA2[1])}><Image source={{uri:'http://20.194.101.73:8000/media/upload_image/11after.jpg'}} style={styles.idea}/></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece',DATA2[2])}><Image source={{uri:'http://20.194.101.73:8000/media/upload_image/12after.jpg'}} style={styles.idea}/></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece',DATA2[3])}><Image source={{uri:'http://20.194.101.73:8000/media/upload_image/14after.jpg'}} style={styles.idea}/></TouchableOpacity>
                </View>
            </View>
            <View style={styles.recommand_designer}>
                <View style={{alignItems:'center',marginTop:8}}>
                    <Text style={styles.label2}>추천 디자이너</Text>
                </View>
                <View style={{alignItems:'flex-end', marginBottom:10}}>
                    <TouchableOpacity><Text style={styles.more}>더 보기</Text></TouchableOpacity>
                    {/* onpress로 페이징 하나 더 */}
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[0])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%882.jpg'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[1])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%881.jpg'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[2])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%884.jpg'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[3])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%883.jpg'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[4])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[5])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[6])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[7])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[8])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[9])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[10])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer',DATA[11])}><Image source={{uri:'http://20.194.101.73:8000/media/profile_image/free-icon-dog-616408_Qr8jzbF.png'}} style={styles.designer} /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    searchbar:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    inputbar:{
        width:327,
        height:60,
        backgroundColor:'#ffffff',
        borderRadius:60,
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft:22,
        paddingRight:22,
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 12,
        },
        shadowOpacity: 0.08,
        shadowRadius: 10
    },
    input:{
        fontSize:16,
        width:'84%',
        marginLeft:15
    },
    recommand_word:{
        flex:1,
        paddingLeft:24,
        paddingRight:24
    },
    label1:{
        marginTop:15,
        color:'#C4C4C4',
        textDecorationLine: 'underline',
        fontSize:14
    },
    scroll:{
        marginTop:10,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    wordsoutter:{
        paddingLeft:14,
        paddingRight:14,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#ffffff',
        backgroundColor:'#ECFFFC',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 12,
        },
        shadowOpacity: 0.02,
        shadowRadius: 12,
        marginRight:6,
        marginBottom:6,
        flexDirection:'row'
    },
    wordsinner:{
        marginTop:4,
        marginBottom:4
    },
    recommand_idea:{
        flex:2.25,
        paddingLeft:24,
        paddingRight:24
    },
    idea:{
        backgroundColor:'#E7E7E7',
        width:158,
        height:90,
        borderRadius:20,
        marginBottom:10
    },
    label2:{
        fontSize:16,
        color:'#666666',
        marginTop:8
    },
    recommand_designer:{
        flex:2.8,
        paddingLeft:24,
        paddingRight:24
    },
    designer:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#C4C4C4',
        marginRight:6,
        marginBottom:18
    },
    more:{
        fontSize:12,
        color:'#CACACA',
        textDecorationLine: 'underline',
    }
})

export default SearchPage;