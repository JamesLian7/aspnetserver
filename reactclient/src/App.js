import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";


export default function App() {
  const[posts, setPosts] = useState([]);
  
  function getPosts(){
    const url = 'https://localhost:7081/get-all-posts';

    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json)
    .then(postsFromServer => {
      console.log(postsFromServer);
      setPosts(postsFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error);
    })
  }
  return (
    
    <div className='container'>
      <div className='row min-vh-100'>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
          <div>
          <h1>Speeding Camera and Cop Stop Updates</h1>
          <div className='mt-5'>
            <button onClick={getPosts} className="btn btn-dark btn-lg w-100">get Posts from server</button>
            <button onClick={()=>{}} className="btn btn-secondary btn-lg w-100 mt-4">Create New Post</button>
          </div>
          </div>
          {renderPostsTable()}
        </div>
      </div>
    </div>

  );

function renderPostsTable(){
  return(
    <div className="table-responsive mt-5">
      <table className='table table-bordered border-dark'>
        <thread>
          <tr>
            <th scope = "col"> PostId (PK) </th>
            <th scope = "col"> Title </th>
            <th scope = "col"> Content </th>
            <th scope = "col"> CRUD Operations</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <th scope = "row">1</th>
            <td>Post 1 Title</td>
            <td>Post 1 Content</td>
            <td>
              <button className='btn btn-dark btn-lg mx-3 my-3'>Update</button>
              <button className='btn btn-secondary btn-lg '>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
}
