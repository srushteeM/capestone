import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
// import { styles } from "./css/login";
export default class LetsHealScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "REIKI", image:"https://img.icons8.com/color/70/000000/cottage.png"},
        {id:2, title: "YOGA", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
        {id:3, title: "MEDITATION", image:"https://img.icons8.com/color/70/000000/filled-like.png"} ,
        {id:4, title: "THERAPIST", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
       
      ]
    };
  }

  clickEventListener(item) {
    console.log(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Image
            source={require("../assets/logo-heal.png")}
            style={styles.imgLogo}
          />
          </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  imgLogo:{
    height: '30px',
    width: '120px',
    left: '50%',
    top:'10%',
    zIndex:'9',
    transform: 'translate(-50%, -15px)'
},
});   