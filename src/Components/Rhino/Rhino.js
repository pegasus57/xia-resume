import img from "./14-rhino.jpg"
import NavMenu from "../NavMenu/NavMenu";
const Rhino = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"dynamo"} nextPage={"handcraft"}/>
        </div>
    )
}
export default Rhino