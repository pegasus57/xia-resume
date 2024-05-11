import img from "./07-FALL2023_CHAYUN2.jpg"
import NavMenu from "../NavMenu/NavMenu";
const ResidentialPartThree = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"commercial-02"} nextPage={"office-01"}/>
        </div>
    )
}
export default ResidentialPartThree