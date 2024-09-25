import React, { useState } from "react";
import TopicListItem from "./TopicListItem"; // Import TopicListItem
import "../styles/TopicList.scss";

// Sample data for topics
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const [selectedTopic, setSelectedTopic] = useState(sampleDataForTopicList[0]); // Default to the first topic

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); // Set the clicked topic as selected
  };

  return (
    <ul className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
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