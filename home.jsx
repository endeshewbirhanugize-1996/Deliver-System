import React, {useState} from "react";
import Sinupuser from "../admin/UserRg";
import Sinupfoood from "../admin/Registorfood";
const Admin=()=>{
 const [istrue, setIstrue]=useState(true);

return(
<>
<div>
    {istrue?(<Sinupuser/>):
    (<Sinupfoood/>)}
    
    
</div>
</>
)
}
export default Admin