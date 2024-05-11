import residentialPartTwo from "./04-FALL2022_RESIDENCIAL.jpg"
import NavMenu from "../NavMenu/NavMenu";
const ResidentialPartTwo = () =>{
    return(
        <div>
            <img src={residentialPartTwo} alt="" width="100%"/>
            <NavMenu lastPage={"residential-01"} nextPage={"commercial-01"}/>
        </div>
    )
}
export default ResidentialPartTwo