import { useState } from 'react';
import './App.css'
import SidePanel from './SidePanel';
import PostList from './PostList';

function App() {

	// Example array of post data
	const posts = [
	{ id: 1, title: 'Post 1', description: 'Description for Post 1', url: 'https://example.com/post1', upvotes: 0 },
	{ id: 2, title: 'Post 2', description: 'Description for Post 2', url: 'https://example.com/post2', upvotes: 1 },
	{ id: 3, title: 'Post 3', description: 'Description for Post 3', url: 'https://example.com/post3', upvotes: 2 },
																				 // Add more posts as needed
	];

	return (
    <div className="app">
      <SidePanel />
      {/* Your main content goes here */}
      <div className="main-content">
        <h1>Main Content</h1>
        {/* Add your main content here */
			<PostList posts={posts} emptyHeading="" />

		}
      </div>

    </div>
  );
}

export default App
