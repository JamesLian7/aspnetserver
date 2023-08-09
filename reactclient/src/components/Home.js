import { Route, Routes } from "react-router";
import React, { useState } from "react";
import Constants from "../Utilities/Constants.js";
import PostCreateForm from "/Users/jameslian/Documents/aspnetserver/reactclient/src/components/PostCreateForm.js";
import PostUpdateForm from "/Users/jameslian/Documents/aspnetserver/reactclient/src/components/PostUpdateForm.js";
import About from "/Users/jameslian/Documents/aspnetserver/reactclient/src/components/About.js";
import Account from "/Users/jameslian/Documents/aspnetserver/reactclient/src/components/Account.js";
import NavBar from "/Users/jameslian/Documents/aspnetserver/reactclient/src/components/NavBar.js"

export default function App() {
    const [posts, setPosts] = useState([]);
    const [showingCreateNewPostForm, setShowingCreateNewPostForm] = useState(false);
    const [postCurrentlyBeingUpdated, setPostCurrentlyBeingUpdated] = useState(null);
  
    function getPosts() {
      const url = Constants.API_URL_GET_ALL_POSTS;
  
      fetch(url, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(postsFromServer => {
          setPosts(postsFromServer);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  
    function deletePost(postId) {
      const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postId}`;
  
      fetch(url, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(responseFromServer => {
          console.log(responseFromServer);
          onPostDeleted(postId);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  
    return (
      <div className="container">
        <NavBar/>
        <div className="box1">
          <div className="box2">
            {(showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && (
              <div>
                <h2>Footy Funhub</h2>
                <div className="background-container background-image">
      </div>
  
                <div className="box3">
                  <button onClick={getPosts} className="button1">Find Games</button>
                  <button onClick={() => setShowingCreateNewPostForm(true)} className="button2">Create Post</button>
                </div>
              </div>
            )}
  
            {(posts.length > 0 && showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && renderPostsTable()}
  
            {showingCreateNewPostForm && <PostCreateForm onPostCreated={onPostCreated} />}
  
            {postCurrentlyBeingUpdated !== null && <PostUpdateForm post={postCurrentlyBeingUpdated} onPostUpdated={onPostUpdated} />}
          </div>
        </div>
      </div>
    );
  
    function renderPostsTable() {
      return (
        <div className="table-responsive mt-5">
          <table className="table table-bordered border-dark">
            <thead>
              <tr>
                <th scope="col">Post Number </th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.postId}>
                  <th scope="row">{post.postId}</th>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <button onClick={() => setPostCurrentlyBeingUpdated(post)} className="btn1">Update</button>
                    <button onClick={() => { if(window.confirm(`Are you sure you want to delete the post titled "${post.title}"?`)) deletePost(post.postId) }} className="btn2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <button onClick={() => setPosts([])} className="btn3">Close Table</button>
        </div>
      );
    }
  
    function onPostCreated(createdPost) {
      setShowingCreateNewPostForm(false);
  
      if (createdPost === null) {
        return;
      }
  
      alert(`Post successfully created. After clicking OK, your new post tilted "${createdPost.title}" will show up in the table below.`);
  
      getPosts();
    }
  
    function onPostUpdated(updatedPost) {
      setPostCurrentlyBeingUpdated(null);
  
      if (updatedPost === null) {
        return;
      }
  
      let postsCopy = [...posts];
  
      const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
        if (postsCopyPost.postId === updatedPost.postId) {
          return true;
        }
      });
  
      if (index !== -1) {
        postsCopy[index] = updatedPost;
      }
  
      setPosts(postsCopy);
  
      alert(`Post successfully updated. After clicking OK, look for the post with the title "${updatedPost.title}" in the table below to see the updates.`);
    }
  
    function onPostDeleted(deletedPostPostId) {
      let postsCopy = [...posts];
  
      const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
        if (postsCopyPost.postId === deletedPostPostId) {
          return true;
        }
      });
  
      if (index !== -1) {
        postsCopy.splice(index, 1);
      }
  
      setPosts(postsCopy);
  
      alert('Post successfully deleted. After clicking OK, look at the table below to see your post disappear.');
    }
  }

  
 
  
  
  
  