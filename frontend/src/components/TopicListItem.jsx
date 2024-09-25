import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, isSelected, onClick }) => {
  return (
    <li className={`topic-list__item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <span>{topic.title}</span> {/* Display the topic title */}
    </li>
  );
};

export default TopicListItem;