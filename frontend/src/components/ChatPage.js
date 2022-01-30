import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ChatPage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>채팅</Text>
            </View>
            <View style={styles.content}>
                <Text>good</Text>
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
    navi:{
        fontSize:20,
        marginBottom:18,
        marginLeft:30
    },
    content:{
        flex:6.6
    }
})

export default ChatPage;