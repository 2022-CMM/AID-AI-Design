import React, {useState} from 'react'
import {StyleSheet, Test, View, Button, FlatList} from 'react-native';
import {Card} from 'react-native-paper'

const mydata = [
    {id:1, title:"Frist Title1", description:"First Description1"},
    {id:2, title:"Frist Title2", description:"First Description2"},
    {id:3, title:"Frist Title3", description:"First Description3"},
]

const renderData = (item) => {
    <Card style = {styles.cardStyle}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
    </Card>

}
function Home() {

    return (
        <Card style = {styles.cardStyle}>
            <FlatList
            data = {mydata}
            renderItem = {(item) => {
                console.log(item)
            }}
            keyExtractor={item => item.id}


        </Card>
    )
}