import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

// сверстать покрасивей диалоги и сделать в навбаре друзей

function App(props) {
	
    return (
        <BrowserRouter>
            <div className='social-wrapper'>
                <Header />
                <Navbar sidebar={props.state.sidebar} />
                <div className='main'>
                    <Routes>
                        <Route exact path='/profile' element={<Profile posts={props.state.profilePage.posts} />} />
						<Route exact path='/dialogs/*' element={
							<Dialogs dialogs={ props.state.dialogsPage.dialogs } messages={props.state.dialogsPage.messages}
							/>
						} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
