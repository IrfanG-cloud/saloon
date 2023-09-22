import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { categoryData } from '../constants/index'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{ FadeInDown} from 'react-native-reanimated';

export default function categories(activeCategory, setActivecategory) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            categoryData.map((cat, index)=>{
              let isActive = cat.name==activeCategory;
              let activeButtonClass = isActive? 'bg-amber-400': 'bg-black/10';
                return (
                    <TouchableOpacity 
                    key={index}
                    onPress={()=> setActivecategory(cat.name)}
                    className="flex item-center space-y-1"
                    >
                        <View className={"rounded-full p-[6px]"+activeButtonClass}>
                            <Image
                            source={{url: cat.image}}
                            style={{width:hp(6), height: hp(6)}}
                            className="rounded-full"
                            />
                        </View>
                        <Text className="text-neutral-600" style={{fontSize: hp(1.6)}}>
                            {cat.name}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </Animated.View>
  )
}