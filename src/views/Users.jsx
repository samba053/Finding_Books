import { useEffect } from "react";

function Users(){
    useEffect(()=>{
        console.log('In use effect function...')
       
    }, []);
    return(
        <div>
            <h2>Users List</h2>
        </div>
    )

}
export default Users;