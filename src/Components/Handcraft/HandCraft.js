import img from "./15-Stool.jpg"
import NavMenu from "../NavMenu/NavMenu";
const HandCraft = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"rhino"} nextPage={"photograph"}/>
        </div>
    )
}
export default HandCraft