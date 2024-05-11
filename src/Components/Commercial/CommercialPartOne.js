import commercialPartOne from "./05-WINTER2023-ERIDANUS.jpg"
import NavMenu from "../NavMenu/NavMenu";
const CommercialPartOne = () =>{
    return(
        <div>
            <img src={commercialPartOne} alt=""  width="100%"/>
            <NavMenu lastPage={"residential-02"} nextPage={"commercial-02"}/>
        </div>
    )
}
export default CommercialPartOne