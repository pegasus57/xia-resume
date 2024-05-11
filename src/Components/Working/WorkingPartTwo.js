import img from "./12-WINTER-2024-CAD.jpg"
import NavMenu from "../NavMenu/NavMenu";
const WorkingPartTwo = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"working-01"} nextPage={"dynamo"}/>
        </div>
    )
}
export default WorkingPartTwo