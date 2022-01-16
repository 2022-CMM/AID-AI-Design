import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';

export class ClassA extends Component {
    render() {
        return (
            <Text>
                Hello From Class
                {this.props.email}
            </Text>
        )
    }
}

export default ClassA