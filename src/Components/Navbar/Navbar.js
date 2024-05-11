import './Navbar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Navbar = (props) => {
    const {setCurrentTab} = props
    const clickHandler = (tab) =>{
        setCurrentTab(tab)
    }
    return(
        <div className="navbarContainer">
            <div>
                <div className="navbarNameTitle">
                    <div style={{fontWeight:"100" ,marginLeft:"10px", marginRight:"10px"}}> YUQING </div>
                    <div style={{fontWeight:"8000", marginLeft:"10px",marginRight:"10px", color:"lightgray"}}>  XIA </div>
                </div>
                <div style={{marginTop:"10px" , display:"flex", justifyContent: "center"}}>
                    Interior Design
                </div>


                <div className="navbarMenuContainer">
                    <div className="navbarMenuCButton"
                         onClick={()=>{
                             clickHandler("intro")
                         }}
                    >
                        <ArrowForwardIosIcon/>
                        <div>INTRO</div>

                    </div>
                    <div className="navbarMenuCButton"
                         onClick={()=>{
                             clickHandler("intro0")
                         }}>
                        <ArrowForwardIosIcon/>
                        <div>INTRO</div>
                    </div>
                    <div className="navbarMenuCButton"
                         onClick={()=>{
                             clickHandler("intro1")
                         }}>
                        <ArrowForwardIosIcon/>
                        <div>INTRO</div>
                    </div>
                    <div className="navbarMenuCButton"
                         onClick={()=>{
                             clickHandler("intro2")
                         }}>
                        <ArrowForwardIosIcon/>
                        <div>INTRO</div>
                    </div>
                </div>
            </div>
            <div className="navbarContactContainer">
                <div className="navbarContactTitle">
                    Contact Me
                </div>
                <div>
                    <div className="navbarContactButton">
                        <LinkedInIcon/>
                        <div>LinkedIn</div>
                    </div>
                    <div className="navbarContactButton">
                        <PhoneIcon/>
                        <div>Phone</div>
                    </div>
                    <div className="navbarContactButton">
                        <EmailIcon/>
                        <div>Email</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar