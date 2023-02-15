import axios from "axios";

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
        axios.post("https://api-8p1l.onrender.com/api/customers/", customerinfo) 
            .then((response) => {
               console.log("hello",response.data)
            }). catch((err)=>{
                console.log(err)
            });
    };
export default Commonapi;