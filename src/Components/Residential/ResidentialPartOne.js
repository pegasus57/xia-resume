import residentialPartOne from "./03-SUMMER-2022.jpg"
import NavMenu from "../NavMenu/NavMenu";
const ResidentialPartOne = () =>{
    return(
        <div>
            <img src={residentialPartOne} alt=""  width="100%"/>
            <NavMenu lastPage={"resume"} nextPage={"residential-02"}/>
        </div>
    )
}
export default ResidentialPartOne