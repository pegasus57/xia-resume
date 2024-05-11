import img from "./10-office-RCP.jpg"
import NavMenu from "../NavMenu/NavMenu";
const OfficePartThree = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"office-02"} nextPage={"working-01"}/>
        </div>
    )
}
export default OfficePartThree