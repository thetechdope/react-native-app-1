import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';





  const Commonapi =(customerinfo) => {
    // console.log("ehtesham==>",customerinfo)
    // data=  0
    //     {
    //         firstName: "Ehtesham",
    //         lastName: "Idrishi",
    //         email: "ehtesham@gmail",
    //         password: "Ehtesham@12",
    //         phoneNumber: "+9188888888888",

    //     } 
   axios.post("http://34.212.54.70:3000/api/customers/signup", customerinfo) 
            .then((response) => {
               console.log("hello",response.data)
            //    response.data
            }). catch((err)=>{
                console.log('err=>',err)
            });

    };
export default Commonapi;