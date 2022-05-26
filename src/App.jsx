import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

let man = {
	name: 'dm',
	age: 22,
	sayName() {
		console.log(this.name)
	}
}
man.sayName()

function App(props) {
    return (
        <BrowserRouter>
            <div className='social-wrapper'>
                <Header />
                <Navbar sidebar={props.state.sidebar} />
                <div className='main'>
					<Routes>
						
						<Route exact path='/profile' element={
							<Profile
								profilePage={ props.state.profilePage }
								dispatch={ props.dispatch }
							/> } />
						
						<Route exact path='/dialogs/*' element={
							<Dialogs
								dialogsPage={ props.state.dialogsPage }
								dispatch={ props.dispatch }
							/>
						} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
