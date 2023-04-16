import {auth} from "../firebase-config"
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/contextsApi";

const useGetUser = () => {
    const { user, setUser, setIsLoading } = useAuth();

    useEffect(() =>{

       const unlisten = auth.onAuthStateChanged((authUser)=>{
           authUser ? setUser(authUser) : setUser(null)
           setIsLoading(false);
        //    console.log("auth ",authUser);
       }
       );
       return () => {
            setIsLoading(true);
            unlisten();
       }
    }, []);

    return user;
}

export default useGetUser;