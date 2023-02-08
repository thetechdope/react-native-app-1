import { StyleSheet } from 'react-native';
import { ROBOTO_MEDIUM } from '../../assets/fonts';
export default StyleSheet.create({
    img: { alignSelf: 'center', marginTop: '20%', marginBottom: '5%' },
    txtHeader: {
        color: '#000000',
        fontSize: 22,
        textAlign: 'center',
        fontFamily:ROBOTO_MEDIUM,
        marginTop:'6%'
    },
    txt: {
        color: '#797979',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 24,
        margin:'6%'
    },

    resend: { 
        color: '#68BF90', 
        fontFamily:ROBOTO_MEDIUM
        
         },
         resendstyle:{
            flexDirection:'row',
            justifyContent:'center',
            marginTop:'10%'


         },
         otptxt:{
            width:'80%',
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center'
         },
         icons:{
            margin:"10%"
         }
});
