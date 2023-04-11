import {auth} from "../firebase-config"
import { useEffect, useState } from "react";

const useGetUser = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() =>{
       const unlisten = auth.onAuthStateChanged(
          authUser => {
            authUser
              ? setAuthUser(authUser)
              : setAuthUser(null);
          },
       );
       return () => {
           unlisten();
       }
    }, []);

    return authUser;
}

export default useGetUser;