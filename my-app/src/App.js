
import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([{ id: 1, title: 'Javascript', body: 'Description' },
  { id: 2, title: 'Javascript2', body: 'Description' },
  { id: 3, title: 'Javascript3', body: 'Description' },
  { id: 4, title: 'Javascript4', body: 'Description' },
  { id: 5, title: 'Javascript5', body: 'Description' }])

  const [selectedSort,setSelectedSort] =useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) =>{
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style = {{margin:'15px 0'}}/>
      <div>
        <MySelect
          value ={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка по'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='список про js' />
        : <h1 style={{ textAlign: 'center' }}>Здесь пока нет постов</h1>

      }

    </div>
  );
}

export default App;
