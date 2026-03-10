import { useRef, useState } from "react"
import Webcam from "react-webcam"
import axios from "axios"

function EmotionCamera(){

const webcamRef = useRef(null)

const [emotion, setEmotion] = useState("Not Started")
const [started, setStarted] = useState(false)

const startDetection = () => {
  setStarted(true)
}

const detectEmotion = async () => {

  const imageSrc = webcamRef.current.getScreenshot()

  const res = await axios.post("http://localhost:5000/detect_emotion",{
    image:imageSrc
  })

  setEmotion(res.data.emotion)
}

return(

<div style={{
  width:"250px",
  padding:"10px",
  border:"2px solid gray",
  borderRadius:"10px",
  background:"#f5f5f5",
  textAlign:"center"
}}>

<h4>Emotion Detection</h4>

<p>Current Emotion: <b>{emotion}</b></p>

{!started && (
<button onClick={startDetection}>
Initialize
</button>
)}

{started && (

<div>

<Webcam
ref={webcamRef}
screenshotFormat="image/jpeg"
width={220}
/>

<button onClick={detectEmotion}>
Detect Emotion
</button>

</div>

)}

</div>

)

}

export default EmotionCamera