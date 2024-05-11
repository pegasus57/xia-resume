import './MainPage.scss';
import mainPage1 from "./mainPage1.png";
import mainPage2 from "./mainPage2.png";
import mainPage3 from "./mainPage3.png";
import mainPage4 from "./mainPage4.png";
import {useNavigate} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const MainPage = () => {
    const navigate = useNavigate()
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div>
            <div className="mainPageContainer">
                <div className="mainPagePicsContainer">
                    <div className="mainPagePicDiv">
                        <img className="mainPagePic" src={mainPage1} alt=""/>
                    </div>
                    <div className="mainPagePicDiv" style={{marginTop: "100px"}}>
                        <img className="mainPagePic" src={mainPage2} alt=""/>
                    </div>
                    <div className="mainPagePicDiv" style={{marginTop: "200px"}}>
                        <img className="mainPagePic" src={mainPage3} alt=""/>
                    </div>
                    <div className="mainPagePicDiv">
                        <img className="mainPagePic" src={mainPage4} alt=""/>
                    </div>
                </div>
                <div className="mainPageTextContainer">
                    <div style={{fontSize: "40px", fontWeight: "500"}}>
                        INTERIOR DESIGN TECHNOLOGY
                    </div>
                    <div style={{fontSize: "200px", fontWeight: "800"}}>
                        PORTFOLIO
                    </div>
                    <div style={{fontSize: "40px", fontWeight: "700"}}>
                        SUMMER XIA
                    </div>
                    <div style={{fontSize: "40px", fontWeight: "500"}}>
                        2022-2024
                    </div>
                </div>
            </div>
            <div>
                <div className="mainPageWelcomeLink">
                    <div onClick={() => {
                        navigate('/menu')
                    }}>
                        WELCOME
                    </div>
                </div>
            </div>
            <div className="mainPageContactContainer">
                <div className="mainPageContactEle"
                     onClick={()=>{
                         openInNewTab("https://www.linkedin.com/in/yuqing-xia-a3019585/")
                     }
                     }
                >
                    <LinkedInIcon/>
                    <div>YUQING XIA</div>
                </div>
                <div className="mainPageContactEle">
                    <PhoneIcon/>
                    <div>647-231-2906</div>
                </div>
                <div className="mainPageContactEle">
                    <EmailIcon/>
                    <div>summerxiayuqing@gmail.com</div>
                </div>
            </div>
        </div>

    )
}

export default MainPage