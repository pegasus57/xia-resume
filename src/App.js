import './App.css';
import { Route, Routes} from "react-router-dom";
import Error from "./Components/Error/Error";
import MainPage from "./Components/MainPage/MainPage"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/menu" element={<div>2</div>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
  );
}

export default App;
