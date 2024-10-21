import { Text } from "react-native"; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { useRef } from "react";
const OnBoarding= () => {
    const swiperRef= useRef<Swiper>(null);
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
            <Swiper  ref={swiperRef}
            loop={false}>
dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]"> </View>}
            </Swiper>
            </SafeAreaView>
        
       
    );


};
export default OnBoarding;