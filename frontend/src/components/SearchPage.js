import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import SearchBar_Icon from '../media/searchbar_icon';

function SearchPage({ navigation: { navigate } }) {
    const [SearchWord, setSearchWord] = React.useState(null);
    return (
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
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다라마바'})} >가나다라마바</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다'})} >가나다</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다라'})} >가나다라</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다'})} >가나다</Text></TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다'})} >가나다</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다라'})} >가나다라</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다'})} >가나다</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.wordsoutter}><Text style={styles.wordsinner} onPress={()=>navigate('SearchResult',{keyword:'가나다라마'})} >가나다라마</Text></TouchableOpacity>
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
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece')}><View style={styles.idea}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece')}><View style={styles.idea}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece')}><View style={styles.idea}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate('Piece')}><View style={styles.idea}></View></TouchableOpacity>
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
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('Designer')}><View style={styles.designer}></View></TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
        backgroundColor:'#FEE5FF',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 12,
        },
        shadowOpacity: 0.06,
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