import img from "./09-OFFICEPAGE-1.jpg"
import NavMenu from "../NavMenu/NavMenu";
const OfficePartTwo = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"office-01"} nextPage={"office-03"}/>
        </div>
    )
}
export default OfficePartTwo