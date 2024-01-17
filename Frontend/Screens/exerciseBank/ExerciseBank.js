import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";

import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import { Routes } from "../../navigation/Routes";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const ExerciseBank = ({ navigation }) => {
  const musclesList = useSelector((state) => state.exerciseBankList.catagories);

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={"בנק תרגילים"}
              backPress={() => navigation.goBack()}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={musclesList}
        renderItem={({ item }) => (
          <OptionContainer
            key={item.muscleName}
            content={
              <>
                <View style={style.musclesContainer}>
                  <View style={style.imageContainer}>
                    <Image
                      source={item.muscleImage}
                      resizeMode="contain"
                      style={style.image}
                    />
                  </View>
                  <View style={style.textContainer}>
                    <Text style={style.primaryText}>{item.muscleName}</Text>
                    <Text style={style.secondaryText}>
                      למעבר לתרגילי {item.muscleName}
                    </Text>
                  </View>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size={horizontalScale(24)}
                  />
                </View>
              </>
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ExerciseBank;
