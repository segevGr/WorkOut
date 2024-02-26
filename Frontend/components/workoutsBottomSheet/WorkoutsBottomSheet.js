import React from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";

// External Libraries and Packages
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// Assets
import ExerciseBankItem from "../exerciseBankItem/ExerciseBankItem";

const WorkoutsBottomSheet = ({
  exercisesBankList,
  exerciseList,
  bottomSheetRef,
}) => {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["92%"]}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: "#D4E5F7", opacity: 1 }}
      index={-1}
      enableContentPanningGesture={true}
    >
      <BottomSheetView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={exercisesBankList}
          renderItem={({ item }) => {
            return (
              <View>
                <ExerciseBankItem
                  exercise={item}
                  isSelected={exerciseList.includes(item._id)}
                />
              </View>
            );
          }}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

ExerciseBankItem.prototype = {
  exercisesBankList: PropTypes.array.isRequired,
  exerciseList: PropTypes.array.isRequired,
  bottomSheetRef: PropTypes.object.isRequired,
};

export default WorkoutsBottomSheet;
