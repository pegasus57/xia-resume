import "./MenuPage.scss"
import content1 from "./contentPics/content1.png";
import content2 from "./contentPics/content2.png";
import content3 from "./contentPics/content3.png";
import content4 from "./contentPics/content4.png";
import content5 from "./contentPics/content5.png";
import content6 from "./contentPics/content6.png";
import content7 from "./contentPics/content7.png";
import content8 from "./contentPics/content8.png";
import content9 from "./contentPics/content9.png";
import {useNavigate} from "react-router-dom";

const MenuPage = () =>{
    const navigate = useNavigate()
    return (
        <div className="menuPageContainer">
            <div className="menuPageTitle">
                <div className="menuPageTitleEle">
                    C
                </div>
                <div className="menuPageTitleEle">
                    O
                </div>
                <div className="menuPageTitleEle">
                    N
                </div>
                <div className="menuPageTitleEle">
                    T
                </div>
                <div className="menuPageTitleEle">
                    E
                </div>
                <div className="menuPageTitleEle">
                    N
                </div>
                <div className="menuPageTitleEle">
                    T
                </div>
            </div>
            <div className="menuPageContents">
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/resume')
                     }}
                >
                   <div className="menuPageContentEleNum">
                       01
                   </div>
                    <divi>
                        <img src={content1} alt=""/>
                    </divi>
                    <div className="menuPageContentEleText">
                        <div>
                            Resume
                        </div>
                    </div>
                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/residential-01')
                     }}>
                    <div className="menuPageContentEleNum">
                        02
                    </div>
                    <div>
                        <img src={content2} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Residential
                        </div>
                        <div>
                            Projects
                        </div>
                    </div>

                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/commercial-01')
                     }}>
                    <div className="menuPageContentEleNum">
                        03
                    </div>
                    <div>
                        <img src={content3} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Commercial
                        </div>
                        <div>
                            Projects
                        </div>
                    </div>

                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                    navigate('/office-01')
                }}
                >
                    <div className="menuPageContentEleNum">
                        04
                    </div>
                    <div>
                        <img src={content4} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Office
                        </div>
                        <div>
                            Projects
                        </div>
                    </div>

                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/working-01')
                     }}
                >
                    <div className="menuPageContentEleNum">
                        05
                    </div>
                    <div>
                        <img src={content5} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Working
                        </div>
                        <div>
                            Drawing
                        </div>
                    </div>

                </div>

                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/dynamo')
                     }}
                >
                    <div className="menuPageContentEleNum">
                        06
                    </div>
                    <div>
                        <img src={content6} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Dynamo
                        </div>
                        <div>
                            Project
                        </div>
                    </div>

                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/rhino')
                     }}>
                    <div className="menuPageContentEleNum">
                        07
                    </div>
                    <div>
                        <img src={content7} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Rhino
                        </div>
                        <div>
                            Project
                        </div>
                    </div>

                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/handcraft')
                     }}
                >
                    <div className="menuPageContentEleNum">
                        08
                    </div>
                    <div>
                        <img src={content8} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Handcraft
                        </div>
                        <div>
                            Project
                        </div>
                    </div>

                </div>
                <div className="menuPageContentEle"
                     onClick={()=>{
                         navigate('/photograph')
                     }}
                >
                    <div className="menuPageContentEleNum">
                        09
                    </div>
                    <div>
                        <img src={content9} alt=""/>
                    </div>
                    <div className="menuPageContentEleText">
                        <div>
                            Photographs
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuPage