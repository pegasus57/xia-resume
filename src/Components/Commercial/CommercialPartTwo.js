import img from "./06-FALL2023_CHAYUN.jpg"
import NavMenu from "../NavMenu/NavMenu";
const CommercialPartTwo = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"commercial-01"} nextPage={"commercial-03"}/>
        </div>
    )
}
export default CommercialPartTwo