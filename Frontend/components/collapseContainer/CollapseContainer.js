import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import PropTypes from "prop-types";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import BorderContainer from "../borderContainer/BorderContainer";
import CollapseHeader from "../collapseHeader/CollapseHeader";
import InnerMediaContainer from "../innerMediaContainer/InnerMediaContainer";

const CollapseContainer = ({ name, collapseOpenContent, media, mediaType }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [collapseImage, setCollapseImage] = useState(faChevronDown);

  const handlePress = () => {
    setCollapsed(!isCollapsed);
    setCollapseImage(isCollapsed ? faChevronUp : faChevronDown);
  };

  return (
    <BorderContainer>
      <>
        <CollapseHeader
          handlePress={handlePress}
          collapseImage={collapseImage}
          name={name}
        />
        <Collapsible collapsed={isCollapsed}>
          {collapseOpenContent ? collapseOpenContent : null}
          {media ? (
            <InnerMediaContainer mediaSource={media} mediaType={mediaType} />
          ) : null}
        </Collapsible>
      </>
    </BorderContainer>
  );
};

CollapseContainer.prototype = {
  name: PropTypes.string.isRequired,
  collapseOpenContent: PropTypes.node,
  media: PropTypes.string,
  mediaType: PropTypes.string,
};

export default CollapseContainer;
