import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import Peer from "simple-peer";
import { useAuth } from "../contexts/contextsApi"
import { socket } from "../Components/Navbar"


const VideoCall = ()=>{
	
	const { 
		user, 
		me,
		selectedDoctor, 
		callAccepted, setCallAccepted,
		stream, setStream, 
        callEnded, setCallEnded,
        connectedWith, setConnectedWith,
        myVideo, userVideo, connectionRef
	} = useAuth();
	const [idToCall, setIdToCall ] = useState(selectedDoctor);
	
	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
			if(myVideo.current) myVideo.current.srcObject = stream;
		})
		socket.on("leavecall",leaveCall);
	}, [])
	
	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		});
		peer.on("signal", (data) => {
			console.log("ran signal calling ...",);
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: user?.displayName
			})
		})
		peer.on("stream", (stream) => {
			console.log("ran stream calling1...");
			userVideo.current.srcObject = stream;
		})
		socket.on("callAccepted", (signal) => {
			console.log("callAc... ran", signal);
			setCallAccepted(true)
			setConnectedWith(id);
			peer.signal(signal);
		});
		connectionRef.current = peer;
	}

	const leaveCall = () => {
		console.log(connectionRef.current);
		setCallEnded(true);
		// connectionRef.current.destroy();
		console.log("cc",connectionRef.current);
		connectionRef.current = null;
		socket.emit("leavecall",connectedWith);
	}
	
	return (
		<div className="pt-20">
    		<div className="container">
    			<div className="flex">
    				<div className="video">
    					{stream &&  <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
    				</div>
    				<div className="video">
    					{callAccepted && !callEnded ?
    					<div>
    					<h1></h1>
    						<video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />
    					</div>:
    					null}
    				</div>
    			</div>
    			<div className="myId">
    				<div className="call-button">
    					{callAccepted && !callEnded ? (
    						<Button variant="contained" color="secondary" onClick={leaveCall}>
    							End Call
    						</Button>
    					) : (
    						<IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
    							<PhoneIcon fontSize="large" />
    						</IconButton>
    					)}
    					{user?.displayName}
    				</div>
    			</div>
    		</div>
		</div>
	)
}

export default VideoCall;


export const answerCall =({setCallAccepted, stream, caller, userVideo, callerSignal, connectionRef, navigate}) =>  {
	navigate("/video_call");
	setCallAccepted(true)
	const peer = new Peer({
		initiator: false,
		trickle: false,
		stream: stream
	})
	peer.on("signal", (data) => {
		socket.emit("answerCall", { signal: data, to: caller })
	})
	peer.on("stream", (stream) => {
		console.log("stream ran ansCall2....");
		userVideo.current.srcObject = stream;
	})
	peer.signal(callerSignal)
	connectionRef.current = peer;
}