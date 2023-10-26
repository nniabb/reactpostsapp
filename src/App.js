import React, { useState } from 'react';
import Form from './Form';
import PostList from './PostList';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPostTitle) {
    const newPost = { id: crypto.randomUUID(), title: newPostTitle };
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  }

  function deletePost(id) {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
  }


  return (
    <div className='App'>
      <Form addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;












// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [newPosts, setNewPosts] = useState('')
//   const [posts, setPosts] = useState([])

//   function handleSubmit(e) {
//     e.preventDefault()
//     if(newPosts == '') return;
//     const newPost = { id: crypto.randomUUID(), title: newPosts }
//     setPosts((currentPosts) => [newPost, ...currentPosts])
//     setNewPosts('')
//   }

//   function deletePosts(id) {
//     setPosts(currentPosts => {
//       return currentPosts.filter(post => post.id !== id)
//     })
//   }

//   const countLetters = posts.reduce((total, post) => total + post.title.length, 0);

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//       <input className='inpt'
//        type='text'
//        placeholder='New Post'
//        value={newPosts}
//        onChange={e => setNewPosts(e.target.value)}></input>
//       </form>
//       <div className='lengthbox'>
//         <p className='pp'> Post Titles Length Is {countLetters} </p>
//       </div>
//       {posts.map(post => {
//         return(
//           <div key={post.id} style={{display:"flex", justifyContent:'center', alignItems:'center',gap:'20px'}}> 
//           <div className='postbox'>{post.title}</div>
//           <button onClick={()=> deletePosts(post.id)}>DELETE</button>
//           </div>
//         )
//       })}
//     </div>
//   );
// }

// export default App;



