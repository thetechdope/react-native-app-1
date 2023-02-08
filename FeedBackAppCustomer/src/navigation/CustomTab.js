import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomTab = (props) => {
    // console.log("hello  ==>", props)



    return (
        <View style={{
            flexDirection: 'row',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                props.state.routes.map((item, i) => {
                    return <TouchableOpacity
                        style={{
                            height: "100%",
                            width: '33%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => { props.navigation.navigate(item.name) }}
                    >
                        <FontAwesome name={i === 0 ? "home" : i === 1 ? "rocket" : "home"} size={30} />

                        {/* {i === 0 ?
                            <FontAwesome name="home" size={30} />
                            : i === 1 ?
                            <FontAwesome name="rocket" size={30} />
                            :
                            <FontAwesome name="rocket" size={30} />
                        } */}

                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                })




            }
        </View>
    )
}

export default CustomTab

const styles = StyleSheet.create({})






// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const CustomTab = (props) => {
//     console.log("hello binood ==>", props)

//     const tabNames = [
//         { name: "Home", iconN: ".//src/image" },
//         { name: "Profile", iconN: ".//src/image" },
//         { name: "Settings", iconN: ".//src/image" },
//     ]

//     return (
//         <View style={{
//             flexDirection: 'row',
//             height: 70,
//             justifyContent: 'center',
//             alignItems: 'center'
//         }}>
//             {
//                 tabNames.map((item, i) => {
//                     return <TouchableOpacity
//                         style={{
//                             height: "100%",
//                             width: '33%',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}
//                         onPress={() => { props.navigation.navigate(item.name) }}
//                     >

//                         <Text>{item.name}</Text>
//                     </TouchableOpacity>
//                 })




//             }
//         </View>
//     )
// }

// export default CustomTab

// const styles = StyleSheet.create({})