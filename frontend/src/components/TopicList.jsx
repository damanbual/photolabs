import React, { useState } from "react";
import TopicListItem from "./TopicListItem"; // Import TopicListItem
import topics from '../mocks/topics'; // Import topics mock data
import "../styles/TopicList.scss";

const TopicList = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]); // Default to the first topic

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); // Set the clicked topic as selected
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