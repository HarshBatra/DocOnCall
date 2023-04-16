import React,{ useState, createContext, useContext, useRef } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error,setError] = useState(null);
    const [category, setCategory] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [ me, setMe ] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [activeDocs, setActiveDocs] = useState(new Map([["key","value"]]));
	const [ receivingCall, setReceivingCall ] = useState(false);
    const [ callAccepted, setCallAccepted ] = useState(false);
	const [ name, setName ] = useState("No Name");
    const [ stream, setStream ] = useState()
	const [ caller, setCaller ] = useState("");
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callEnded, setCallEnded] = useState(false)
	const [ connectedWith, setConnectedWith ] = useState(null);
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

    /**** useEffects for precomputation ******/


    /****** passing values */
    const value = {
        error, setError,
        category, setCategory,
        specialization, setSpecialization,
        me, setMe,
        user, setUser,
        isLoading, setIsLoading,
        selectedDoctor, setSelectedDoctor,
        doctors, setDoctors,
        activeDocs, setActiveDocs,
        callAccepted, setCallAccepted,
        receivingCall, setReceivingCall,
        name, setName,
        stream, setStream, 
        caller, setCaller,
        callerSignal, setCallerSignal,
        callEnded, setCallEnded,
        connectedWith, setConnectedWith,
        myVideo, userVideo, connectionRef
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}