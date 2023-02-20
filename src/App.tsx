import { AppWrapper } from "./AppWrapper"
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import { SignUp } from "./Pages/Auth/AuthPages/SignUp/Index";
import { SignIn } from "./Pages/Auth/AuthPages/SignIn";
import { Home } from "./Pages/Home";
import { SplitScreen } from "./SplitScreen";
import Profile from "./Pages/Profile";
import { Settings } from "./Pages/Settengs";
import { useEffect } from "react";
import { SetUserInfoAndRedirect } from "./services/RefreshLogin/SetUserInfoAndRedirect";

function App() {

  const { IsUserSignIn, RefreshUserAccount } = SetUserInfoAndRedirect()

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 1000);
    return () => clearTimeout(timer);
  }, [IsUserSignIn])

  return (
    <AppWrapper>

      <AuthContextProvider>
        <Routes>

          <Route path="/" element={<SplitScreen />} >
            <Route path="" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/Settings" element={<Settings />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </AuthContextProvider>

    </AppWrapper>
  )
}

export default App
