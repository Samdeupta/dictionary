import * as React from 'react';
import { Text,View,StyleSheet,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from './database';

export default class App extends React.Component {
  constructor(){
    super();
    
    this.state={
      text:"",
      lexicalCategory:"",
      definition:""
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <Header
          backgroundColor = {'#123456'}
          centerComponent = {{text: 'Dictionary', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Calibri'}}}/>

          <Image
            style= {styles.imageIcon}
            source= {{uri:'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png'}}/>

        <TextInput
            style= {styles.inputBox}
            onChangeText= {(text)=>{
              this.setState({text:text});
            }} 
            value= {this.state.text}/>  

        <TouchableOpacity
          style= {styles.searchButton}
          onPress= {()=>{
          var word= this.state.text.toLowerCase().trim()
          dictionary[word]?(
          this.setState({lexicalCategory:dictionary[word].lexicalCategory}),
          this.setState({definition:dictionary[word].definition})
          ): 
          Alert.alert("Not in dictionary");
          }}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Show</Text>
          </TouchableOpacity> 

        <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'left',marginLeft:5,fontSize:18,marginTop:10}}>Word: {this.state.text}</Text>
        <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'left',marginLeft:5,fontSize:18}}>Lexical Category: {this.state.lexicalCategory}</Text>
        <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'left',marginLeft:5,fontSize:18}}>Definition: {this.state.definition}</Text>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputBox: { 
    width: '80%',
    alignSelf: 'center', 
    height: 40, textAlign: 'center', 
    borderWidth: 2, 
    outline: 'none' 
  },
  searchButton: {
    width: 100,
    height: 60,
    alignSelf: 'center',
    alignText: 'center',
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: '#123456',
    borderRadius: 15
  },
  imageIcon: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: 'center'
  }
})