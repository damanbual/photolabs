import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  // Make sure to handle cases where topics might be undefined or empty
  if (!topics || topics.length === 0) {
    return <p>No topics available</p>;
  }

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