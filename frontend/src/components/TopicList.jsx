import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          isSelected={topic === selectedTopic}
          onClick={() => handleTopicClick(topic)}
        />
      ))}
    </ul>
  );
};

export default TopicList;