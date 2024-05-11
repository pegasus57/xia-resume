import img from "./11-WINTER-2024-CAD-2.jpg"
import NavMenu from "../NavMenu/NavMenu";
const WorkingPartOne = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"office-03"} nextPage={"working-02"}/>
        </div>
    )
}
export default WorkingPartOne