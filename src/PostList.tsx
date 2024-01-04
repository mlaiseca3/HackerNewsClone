import {useState} from 'react'; 

function UpvoteButton({post}) {
	const [count, setCount] = useState(post.upvotes);

	function handleClick() {
		setCount(count + 1);
		post.upvotes = count + 1
	}	

	return (
			<button onClick={handleClick}>
			{count} Upvotes
			</button>
		   );
}

function Post({ post }) {
	return (
    <div>
      <a href={post.url}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </a>
      <UpvoteButton post={post} />
    </div>
  );
}

function PostList({ posts, emptyHeading }) {
const count = posts.length;
let heading = emptyHeading;
if (count > 0) {
  const noun = count > 1 ? 'Posts' : 'Post';
  heading = count + ' ' + noun;
}
return (
  <section>
	<h2>{heading}</h2>
	{posts.map(post =>
	  <Post key={post.id} post={post} />
	)}
  </section>
);
}


export default PostList;
