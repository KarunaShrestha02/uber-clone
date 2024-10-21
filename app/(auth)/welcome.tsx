import { Text } from "react-native"; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
const OnBoarding= () => {
    return(
        <SafeAreaView className="flex h-full items-center justfy-between bg-white">
            <TouchableOpacity 
            onPress={()=> {
                router.replace("/(auth)/sign-up");
            
            }}
            className="w-full flex justify-end items-end p-5"
            >
               <Text className="text-black text-md font-JakartaBold">Skip</Text> 
            </TouchableOpacity>
            </SafeAreaView>
        
        </SafeAreaView>
    );


};
export default OnBoarding;