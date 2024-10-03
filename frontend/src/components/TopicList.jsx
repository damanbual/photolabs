import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    if (onTopicSelect) {
      onTopicSelect(topic.title);  // Ensure we're passing the topic title to the parent component
    }
  };

  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          isSelected={topic.title === selectedTopic?.title}
          onClick={() => handleTopicClick(topic)}
        />
      ))}
    </ul>
  );
};

export default TopicList;