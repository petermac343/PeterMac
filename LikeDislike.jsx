import React, { useState, useEffect } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import styled from 'styled-components';

const Container = styled.div`
width: 150px;
gap: 30px;
display: flex;
justify-content: space-between;
margin-top: 20px;
align-items: center;
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 200;
  font-family: inherit;
  background-color: #b8c3c3;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 1px auto -webkit-focus-ring-color;
}

`

const LikeDislike = () => {
  const [likes, setLikes] = useState(() => {
    // Load the likes count from local storage, or default to 0 if not available
    const storedLikes = localStorage.getItem('likes');
    return storedLikes ? parseInt(storedLikes) : 0;
  });


  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = prevLikes + 1;
      // Store the updated likes count in local storage
      localStorage.setItem('likes', newLikes);
      return newLikes;
    });
  };


  // Update the likes and dislikes counts when the component mounts
  useEffect(() => {
    const storedLikes = localStorage.getItem('likes');

    setLikes(storedLikes ? parseInt(storedLikes) : 0);
  }, []);

  return (
    <Container>
      <button onClick={handleLike}>
        <FiThumbsUp /> ({likes})
      </button>
    </Container>
  );
};

export default LikeDislike;
