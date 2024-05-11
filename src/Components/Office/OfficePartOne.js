import img from "./08-OFFICE-1.jpg"
import NavMenu from "../NavMenu/NavMenu";
const OfficePartOne = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"commercial-03"} nextPage={"office-02"}/>
        </div>
    )
}
export default OfficePartOne