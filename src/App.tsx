import { AppWrapper } from "./AppWrapper"
import { Aside } from "./Layout/Aside"
import { Nav } from "./Layout/Nav"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SplitScreen } from "./Components/shared/splitScreen";
import { Footer } from "./Layout/Footer";
import { Home } from "./Pages/Home";
import { ActiveToggle } from "./services/AddPostServices/PostsScreenToggle";
import AuthContextProvider from "./Context/AuthContext";
import { SignUp } from "./Pages/Auth/AuthPages/SignUp/Index";
import { SignIn } from "./Pages/Auth/AuthPages/SignIn";

function App() {
  const { IsPageActive, Toggle } = ActiveToggle()

  return (
    <AppWrapper>
      <BrowserRouter>

        <AuthContextProvider>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </AuthContextProvider>


        <SplitScreen
          header={<Nav MenuButtonHandler={Toggle} />}
          left={<Aside IsPageActive={IsPageActive} />}

          right={
            <Routes>
              <Route path="/Home" element={<Home />} />
            </Routes>
          }
          footer={<Footer />}
        />

      </BrowserRouter >
    </AppWrapper>
  )
}

export default App
