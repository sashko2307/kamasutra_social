import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
    <div className='social-wrapper'>
        <Header />
        <nav className={cl.nav}>
            <div>
                <NavLink
                    to='/profile'
                    className={({ isActive }) =>
                        isActive ? cl.active : undefined
                    }
                >
                    Profile
                </NavLink>
            </div>
            <div className={cl.item}>
                <NavLink
                    to='/dialogs'
                    className={({ isActive }) =>
                        isActive ? cl.active : undefined
                    }
                >
                    Dialogs
                </NavLink>
            </div>
            <div className={cl.item}> profile </div>
            <div className={cl.item}> profile </div>
            <div className={cl.item}> profile </div>
        </nav>
        <div className='main'>
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/dialogs' element={<Dialogs />} />
                {/* 
				звездочка это как exact в 5 версии роутера
				<Route path='/dialogs/*' element={<Dialogs />} /> */}
            </Routes>
        </div>
    </div>
</BrowserRouter>;
