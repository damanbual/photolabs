import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    onTopicSelect && onTopicSelect(topic.title); // Safely call onTopicSelect with the topic's title
  };

  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          isSelected={topic.title === selectedTopic?.title}  // Highlight the selected topic
          onClick={() => handleTopicClick(topic)}  // Handle topic click and update state
        />
      ))}
    </ul>
  );
};

export default TopicList;