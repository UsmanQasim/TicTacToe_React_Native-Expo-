import React, { Component } from 'react'
import {Text, View, Alert, TouchableOpacity, BackHandler } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import App2 from './App2'

class HomeScreen extends React.Component {
    exit_function=()=>{
        BackHandler.exitApp();
    }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center',alignItems:'center',}}>
                <Text
                    style={{ fontSize: 60, fontWeight: 'bold', color:"#643B7A"}}
                >
                    Welcome
                </Text>
                <Text style={{ fontSize: 60, fontWeight: 'bold',marginBottom: 100, }}>
                    Tic Tac Toe
                </Text>
                <View>
                    <TouchableOpacity style={{ margin: 20, flexDirection: "row", padding: 20, backgroundColor: "#E74292", width: 200, borderRadius: 20 }}
                        onPress={() => this.props.navigation.navigate('Profile')}>

                        <Text style={{ color: "#2B2B52", fontSize: 20 }}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 20, flexDirection: "row", padding: 20, backgroundColor: "#E74292", width: 200, borderRadius: 20 }}
                        onPress={this.exit_function}>

                        <Text style={{ color: "#2B2B52", fontSize: 20 }}>Quit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <App2/>  
    );  
    }  
}

const AppNavigator = createSwitchNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  

const AppContainer = createAppContainer(AppNavigator); 



export class App extends Component {
    render() {
        return <AppContainer />;
        
    }
}





export default App