import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Todos from './Todos/todosMain'
import Users from './Users/mainUsers';
import Posts from './Posts/mainPosts';
import Layout from './component/layout';
import Create from './Todos/create'
import Delete from './Todos/tDelete'
import Updata from './Todos/updata';
import UpdateC from './Todos/tPut'
import Button from '@mui/material/Button';
import Updata2 from './Posts/updata'
import Create2 from './Posts/create';
import Delete2 from './Posts/delete';
import Updata3 from './Users/updata'
import Create3 from './Users/create';
import Delete3 from './Users/delete';





function App() {

  return (
    <div >
<Router>
    <Routes> 
      <Route path='/' element={<Layout/>}>

       <Route index element={<main><Button key={1} href="/todos" variant="outlined" >Todos </Button>
       <br/>
       <br/>
      <Button key={2} href="/users" variant="outlined" >Users </Button>
      <br/>
      <br/>
      <Button key={3} href="/posts" variant="outlined" >Posts </Button>
       </main>
      }/>

       <Route path='todos' element={<Todos/>}>

       <Route index element=
       {<main>

        <Button key={6} href="/todos/CreateNewTodos" variant="outlined">CreateNewTodos</Button>
        <br/>
        <br/>
        <Button key={7} href="/todos/deleteIteam" variant="outlined">DeleteIteams</Button>
        <br/>
        <br/>
        <Button key={8} href="/todos/UpdateIteam" variant="outlined">UpdateIteam</Button>
        <br/>
        <br/>
        <Button key={9} href="/todos/Updatefiled" variant="outlined">Updatefiled</Button>
        </main>
       }/>

         <Route path='CreateNewTodos' element={<Create/>}/>
         <Route path='deleteIteam' element ={<Delete/>} />
         <Route path='UpdateIteam' element ={<Updata/>} />
         <Route path='Updatefiled' element={<UpdateC/>}/>
       </Route>

        <Route path='posts' element={<Posts/>}>
        <Route index element=
       {<main>

        <Button key={11} href="/posts/CreateNewPosts" variant="outlined">CreateNewPost</Button>
        <br/>
        <br/>
        <Button key={12} href="/posts/deleteIteam" variant="outlined">DeleteIteams</Button>
        <br/>
        <br/>
        <Button key={13} href="/posts/UpdateIteam" variant="outlined">UpdateIteam</Button>
        
        </main>
       }/>

         <Route path='CreateNewPosts' element={<Create2/>}/>
         <Route path='deleteIteam' element ={<Delete2/>} />
         <Route path='UpdateIteam' element ={<Updata2/>} />
      
       </Route>

        <Route path ='users' element={<Users/>}>
        <Route index element=
       {<main>

        <Button key={14} href="/users/CreateNewUser" variant="outlined">CreateNewUser</Button>
        <br/>
        <br/>
      <Button key={15} href="/users/deleteIteam" variant="outlined">DeleteIteams</Button>
        <br/>
        <br/>
        <Button key={16} href="/users/UpdateIteam" variant="outlined">UpdateIteam</Button>
        
        </main>
       }/>

         <Route path='CreateNewUser' element={<Create3/>}/>
         <Route path='deleteIteam' element ={<Delete3/>} />
         <Route path='UpdateIteam' element ={<Updata3/>} />

       </Route>
      </Route>
    </Routes>
</Router>
    </div>
  
);}

export default App;
