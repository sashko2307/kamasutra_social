import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <BrowserRouter>
            <div className='social-wrapper'>
                <Header />
                <Navbar />
                <div className='main'>
                    <Routes>
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/dialogs/*' element={<Dialogs   />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
