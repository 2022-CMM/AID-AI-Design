 import React from 'react'
 import {StyleSheet, Text, View} from 'react-native';
 import {Card} from 'react-native-paper'


 function Home(props){
     return(
         <Card style = {styles.cardStyle}>
         <Text>
            Hello Frome Home
            {props.name}
         </Text>
         </Card>
     )
 }