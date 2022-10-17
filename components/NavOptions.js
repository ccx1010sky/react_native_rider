import { FlatList, Text, View, TouchableOpacity,Image } from "react-native";
import React from "react";
import tw from "twrnc";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "http://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
        horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style = {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <Text style = {tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
