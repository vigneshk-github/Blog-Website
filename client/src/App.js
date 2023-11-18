import Home from "./pages/home/Home"
import Topbar from "./Topbar/Topbar"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import Settings from './pages/settings/Settings'
import Single from './singlePost/SinglePost'
import Write from "./pages/write/Write"
import { Route,Routes,BrowserRouter } from 'react-router-dom';


//eslint-disable-next-line

function App() {
  const user = false;
  return (
    <div className="App">
    <BrowserRouter>
    <Topbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/Register" element={user?<Home/>:<Register/>}/>
        <Route exact path="/Login" element={user?<Home/>:<Login/>}/>
        <Route exact path="/Write" element={user?<Write/>:<Register/>}/>
        <Route exact path="/Setting" element={user?<Settings/>:<Register/>}/>
        <Route exact path="/post/id" element={<Single/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
