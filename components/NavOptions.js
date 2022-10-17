import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "http://links.papareact.com/3pm",
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
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
