import {StyleSheet, Dimensions} from 'react-native';
import {ROBOTO_BLACK, ROBOTO_LIGHT, ROBOTO_MEDIUM} from '../../assets/fonts';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: '22%',
    width: '100%',
    backgroundColor: '#7E50EE',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%',
    width: width * 0.72,
  },
  heading: {
    fontSize: 25,
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  subhead: {
    backgroundColor: 'white',
    position: 'absolute',
    padding: 16,
    width: '90%',
    alignSelf: 'center',
    top: 146,
    borderRadius: 20,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input:{
    justifyContent: 'center',
    width: '90%',
    fontWeight: '600',
    fontSize: 16,
  }, 
  recently:{
    fontFamily: ROBOTO_LIGHT,
    fontSize: 20,
    marginTop: '15%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    height:'40%',
    width:'90%',
    borderRadius: 20,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    alignSelf:'center',
    justifyContent:'center', 
    marginTop:'70%'
  },
  modalText: {
   fontFamily:ROBOTO_MEDIUM,
   fontSize:25, 
   margin:10, alignSelf:'center'
  },
  modalTex:{    
    fontSize:ROBOTO_LIGHT, 
    fontSize:15,
     justifyContent:'center',  
     alignItems:'center',   
     alignSelf:'center'        
    
  }, 
  img:{
    height:150,
    width:150, 
    justifyContent:'center',
     alignSelf:'center'
   }, 
});
