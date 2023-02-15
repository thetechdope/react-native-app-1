import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const Loginapi = async (customerinfo) => {

    try {
        let response = await axios.post("https://api-8p1l.onrender.com/api/customers/login", customerinfo)
        // .then((response) => {
        //     console.log("hello", response.status)
        //     const statusCode = response.status;


        // }).catch((err) => {
        //     console.log("error=====",err)
        //     return ({ status: false })
        // });
        if (response.status == 200) {
            storeUser(response.data)
            // console.log("respone====>", response)
            return { status: true, data: response.data };
        }else{
            return { status: false };
        }
    } catch (err) {
        // console.log(err);
        return { status: false };
    }

};

const storeUser = async (userdetails) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(userdetails));
    } catch (error) {
        console.log(error);
    }
};
export default Loginapi;