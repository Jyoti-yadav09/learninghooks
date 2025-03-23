import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json(); 
};

const Posts = () => {
  
  const { data, isLoading, error } = useQuery('posts', fetchPosts);

  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  if (error) {
    return <div>Error: {error.message || "An error occurred"}</div>;
  }

  
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data && Array.isArray(data) ? (
          data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </ul>
    </div>
  );
};

export default Posts;
