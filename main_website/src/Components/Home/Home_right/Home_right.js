import React from 'react';
import "./Home_right.css";

export default function Home_right() {
  return (
    <>
      <div className="home_right">
        <div className="home_right_upper_content home_right_upper_content_ani_class"><span style={{fontWeight: "bolder"}}>150 NM</span> - PMSM MOTOR</div>
        <video controls className="home_right_upper_content_ani_class" src="01.mp4"></video>
        <div className="home_right_lower_content home_right_lower_content_ani_class">
          <div>T6 alluminium alloy design for to beat all.</div>
          <div>Trance of deadliest food.</div>
        </div>
      </div>
    </>
  )
}
