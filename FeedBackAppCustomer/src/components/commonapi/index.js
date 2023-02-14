import axios from "axios";

  const Commonapi =() => {
    data=  [   
        {
            firstName: "Ehtesham",
            lastName: "Idrishi",
            email: "Kaustubh@test.com",
            password: "kaustubh@12",
            phoneNumber: "+9188888888888"
        }  ]
        axios.post("https://api-8p1l.onrender.com/api/customers/", data) 
            .then((response) => {
               console.log("hello",response)
            }). catch((err)=>{
                console.log(err)
            });
    };
export default Commonapi;