import { View, Text, Image } from 'react-native' 
import React from 'react' 
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return(
     <Image
      source ={icon}
      resizeMode="contain"
      className="w-6 h-6"
      tintColor={color}
      
     />
    )
}
// const TabsLayout = () => {
//    return(
//     <View>
//         <Image
//         source={}
//         />
//     </View>
//    )

// }
const TabLayout  = () =>{
    return (
        <>
        <Tabs>
            <Tabs.Screen
             name="home" 
             options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                    />
                )
             }}
            />  
              <Tabs.Screen
             name="library" 
             options={{
                title:'Library',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.library}
                    color={color}
                    name="Library"
                    focused={focused}
                    />
                )
             }}
            />  
             <Tabs.Screen
             name="ringing" 
             options={{
                title:'Notification',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.ringing}
                    color={color}
                    name="ringing"
                    focused={focused}
                    />
                )
             }}
            />  
             <Tabs.Screen
             name="search" 
             options={{
                title:'Search',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.search}
                    color={color}
                    name="search"
                    focused={focused}
                    />
                )
             }}
            />  
        </Tabs>
        </>
    )
}
export default TabLayout