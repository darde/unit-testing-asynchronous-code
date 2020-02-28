import React, { useState, useEffect } from 'react';
import fetchPosts from './services/fetchPosts';
import Container from './styles/App';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let mounted = true;

    const getPosts = async () => {
      const results = await fetchPosts();
      if (mounted) {
        setPosts(results);
      }
    }

    getPosts();
    return () => { mounted = false; }
  }, [])

  const filterTenFirstResults = () => setPosts(posts.slice(0,10));

  if (!posts) {
    return (
      <span>Loading...</span>
    );
  }

  return (
    <Container>
      <button onClick={filterTenFirstResults}>Filter</button>
      <ul data-testid="list">
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </Container>
  )
}

export default App;
