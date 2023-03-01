import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Commonapi = async customerinfo => {
  try {
    let response = await axios.post(
      'http://34.212.54.70:3000/api/customers/signup',
      customerinfo,
    );
    console.log('response==>', response)
    if (response.status == 200) {
      storeUser(response.data);
      console.log('respone====>', response);
      return {status: true, data: response.data};
    } else {
      return {status: false};
    }
  } catch (err) {
    console.log(err);
  }
};
export default Commonapi;
