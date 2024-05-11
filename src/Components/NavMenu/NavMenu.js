import "./NavMenu.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {useNavigate} from "react-router-dom";

const NavMenu = (props) =>{
    const {lastPage,nextPage}=props
    const navigate = useNavigate()
    return(
        <div className="navMenuContainer">
            <div className="navMenuEle"
                 onClick={()=>{
                     navigate('/menu')
                 }}>
                <HomeOutlinedIcon/>
            </div>
            <div className="navMenuEle" onClick={()=>{
                navigate(`/${lastPage}`)
            }}>
                <ArrowBackOutlinedIcon/>
            </div>
            <div className="navMenuEle"
                 onClick={()=>{
                navigate(`/${nextPage}`)
            }}>
                <ArrowForwardOutlinedIcon/>
            </div>
        </div>
    )
}
export default NavMenu