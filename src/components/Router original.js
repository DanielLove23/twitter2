import { useState } from "react";
import { HashRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route path ="/" >
                       <Home />
                    </Route> 
                ) : (
                    <Route path="/" >
                        <Auth />
                    </Route>
            
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;