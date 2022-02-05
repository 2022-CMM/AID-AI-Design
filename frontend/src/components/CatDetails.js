import React, { useState } from 'react';
import { View, Text, Pressable,StyleSheet } from 'react-native';

export default function CatDetails({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
    };
    return (
    <View style={{flexDirection:'row',flexWrap:'wrap',width:270,justifyContent:'center',alignItems:'center'}}>
        {data.map((item) => {
            return (
                <Pressable key={item.key} style={item.value === userOption ? styles.selected : styles.unselected} onPress={() => selectHandler(item.value)}>
                    <Text style={item.value === userOption ? styles.selected_text : styles.unselected_text}> {item.value}</Text>
                </Pressable>
            );
        })}
    </View>
    );
}

const styles = StyleSheet.create({
    selected:{
        width:77,
        height:45,
        borderRadius:14,
        backgroundColor:'#04AA8C',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom:8,
        marginRight:12
    },
    unselected:{
        width:77,
        height:45,
        borderRadius:14,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom:8,
        marginRight:12
    },
    selected_text:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'600'
    },
    unselected_text:{
        fontSize:14,
        color:'#000000',
        fontWeight:'600'
    }
});