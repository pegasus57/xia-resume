import img from "./02-resume.jpg"
import NavMenu from "../NavMenu/NavMenu";
const Resume = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"menu"} nextPage={"residential-01"}/>
        </div>
    )
}
export default Resume