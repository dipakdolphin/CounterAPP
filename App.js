import React, {Component} from 'react';
import {Button, StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default class App extends Component{
  state={
    counter: 0
  }
  increaseCounter=()=>{
    this.setState({counter:this.state.counter+1})

  }
  decreaseCounter = ()=>{
    this.setState({counter:this.state.counter-1})
  }

  render() {
    return (
      <View style ={styles.container}>
      <Text style={{fontSize:50}}>My Counter</Text>
      <View style ={{padding:20}}>
        <Button title ='Increase' onPress={()=>this.increaseCounter()} />
        </View> 
        <Button title = 'Decrease' onPress ={()=>this.decreaseCounter()} />
        <Text style={{padding:10,fontSize:50}}>{this.state.counter}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
