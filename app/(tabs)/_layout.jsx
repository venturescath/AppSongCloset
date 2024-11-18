import { View, Text, Image } from 'react-native' 
import React from 'react' 
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return(
<<<<<<< HEAD
     <Image
      source ={icon}
      resizeMode="contain"
      className="w-6 h-6"
      tintColor={color}
      
     />
=======
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
            source={icon}
            resizeMode="contain" // Use resizeMode instead of resizeMethod
            style={{ width: 24, height: 24, tintColor: color }} // Adjust size here
        />
    </View>
>>>>>>> 488ecd1 (First Commit)
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
<<<<<<< HEAD
            <Tabs.Screen
=======
        <Tabs.Screen
>>>>>>> 488ecd1 (First Commit)
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
<<<<<<< HEAD
            />  
              <Tabs.Screen
             name="library" 
             options={{
                title:'Library',
=======
            />
            <Tabs.Screen
             name="library" 
             options={{
                title:'library',
>>>>>>> 488ecd1 (First Commit)
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.library}
                    color={color}
<<<<<<< HEAD
                    name="Library"
=======
                    name="library"
>>>>>>> 488ecd1 (First Commit)
                    focused={focused}
                    />
                )
             }}
<<<<<<< HEAD
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
=======
            />
            <Tabs.Screen
             name="search" 
             options={{
                title:'search',
>>>>>>> 488ecd1 (First Commit)
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
<<<<<<< HEAD
            />  
=======
            />
            <Tabs.Screen
             name="ringing" 
             options={{
                title:'notification',
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
             
>>>>>>> 488ecd1 (First Commit)
        </Tabs>
        </>
    )
}
<<<<<<< HEAD
export default TabLayout
=======
export default TabLayout



>>>>>>> 488ecd1 (First Commit)
