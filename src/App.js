import './App.css';
import { Route, Routes} from "react-router-dom";
import Error from "./Components/Error/Error";
import MainPage from "./Components/MainPage/MainPage"
import MenuPage from "./Components/MenuPage/MenuPage";
import Resume from "./Components/Resume/Resume";
import ResidentialPartOne from "./Components/Residential/ResidentialPartOne";
import ResidentialPartTwo from "./Components/Residential/ResidentialPartTwo";
import CommercialPartOne from "./Components/Commercial/CommercialPartOne";
import Photograph from "./Components/Photograph/Photograph";
import CommercialPartTwo from "./Components/Commercial/CommercialPartTwo";
import ResidentialPartThree from "./Components/Commercial/CommercialPartThree";
import OfficePartOne from "./Components/Office/OfficePartOne";
import OfficePartTwo from "./Components/Office/OfficePartTwo";
import OfficePartThree from "./Components/Office/OfficePartThree";
import WorkingPartOne from "./Components/Working/WorkingPartOne";
import WorkingPartTwo from "./Components/Working/WorkingPartTwo";
import Dynamo from "./Components/Dynamo/Dynamo";
import Rhino from "./Components/Rhino/Rhino";
import HandCraft from "./Components/Handcraft/HandCraft";
import BasicSpeedDial from "./Components/SpeedNav/SpeedNav";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/menu" element={<MenuPage/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/residential-01" element={<ResidentialPartOne/>} />
                <Route path="/residential-02" element={<ResidentialPartTwo/>} />
                <Route path="/commercial-01" element={<CommercialPartOne/>} />
                <Route path="/commercial-02" element={<CommercialPartTwo/>} />
                <Route path="/commercial-03" element={<ResidentialPartThree/>} />
                <Route path="/office-01" element={<OfficePartOne/>} />
                <Route path="/office-02" element={<OfficePartTwo/>} />
                <Route path="/office-03" element={<OfficePartThree/>} />
                <Route path="/working-01" element={<WorkingPartOne/>} />
                <Route path="/working-02" element={<WorkingPartTwo/>} />
                <Route path="/dynamo" element={<Dynamo/>} />
                <Route path="/rhino" element={<Rhino/>} />
                <Route path="/handcraft" element={<HandCraft/>} />
                <Route path="/photograph" element={<Photograph/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
  );
}

export default App;
