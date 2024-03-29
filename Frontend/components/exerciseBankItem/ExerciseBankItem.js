import React from "react";
import PropTypes from "prop-types";

import CollapseContainer from "../collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../collapseOpen/CollapseOpenWithoutEdit";

import Strings from "../../assets/strings/Strings";
import Colors from "../../assets/styles/Colors";
import Indexes from "../../assets/videos/Indexes";

const ExerciseBankItem = ({ exercise }) => {
  return (
    <CollapseContainer
      name={exercise.exerciseName}
      media={Indexes[exercise.exerciseVideo]}
      mediaType={"video"}
      collapseOpenContent={
        <>
          <CollapseOpenWithoutEdit
            title={Strings.WorksOn}
            exerciseData={exercise.workOn}
          />
          <CollapseOpenWithoutEdit
            title={Strings.Highlights}
            exerciseData={exercise.highlights}
            backgroundColor={Colors.lightBlueSecondary}
          />
        </>
      }
    />
  );
};

ExerciseBankItem.defaultProps = {
  backgroundColor: Colors.white,
};

ExerciseBankItem.propTypes = {
  exercise: PropTypes.object.isRequired,
};

export default ExerciseBankItem;
