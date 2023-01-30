import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

import "./styles.css";

const firebaseConfig = {
    apiKey: "AIzaSyDjQvM3uopf_QI1UDMzDukDOtujIERh5Mw",
    authDomain: "infinite-8feab.firebaseapp.com",
    projectId: "infinite-8feab",
    storageBucket: "infinite-8feab.appspot.com",
    messagingSenderId: "19134767093",
    appId: "1:19134767093:web:cf3fc2a2383cf37fd94abc",
    measurementId: "G-0PX4CWE060"
};
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const App = () => {
    const [videoData, setVideoData] = useState("");

    const getVideo = () => {
        const storageRef = ref(storage, "gs://infinite-8feab.appspot.com/i(n)finite_prores_master_jan25.mov (1080p).mp4");
        getDownloadURL(ref(storage, storageRef)).then((url) => {
            const convertedUrl = url;
            setVideoData(convertedUrl);
            
        }).catch(() => {
            alert("sorry there has been an error");
        })
    }

    const RenderVideo = () => {
        return (
            <video id = "video" controls loop controlsList="nodownload">
                <source src={videoData} type="video/mp4" />
            </video>
        )
    }

    useEffect(() => {
        getVideo();
        setTimeout(() => {
            document.getElementById("video").style.display = "block";
        }, 1500);
    }, []);

    return (
        
        <>
            <div>
               <RenderVideo /> 
            </div>
        </>
    )
}

export default App;