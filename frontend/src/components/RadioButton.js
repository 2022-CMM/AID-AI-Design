import React, { useState } from 'react';
import { View, Text, Pressable,StyleSheet } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
    };
    return (
    <View>
        {data.map((item) => {
            return (
                <Pressable key={item.key} style={item.value === userOption ? styles.selected : styles.unselected} onPress={() => selectHandler(item.value)}>
                    <View style={{height:32, width:72, borderRightWidth:1, borderColor:'#04AA8C',justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.size}> {item.value}</Text>
                    </View>
                    <View style={{width:193,alignItems:'center'}}>
                        <Text style={styles.info}>{item.info}</Text>
                    </View>
                </Pressable>
            );
        })}
    </View>
    );
}

const styles = StyleSheet.create({
    selected:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        width:265,
        height:60,
        marginBottom:16,
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        backgroundColor:'#CBEEE8'
    },
    unselected:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        width:265,
        height:60,
        marginBottom:16,
        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
    },
    size:{
        fontSize:16,
        fontWeight:'600',
    },
    info:{
        fontSize:14,
        width:140,
        textAlign:'center',
    }
});