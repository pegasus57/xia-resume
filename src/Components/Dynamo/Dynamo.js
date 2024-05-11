import img from "./13-dynamo.jpg"
import NavMenu from "../NavMenu/NavMenu";
const Dynamo = () =>{
    return(
        <div>
            <img src={img} alt=""  width="100%"/>
            <NavMenu lastPage={"working-02"} nextPage={"rhino"}/>
        </div>
    )
}
export default Dynamo