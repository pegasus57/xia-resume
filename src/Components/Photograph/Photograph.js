import img from "./16-photographies.jpg"
import NavMenu from "../NavMenu/NavMenu";
const Photograph = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"handcraft"} nextPage={"menu"}/>
        </div>
    )
}
export default Photograph