import { useState } from 'react';
import './Main.css';
import Video from "../Video/Video";
import Models from '../Models/Models';
import { useParams } from 'react-router-dom';

function Main() {

  let { referId } = useParams();

  let [page, set_page] = useState("video");

  return (
    <>
    {page == "video" &&
      <Video set_page={set_page} />
    }
    {page == "models" &&
      <Models referId={referId} set_page={set_page} />
    }
    </>
  );
}

export default Main;
