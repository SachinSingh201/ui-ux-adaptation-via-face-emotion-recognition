import VideoPlayer from "../components/VideoPlayer"
import EmotionCamera from "../components/EmotionCamera"

function Course(){

return(

<div style={{ position: "relative", height: "100vh" }}>

<h2 style={{ textAlign: "center" }}>CampusX Machine Learning</h2>

{/* Top Right Emotion Camera */}
<div style={{
  position: "absolute",
  top: "20px",
  right: "20px"
}}>
  <EmotionCamera/>
</div>

{/* Center Video Player */}
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px"
}}>
  <VideoPlayer/>
</div>

</div>

)

}

export default Course