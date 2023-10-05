import './Vehicles.css';
import React, { useEffect, useRef, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Vehicles({ model, paint, set_paint, buy_modal }) {
  const [isDragging, setIsDragging] = useState(false);
  const [swipe, set_swipe] = useState(true);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let img5 = useRef(null);
  let img6 = useRef(null);
  let img7 = useRef(null);
  let img8 = useRef(null);
  let img9 = useRef(null);
  
  let bar1 = useRef(null);
  let bar2 = useRef(null);
  let bar3 = useRef(null);
  let bar4 = useRef(null);
  let bar5 = useRef(null);
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
    setCurrentX(e.clientX || e.touches[0].clientX);
};

const handleMouseMove = (e) => {
    if (isDragging) {
        setCurrentX(e.clientX || e.touches[0].clientX);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const clockwise = () => {
    if(model != "Street Rider" || buy_modal) return;
    set_swipe(false);
    if(paint == "#050505") {
        img1.current.classList.add("from1to2");
        img2.current.classList.add("from2to3");
        img3.current.classList.add("from3to4");
        img4.current.classList.add("from4to5");
        img5.current.classList.add("from5to6");
        img6.current.classList.add("from6to7");
        img7.current.classList.add("from7to8");
        img8.current.classList.add("from8to9");
        img9.current.classList.add("from9to1");

        bar1.current.classList.add("from1to9colour");
        bar2.current.classList.add("from9to8colour");
        bar3.current.classList.add("from8to7colour");
        bar4.current.classList.add("from7to6colour");
        bar5.current.classList.add("from6to5colour");
        setTimeout(() => {
            img1.current.style.top = "-16%";
            img1.current.style.left = "9%";
            img1.current.style.width = "26vw";
            img1.current.classList.remove("from1to2");
            
            img2.current.style.top = "-15%";
            img2.current.style.left = "30%";
            img2.current.style.width = "16vw";
            img2.current.classList.remove("from2to3");
            
            img3.current.style.top = "-15%";
            img3.current.style.left = "40%";
            img3.current.style.width = "16vw";
            img3.current.classList.remove("from3to4");
            
            img4.current.style.top = "-16%";
            img4.current.style.left = "43%";
            img4.current.style.width = "26vw";
            img4.current.classList.remove("from4to5");
            
            img5.current.style.top = "-6%";
            img5.current.style.left = "53%";
            img5.current.style.width = "30vw";
            img5.current.classList.remove("from5to6");
            
            img6.current.style.top = "17%";
            img6.current.style.left = "39%";
            img6.current.style.width = "40vw";
            img6.current.classList.remove("from6to7");
            
            img7.current.style.top = "-24%";
            img7.current.style.left = "-23%";
            img7.current.style.width = "80vw";
            img7.current.classList.remove("from7to8");
            
            img8.current.style.top = "17%";
            img8.current.style.left = "-13%";
            img8.current.style.width = "40vw";
            img8.current.classList.remove("from8to9");
            
            img9.current.style.top = "-3%";
            img9.current.style.left = "-10%";
            img9.current.style.width = "30vw";
            img9.current.classList.remove("from9to1");

            bar1.current.style.background = "#C3CADB";
            bar2.current.style.background = "#050505";
            bar3.current.style.background = "#CD2E30";
            bar4.current.style.background = "#757180";
            bar5.current.style.background = "#bbbbbb";

            bar1.current.classList.remove("from1to9colour");
            bar2.current.classList.remove("from9to8colour");
            bar3.current.classList.remove("from8to7colour");
            bar4.current.classList.remove("from7to6colour");
            bar5.current.classList.remove("from6to5colour");

            set_paint("#CD2E30");
        }, 950);
    } else if(paint == "#CD2E30") {
        img1.current.classList.add("from2to3");
        img2.current.classList.add("from3to4");
        img3.current.classList.add("from4to5");
        img4.current.classList.add("from5to6");
        img5.current.classList.add("from6to7");
        img6.current.classList.add("from7to8");
        img7.current.classList.add("from8to9");
        img8.current.classList.add("from9to1");
        img9.current.classList.add("from1to2");

        bar1.current.classList.add("from9to8colour");
        bar2.current.classList.add("from8to7colour");
        bar3.current.classList.add("from7to6colour");
        bar4.current.classList.add("from6to5colour");
        bar5.current.classList.add("from5to4colour");
        setTimeout(() => {
            img1.current.style.top = "-15%";
            img1.current.style.left = "30%";
            img1.current.style.width = "16vw";
            img1.current.classList.remove("from2to3");
            
            img2.current.style.top = "-15%";
            img2.current.style.left = "40%";
            img2.current.style.width = "16vw";
            img2.current.classList.remove("from3to4");
            
            img3.current.style.top = "-16%";
            img3.current.style.left = "43%";
            img3.current.style.width = "26vw";
            img3.current.classList.remove("from4to5");
            
            img4.current.style.top = "-6%";
            img4.current.style.left = "53%";
            img4.current.style.width = "30vw";
            img4.current.classList.remove("from5to6");
            
            img5.current.style.top = "17%";
            img5.current.style.left = "39%";
            img5.current.style.width = "40vw";
            img5.current.classList.remove("from6to7");
            
            img6.current.style.top = "-24%";
            img6.current.style.left = "-23%";
            img6.current.style.width = "80vw";
            img6.current.classList.remove("from7to8");
            
            img7.current.style.top = "17%";
            img7.current.style.left = "-13%";
            img7.current.style.width = "40vw";
            img7.current.classList.remove("from8to9");
            
            img8.current.style.top = "-3%";
            img8.current.style.left = "-10%";
            img8.current.style.width = "30vw";
            img8.current.classList.remove("from9to1");

            img9.current.style.top = "-16%";
            img9.current.style.left = "9%";
            img9.current.style.width = "26vw";
            img9.current.classList.remove("from1to2");

            bar1.current.style.background = "#050505";
            bar2.current.style.background = "#CD2E30";
            bar3.current.style.background = "#757180";
            bar4.current.style.background = "#bbbbbb";
            bar5.current.style.background = "#A79A89";

            bar1.current.classList.remove("from9to8colour");
            bar2.current.classList.remove("from8to7colour");
            bar3.current.classList.remove("from7to6colour");
            bar4.current.classList.remove("from6to5colour");
            bar5.current.classList.remove("from5to4colour");

            set_paint("#757180");
        }, 950);
    } else if(paint == "#757180") {
        img1.current.classList.add("from3to4");
        img2.current.classList.add("from4to5");
        img3.current.classList.add("from5to6");
        img4.current.classList.add("from6to7");
        img5.current.classList.add("from7to8");
        img6.current.classList.add("from8to9");
        img7.current.classList.add("from9to1");
        img8.current.classList.add("from1to2");
        img9.current.classList.add("from2to3");

        bar1.current.classList.add("from8to7colour");
        bar2.current.classList.add("from7to6colour");
        bar3.current.classList.add("from6to5colour");
        bar4.current.classList.add("from5to4colour");
        bar5.current.classList.add("from4to3colour");
        setTimeout(() => {
            img1.current.style.top = "-15%";
            img1.current.style.left = "40%";
            img1.current.style.width = "16vw";
            img1.current.classList.remove("from3to4");
            
            img2.current.style.top = "-16%";
            img2.current.style.left = "43%";
            img2.current.style.width = "26vw";
            img2.current.classList.remove("from4to5");
            
            img3.current.style.top = "-6%";
            img3.current.style.left = "53%";
            img3.current.style.width = "30vw";
            img3.current.classList.remove("from5to6");
            
            img4.current.style.top = "17%";
            img4.current.style.left = "39%";
            img4.current.style.width = "40vw";
            img4.current.classList.remove("from6to7");
            
            img5.current.style.top = "-24%";
            img5.current.style.left = "-23%";
            img5.current.style.width = "80vw";
            img5.current.classList.remove("from7to8");
            
            img6.current.style.top = "17%";
            img6.current.style.left = "-13%";
            img6.current.style.width = "40vw";
            img6.current.classList.remove("from8to9");
            
            img7.current.style.top = "-3%";
            img7.current.style.left = "-10%";
            img7.current.style.width = "30vw";
            img7.current.classList.remove("from9to1");

            img8.current.style.top = "-16%";
            img8.current.style.left = "9%";
            img8.current.style.width = "26vw";
            img8.current.classList.remove("from1to2");

            img9.current.style.top = "-15%";
            img9.current.style.left = "30%";
            img9.current.style.width = "16vw";
            img9.current.classList.remove("from2to3");

            bar1.current.style.background = "#CD2E30";
            bar2.current.style.background = "#757180";
            bar3.current.style.background = "#bbbbbb";
            bar4.current.style.background = "#A79A89";
            bar5.current.style.background = "#DAA287";

            bar1.current.classList.remove("from8to7colour");
            bar2.current.classList.remove("from7to6colour");
            bar3.current.classList.remove("from6to5colour");
            bar4.current.classList.remove("from5to4colour");
            bar5.current.classList.remove("from4to3colour");

            set_paint("#bbbbbb");
        }, 950);
    } else if(paint == "#bbbbbb") {
        img1.current.classList.add("from4to5");
        img2.current.classList.add("from5to6");
        img3.current.classList.add("from6to7");
        img4.current.classList.add("from7to8");
        img5.current.classList.add("from8to9");
        img6.current.classList.add("from9to1");
        img7.current.classList.add("from1to2");
        img8.current.classList.add("from2to3");
        img9.current.classList.add("from3to4");

        bar1.current.classList.add("from7to6colour");
        bar2.current.classList.add("from6to5colour");
        bar3.current.classList.add("from5to4colour");
        bar4.current.classList.add("from4to3colour");
        bar5.current.classList.add("from3to2colour");
        setTimeout(() => {
            img1.current.style.top = "-16%";
            img1.current.style.left = "43%";
            img1.current.style.width = "26vw";
            img1.current.classList.remove("from4to5");
            
            img2.current.style.top = "-6%";
            img2.current.style.left = "53%";
            img2.current.style.width = "30vw";
            img2.current.classList.remove("from5to6");
            
            img3.current.style.top = "17%";
            img3.current.style.left = "39%";
            img3.current.style.width = "40vw";
            img3.current.classList.remove("from6to7");
            
            img4.current.style.top = "-24%";
            img4.current.style.left = "-23%";
            img4.current.style.width = "80vw";
            img4.current.classList.remove("from7to8");
            
            img5.current.style.top = "17%";
            img5.current.style.left = "-13%";
            img5.current.style.width = "40vw";
            img5.current.classList.remove("from8to9");
            
            img6.current.style.top = "-3%";
            img6.current.style.left = "-10%";
            img6.current.style.width = "30vw";
            img6.current.classList.remove("from9to1");

            img7.current.style.top = "-16%";
            img7.current.style.left = "9%";
            img7.current.style.width = "26vw";
            img7.current.classList.remove("from1to2");

            img8.current.style.top = "-15%";
            img8.current.style.left = "30%";
            img8.current.style.width = "16vw";
            img8.current.classList.remove("from2to3");

            img9.current.style.top = "-15%";
            img9.current.style.left = "40%";
            img9.current.style.width = "16vw";
            img9.current.classList.remove("from3to4");

            bar1.current.style.background = "#757180";
            bar2.current.style.background = "#bbbbbb";
            bar3.current.style.background = "#A79A89";
            bar4.current.style.background = "#DAA287";
            bar5.current.style.background = "#2C384D";

            bar1.current.classList.remove("from7to6colour");
            bar2.current.classList.remove("from6to5colour");
            bar3.current.classList.remove("from5to4colour");
            bar4.current.classList.remove("from4to3colour");
            bar5.current.classList.remove("from3to2colour");

            set_paint("#A79A89");
        }, 950);
    } else if(paint == "#A79A89") {
        img1.current.classList.add("from5to6");
        img2.current.classList.add("from6to7");
        img3.current.classList.add("from7to8");
        img4.current.classList.add("from8to9");
        img5.current.classList.add("from9to1");
        img6.current.classList.add("from1to2");
        img7.current.classList.add("from2to3");
        img8.current.classList.add("from3to4");
        img9.current.classList.add("from4to5");

        bar1.current.classList.add("from6to5colour");
        bar2.current.classList.add("from5to4colour");
        bar3.current.classList.add("from4to3colour");
        bar4.current.classList.add("from3to2colour");
        bar5.current.classList.add("from2to1colour");
        setTimeout(() => {
            img1.current.style.top = "-6%";
            img1.current.style.left = "53%";
            img1.current.style.width = "30vw";
            img1.current.classList.remove("from5to6");
            
            img2.current.style.top = "17%";
            img2.current.style.left = "39%";
            img2.current.style.width = "40vw";
            img2.current.classList.remove("from6to7");
            
            img3.current.style.top = "-24%";
            img3.current.style.left = "-23%";
            img3.current.style.width = "80vw";
            img3.current.classList.remove("from7to8");
            
            img4.current.style.top = "17%";
            img4.current.style.left = "-13%";
            img4.current.style.width = "40vw";
            img4.current.classList.remove("from8to9");
            
            img5.current.style.top = "-3%";
            img5.current.style.left = "-10%";
            img5.current.style.width = "30vw";
            img5.current.classList.remove("from9to1");

            img6.current.style.top = "-16%";
            img6.current.style.left = "9%";
            img6.current.style.width = "26vw";
            img6.current.classList.remove("from1to2");

            img7.current.style.top = "-15%";
            img7.current.style.left = "30%";
            img7.current.style.width = "16vw";
            img7.current.classList.remove("from2to3");

            img8.current.style.top = "-15%";
            img8.current.style.left = "40%";
            img8.current.style.width = "16vw";
            img8.current.classList.remove("from3to4");
            
            img9.current.style.top = "-16%";
            img9.current.style.left = "43%";
            img9.current.style.width = "26vw";
            img9.current.classList.remove("from4to5");

            bar1.current.style.background = "#bbbbbb";
            bar2.current.style.background = "#A79A89";
            bar3.current.style.background = "#DAA287";
            bar4.current.style.background = "#2C384D";
            bar5.current.style.background = "#FCFCFC";
            
            bar1.current.classList.remove("from6to5colour");
            bar2.current.classList.remove("from5to4colour");
            bar3.current.classList.remove("from4to3colour");
            bar4.current.classList.remove("from3to2colour");
            bar5.current.classList.remove("from2to1colour");

            set_paint("#DAA287");
        }, 950);
    } else if(paint == "#DAA287") {
        img1.current.classList.add("from6to7");
        img2.current.classList.add("from7to8");
        img3.current.classList.add("from8to9");
        img4.current.classList.add("from9to1");
        img5.current.classList.add("from1to2");
        img6.current.classList.add("from2to3");
        img7.current.classList.add("from3to4");
        img8.current.classList.add("from4to5");
        img9.current.classList.add("from5to6");

        bar1.current.classList.add("from5to4colour");
        bar2.current.classList.add("from4to3colour");
        bar3.current.classList.add("from3to2colour");
        bar4.current.classList.add("from2to1colour");
        bar5.current.classList.add("from1to9colour");
        setTimeout(() => {
            img1.current.style.top = "17%";
            img1.current.style.left = "39%";
            img1.current.style.width = "40vw";
            img1.current.classList.remove("from6to7");
            
            img2.current.style.top = "-24%";
            img2.current.style.left = "-23%";
            img2.current.style.width = "80vw";
            img2.current.classList.remove("from7to8");
            
            img3.current.style.top = "17%";
            img3.current.style.left = "-13%";
            img3.current.style.width = "40vw";
            img3.current.classList.remove("from8to9");
            
            img4.current.style.top = "-3%";
            img4.current.style.left = "-10%";
            img4.current.style.width = "30vw";
            img4.current.classList.remove("from9to1");
            
            img5.current.style.top = "-16%";
            img5.current.style.left = "9%";
            img5.current.style.width = "26vw";
            img5.current.classList.remove("from1to2");
            
            img6.current.style.top = "-15%";
            img6.current.style.left = "30%";
            img6.current.style.width = "16vw";
            img6.current.classList.remove("from2to3");
            
            img7.current.style.top = "-15%";
            img7.current.style.left = "40%";
            img7.current.style.width = "16vw";
            img7.current.classList.remove("from3to4");
            
            img8.current.style.top = "-16%";
            img8.current.style.left = "43%";
            img8.current.style.width = "26vw";
            img8.current.classList.remove("from4to5");
            
            img9.current.style.top = "-6%";
            img9.current.style.left = "53%";
            img9.current.style.width = "30vw";
            img9.current.classList.remove("from5to6");

            bar1.current.style.background = "#A79A89";
            bar2.current.style.background = "#DAA287";
            bar3.current.style.background = "#2C384D";
            bar4.current.style.background = "#FCFCFC";
            bar5.current.style.background = "#C3CADB";
            
            bar1.current.classList.remove("from5to4colour");
            bar2.current.classList.remove("from4to3colour");
            bar3.current.classList.remove("from3to2colour");
            bar4.current.classList.remove("from2to1colour");
            bar5.current.classList.remove("from1to9colour");
            
            set_paint("#2C384D");
        }, 950);
    } else if(paint == "#2C384D") {
        img1.current.classList.add("from7to8");
        img2.current.classList.add("from8to9");
        img3.current.classList.add("from9to1");
        img4.current.classList.add("from1to2");
        img5.current.classList.add("from2to3");
        img6.current.classList.add("from3to4");
        img7.current.classList.add("from4to5");
        img8.current.classList.add("from5to6");
        img9.current.classList.add("from6to7");

        bar1.current.classList.add("from4to3colour");
        bar2.current.classList.add("from3to2colour");
        bar3.current.classList.add("from2to1colour");
        bar4.current.classList.add("from1to9colour");
        bar5.current.classList.add("from9to8colour");
        setTimeout(() => {
            img1.current.style.top = "-24%";
            img1.current.style.left = "-23%";
            img1.current.style.width = "80vw";
            img1.current.classList.remove("from7to8");
            
            img2.current.style.top = "17%";
            img2.current.style.left = "-13%";
            img2.current.style.width = "40vw";
            img2.current.classList.remove("from8to9");
            
            img3.current.style.top = "-3%";
            img3.current.style.left = "-10%";
            img3.current.style.width = "30vw";
            img3.current.classList.remove("from9to1");
            
            img4.current.style.top = "-16%";
            img4.current.style.left = "9%";
            img4.current.style.width = "26vw";
            img4.current.classList.remove("from1to2");
            
            img5.current.style.top = "-15%";
            img5.current.style.left = "30%";
            img5.current.style.width = "16vw";
            img5.current.classList.remove("from2to3");
            
            img6.current.style.top = "-15%";
            img6.current.style.left = "40%";
            img6.current.style.width = "16vw";
            img6.current.classList.remove("from3to4");
            
            img7.current.style.top = "-16%";
            img7.current.style.left = "43%";
            img7.current.style.width = "26vw";
            img7.current.classList.remove("from4to5");
            
            img8.current.style.top = "-6%";
            img8.current.style.left = "53%";
            img8.current.style.width = "30vw";
            img8.current.classList.remove("from5to6");
            
            img9.current.style.top = "17%";
            img9.current.style.left = "39%";
            img9.current.style.width = "40vw";
            img9.current.classList.remove("from6to7");

            bar1.current.style.background = "#DAA287";
            bar2.current.style.background = "#2C384D";
            bar3.current.style.background = "#FCFCFC";
            bar4.current.style.background = "#C3CADB";
            bar5.current.style.background = "#050505";
            
            bar1.current.classList.remove("from4to3colour");
            bar2.current.classList.remove("from3to2colour");
            bar3.current.classList.remove("from2to1colour");
            bar4.current.classList.remove("from1to9colour");
            bar5.current.classList.remove("from9to8colour");
            
            set_paint("#FCFCFC");
        }, 950);
    } else if(paint == "#FCFCFC") {
        img1.current.classList.add("from8to9");
        img2.current.classList.add("from9to1");
        img3.current.classList.add("from1to2");
        img4.current.classList.add("from2to3");
        img5.current.classList.add("from3to4");
        img6.current.classList.add("from4to5");
        img7.current.classList.add("from5to6");
        img8.current.classList.add("from6to7");
        img9.current.classList.add("from7to8");

        bar1.current.classList.add("from3to2colour");
        bar2.current.classList.add("from2to1colour");
        bar3.current.classList.add("from1to9colour");
        bar4.current.classList.add("from9to8colour");
        bar5.current.classList.add("from8to7colour");
        setTimeout(() => {
            img1.current.style.top = "17%";
            img1.current.style.left = "-13%";
            img1.current.style.width = "40vw";
            img1.current.classList.remove("from8to9");
            
            img2.current.style.top = "-3%";
            img2.current.style.left = "-10%";
            img2.current.style.width = "30vw";
            img2.current.classList.remove("from9to1");
            
            img3.current.style.top = "-16%";
            img3.current.style.left = "9%";
            img3.current.style.width = "26vw";
            img3.current.classList.remove("from1to2");
            
            img4.current.style.top = "-15%";
            img4.current.style.left = "30%";
            img4.current.style.width = "16vw";
            img4.current.classList.remove("from2to3");
            
            img5.current.style.top = "-15%";
            img5.current.style.left = "40%";
            img5.current.style.width = "16vw";
            img5.current.classList.remove("from3to4");
            
            img6.current.style.top = "-16%";
            img6.current.style.left = "43%";
            img6.current.style.width = "26vw";
            img6.current.classList.remove("from4to5");
            
            img7.current.style.top = "-6%";
            img7.current.style.left = "53%";
            img7.current.style.width = "30vw";
            img7.current.classList.remove("from5to6");
            
            img8.current.style.top = "17%";
            img8.current.style.left = "39%";
            img8.current.style.width = "40vw";
            img8.current.classList.remove("from6to7");
            
            img9.current.style.top = "-24%";
            img9.current.style.left = "-23%";
            img9.current.style.width = "80vw";
            img9.current.classList.remove("from7to8");

            bar1.current.style.background = "#2C384D";
            bar2.current.style.background = "#FCFCFC";
            bar3.current.style.background = "#C3CADB";
            bar4.current.style.background = "#050505";
            bar5.current.style.background = "#CD2E30";
            
            bar1.current.classList.remove("from3to2colour");
            bar2.current.classList.remove("from2to1colour");
            bar3.current.classList.remove("from1to9colour");
            bar4.current.classList.remove("from9to8colour");
            bar5.current.classList.remove("from8to7colour");
            
            set_paint("#C3CADB");
        }, 950);
    } else if(paint == "#C3CADB") {
        img1.current.classList.add("from9to1");
        img2.current.classList.add("from1to2");
        img3.current.classList.add("from2to3");
        img4.current.classList.add("from3to4");
        img5.current.classList.add("from4to5");
        img6.current.classList.add("from5to6");
        img7.current.classList.add("from6to7");
        img8.current.classList.add("from7to8");
        img9.current.classList.add("from8to9");

        bar1.current.classList.add("from2to1colour");
        bar2.current.classList.add("from1to9colour");
        bar3.current.classList.add("from9to8colour");
        bar4.current.classList.add("from8to7colour");
        bar5.current.classList.add("from7to6colour");
        setTimeout(() => {
            img1.current.style.top = "-3%";
            img1.current.style.left = "-10%";
            img1.current.style.width = "30vw";
            img1.current.classList.remove("from9to1");
            
            img2.current.style.top = "-16%";
            img2.current.style.left = "9%";
            img2.current.style.width = "26vw";
            img2.current.classList.remove("from1to2");
            
            img3.current.style.top = "-15%";
            img3.current.style.left = "30%";
            img3.current.style.width = "16vw";
            img3.current.classList.remove("from2to3");
            
            img4.current.style.top = "-15%";
            img4.current.style.left = "40%";
            img4.current.style.width = "16vw";
            img4.current.classList.remove("from3to4");
            
            img5.current.style.top = "-16%";
            img5.current.style.left = "43%";
            img5.current.style.width = "26vw";
            img5.current.classList.remove("from4to5");
            
            img6.current.style.top = "-6%";
            img6.current.style.left = "53%";
            img6.current.style.width = "30vw";
            img6.current.classList.remove("from5to6");
            
            img7.current.style.top = "17%";
            img7.current.style.left = "39%";
            img7.current.style.width = "40vw";
            img7.current.classList.remove("from6to7");
            
            img8.current.style.top = "-24%";
            img8.current.style.left = "-23%";
            img8.current.style.width = "80vw";
            img8.current.classList.remove("from7to8");
            
            img9.current.style.top = "17%";
            img9.current.style.left = "-13%";
            img9.current.style.width = "40vw";
            img9.current.classList.remove("from8to9");

            bar1.current.style.background = "#FCFCFC";
            bar2.current.style.background = "#C3CADB";
            bar3.current.style.background = "#050505";
            bar4.current.style.background = "#CD2E30";
            bar5.current.style.background = "#757180";
            
            bar1.current.classList.remove("from2to1colour");
            bar2.current.classList.remove("from1to9colour");
            bar3.current.classList.remove("from9to8colour");
            bar4.current.classList.remove("from8to7colour");
            bar5.current.classList.remove("from7to6colour");

            set_paint("#050505");
        }, 950);
    }
    setTimeout(() => {
        set_swipe(true);
    }, 1000);
};
const anti_clockwise = () => {
    if(model != "Street Rider" || buy_modal) return;
    set_swipe(false);
    if(paint == "#050505") {
        img1.current.classList.add("from1to9");
        img2.current.classList.add("from2to1");
        img3.current.classList.add("from3to2");
        img4.current.classList.add("from4to3");
        img5.current.classList.add("from5to4");
        img6.current.classList.add("from6to5");
        img7.current.classList.add("from7to6");
        img8.current.classList.add("from8to7");
        img9.current.classList.add("from9to8");

        bar1.current.classList.add("from1to2colour");
        bar2.current.classList.add("from9to1colour");
        bar3.current.classList.add("from8to9colour");
        bar4.current.classList.add("from7to8colour");
        bar5.current.classList.add("from6to7colour");
        setTimeout(() => {
            img1.current.style.top = "17%";
            img1.current.style.left = "-13%";
            img1.current.style.width = "40vw";
            img1.current.classList.remove("from1to9");

            img2.current.style.top = "-3%";
            img2.current.style.left = "-10%";
            img2.current.style.width = "30vw";
            img2.current.classList.remove("from2to1");
            
            img3.current.style.top = "-16%";
            img3.current.style.left = "9%";
            img3.current.style.width = "26vw";
            img3.current.classList.remove("from3to2");
            
            img4.current.style.top = "-15%";
            img4.current.style.left = "30%";
            img4.current.style.width = "16vw";
            img4.current.classList.remove("from4to3");
            
            img5.current.style.top = "-15%";
            img5.current.style.left = "40%";
            img5.current.style.width = "16vw";
            img5.current.classList.remove("from5to4");
            
            img6.current.style.top = "-16%";
            img6.current.style.left = "43%";
            img6.current.style.width = "26vw";
            img6.current.classList.remove("from6to5");
            
            img7.current.style.top = "-6%";
            img7.current.style.left = "53%";
            img7.current.style.width = "30vw";
            img7.current.classList.remove("from7to6");
            
            img8.current.style.top = "17%";
            img8.current.style.left = "39%";
            img8.current.style.width = "40vw";
            img8.current.classList.remove("from8to7");
            
            img9.current.style.top = "-24%";
            img9.current.style.left = "-23%";
            img9.current.style.width = "80vw";
            img9.current.classList.remove("from9to8");

            bar1.current.style.background = "#2C384D";
            bar2.current.style.background = "#FCFCFC";
            bar3.current.style.background = "#C3CADB";
            bar4.current.style.background = "#050505";
            bar5.current.style.background = "#CD2E30";
            
            bar1.current.classList.remove("from1to2colour");
            bar2.current.classList.remove("from9to1colour");
            bar3.current.classList.remove("from8to9colour");
            bar4.current.classList.remove("from7to8colour");
            bar5.current.classList.remove("from6to7colour");

            set_paint("#C3CADB");
        }, 950);
    } else if(paint == "#C3CADB") {
        img1.current.classList.add("from9to8");
        img2.current.classList.add("from1to9");
        img3.current.classList.add("from2to1");
        img4.current.classList.add("from3to2");
        img5.current.classList.add("from4to3");
        img6.current.classList.add("from5to4");
        img7.current.classList.add("from6to5");
        img8.current.classList.add("from7to6");
        img9.current.classList.add("from8to7");

        bar1.current.classList.add("from2to3colour");
        bar2.current.classList.add("from1to2colour");
        bar3.current.classList.add("from9to1colour");
        bar4.current.classList.add("from8to9colour");
        bar5.current.classList.add("from7to8colour");
        setTimeout(() => {
            img1.current.style.top = "-24%";
            img1.current.style.left = "-23%";
            img1.current.style.width = "80vw";
            img1.current.classList.remove("from9to8");

            img2.current.style.top = "17%";
            img2.current.style.left = "-13%";
            img2.current.style.width = "40vw";
            img2.current.classList.remove("from1to9");

            img3.current.style.top = "-3%";
            img3.current.style.left = "-10%";
            img3.current.style.width = "30vw";
            img3.current.classList.remove("from2to1");
            
            img4.current.style.top = "-16%";
            img4.current.style.left = "9%";
            img4.current.style.width = "26vw";
            img4.current.classList.remove("from3to2");
            
            img5.current.style.top = "-15%";
            img5.current.style.left = "30%";
            img5.current.style.width = "16vw";
            img5.current.classList.remove("from4to3");
            
            img6.current.style.top = "-15%";
            img6.current.style.left = "40%";
            img6.current.style.width = "16vw";
            img6.current.classList.remove("from5to4");
            
            img7.current.style.top = "-16%";
            img7.current.style.left = "43%";
            img7.current.style.width = "26vw";
            img7.current.classList.remove("from6to5");
            
            img8.current.style.top = "-6%";
            img8.current.style.left = "53%";
            img8.current.style.width = "30vw";
            img8.current.classList.remove("from7to6");
            
            img9.current.style.top = "17%";
            img9.current.style.left = "39%";
            img9.current.style.width = "40vw";
            img9.current.classList.remove("from8to7");
            
            bar1.current.style.background = "#DAA287";
            bar2.current.style.background = "#2C384D";
            bar3.current.style.background = "#FCFCFC";
            bar4.current.style.background = "#C3CADB";
            bar5.current.style.background = "#050505";
            
            bar1.current.classList.remove("from2to3colour");
            bar2.current.classList.remove("from1to2colour");
            bar3.current.classList.remove("from9to1colour");
            bar4.current.classList.remove("from8to9colour");
            bar5.current.classList.remove("from7to8colour");
            
            set_paint("#FCFCFC");
        }, 950);
    } else if(paint == "#FCFCFC") {
        img1.current.classList.add("from8to7");
        img2.current.classList.add("from9to8");
        img3.current.classList.add("from1to9");
        img4.current.classList.add("from2to1");
        img5.current.classList.add("from3to2");
        img6.current.classList.add("from4to3");
        img7.current.classList.add("from5to4");
        img8.current.classList.add("from6to5");
        img9.current.classList.add("from7to6");

        bar1.current.classList.add("from3to4colour");
        bar2.current.classList.add("from2to3colour");
        bar3.current.classList.add("from1to2colour");
        bar4.current.classList.add("from9to1colour");
        bar5.current.classList.add("from8to9colour");
        setTimeout(() => {
            img1.current.style.top = "17%";
            img1.current.style.left = "39%";
            img1.current.style.width = "40vw";
            img1.current.classList.remove("from8to7");

            img2.current.style.top = "-24%";
            img2.current.style.left = "-23%";
            img2.current.style.width = "80vw";
            img2.current.classList.remove("from9to8");

            img3.current.style.top = "17%";
            img3.current.style.left = "-13%";
            img3.current.style.width = "40vw";
            img3.current.classList.remove("from1to9");

            img4.current.style.top = "-3%";
            img4.current.style.left = "-10%";
            img4.current.style.width = "30vw";
            img4.current.classList.remove("from2to1");
            
            img5.current.style.top = "-16%";
            img5.current.style.left = "9%";
            img5.current.style.width = "26vw";
            img5.current.classList.remove("from3to2");
            
            img6.current.style.top = "-15%";
            img6.current.style.left = "30%";
            img6.current.style.width = "16vw";
            img6.current.classList.remove("from4to3");
            
            img7.current.style.top = "-15%";
            img7.current.style.left = "40%";
            img7.current.style.width = "16vw";
            img7.current.classList.remove("from5to4");
            
            img8.current.style.top = "-16%";
            img8.current.style.left = "43%";
            img8.current.style.width = "26vw";
            img8.current.classList.remove("from6to5");
            
            img9.current.style.top = "-6%";
            img9.current.style.left = "53%";
            img9.current.style.width = "30vw";
            img9.current.classList.remove("from7to6");

            bar1.current.style.background = "#A79A89";
            bar2.current.style.background = "#DAA287";
            bar3.current.style.background = "#2C384D";
            bar4.current.style.background = "#FCFCFC";
            bar5.current.style.background = "#C3CADB";
            
            bar1.current.classList.remove("from3to4colour");
            bar2.current.classList.remove("from2to3colour");
            bar3.current.classList.remove("from1to2colour");
            bar4.current.classList.remove("from9to1colour");
            bar5.current.classList.remove("from8to9colour");
            
            set_paint("#2C384D");
        }, 950);
    } else if(paint == "#2C384D") {
        img1.current.classList.add("from7to6");
        img2.current.classList.add("from8to7");
        img3.current.classList.add("from9to8");
        img4.current.classList.add("from1to9");
        img5.current.classList.add("from2to1");
        img6.current.classList.add("from3to2");
        img7.current.classList.add("from4to3");
        img8.current.classList.add("from5to4");
        img9.current.classList.add("from6to5");

        bar1.current.classList.add("from4to5colour");
        bar2.current.classList.add("from3to4colour");
        bar3.current.classList.add("from2to3colour");
        bar4.current.classList.add("from1to2colour");
        bar5.current.classList.add("from9to1colour");
        setTimeout(() => {
            img1.current.style.top = "-6%";
            img1.current.style.left = "53%";
            img1.current.style.width = "30vw";
            img1.current.classList.remove("from7to6");

            img2.current.style.top = "17%";
            img2.current.style.left = "39%";
            img2.current.style.width = "40vw";
            img2.current.classList.remove("from8to7");

            img3.current.style.top = "-24%";
            img3.current.style.left = "-23%";
            img3.current.style.width = "80vw";
            img3.current.classList.remove("from9to8");

            img4.current.style.top = "17%";
            img4.current.style.left = "-13%";
            img4.current.style.width = "40vw";
            img4.current.classList.remove("from1to9");

            img5.current.style.top = "-3%";
            img5.current.style.left = "-10%";
            img5.current.style.width = "30vw";
            img5.current.classList.remove("from2to1");
            
            img6.current.style.top = "-16%";
            img6.current.style.left = "9%";
            img6.current.style.width = "26vw";
            img6.current.classList.remove("from3to2");
            
            img7.current.style.top = "-15%";
            img7.current.style.left = "30%";
            img7.current.style.width = "16vw";
            img7.current.classList.remove("from4to3");
            
            img8.current.style.top = "-15%";
            img8.current.style.left = "40%";
            img8.current.style.width = "16vw";
            img8.current.classList.remove("from5to4");
            
            img9.current.style.top = "-16%";
            img9.current.style.left = "43%";
            img9.current.style.width = "26vw";
            img9.current.classList.remove("from6to5");
            
            bar1.current.style.background = "#bbbbbb";
            bar2.current.style.background = "#A79A89";
            bar3.current.style.background = "#DAA287";
            bar4.current.style.background = "#2C384D";
            bar5.current.style.background = "#FCFCFC";
            
            bar1.current.classList.remove("from4to5colour");
            bar2.current.classList.remove("from3to4colour");
            bar3.current.classList.remove("from2to3colour");
            bar4.current.classList.remove("from1to2colour");
            bar5.current.classList.remove("from9to1colour");
            
            set_paint("#DAA287");
        }, 950);
    } else if(paint == "#DAA287") {
        img1.current.classList.add("from6to5");
        img2.current.classList.add("from7to6");
        img3.current.classList.add("from8to7");
        img4.current.classList.add("from9to8");
        img5.current.classList.add("from1to9");
        img6.current.classList.add("from2to1");
        img7.current.classList.add("from3to2");
        img8.current.classList.add("from4to3");
        img9.current.classList.add("from5to4");

        bar1.current.classList.add("from5to6colour");
        bar2.current.classList.add("from4to5colour");
        bar3.current.classList.add("from3to4colour");
        bar4.current.classList.add("from2to3colour");
        bar5.current.classList.add("from1to2colour");
        setTimeout(() => {
            img1.current.style.top = "-16%";
            img1.current.style.left = "43%";
            img1.current.style.width = "26vw";
            img1.current.classList.remove("from6to5");

            img2.current.style.top = "-6%";
            img2.current.style.left = "53%";
            img2.current.style.width = "30vw";
            img2.current.classList.remove("from7to6");

            img3.current.style.top = "17%";
            img3.current.style.left = "39%";
            img3.current.style.width = "40vw";
            img3.current.classList.remove("from8to7");

            img4.current.style.top = "-24%";
            img4.current.style.left = "-23%";
            img4.current.style.width = "80vw";
            img4.current.classList.remove("from9to8");

            img5.current.style.top = "17%";
            img5.current.style.left = "-13%";
            img5.current.style.width = "40vw";
            img5.current.classList.remove("from1to9");

            img6.current.style.top = "-3%";
            img6.current.style.left = "-10%";
            img6.current.style.width = "30vw";
            img6.current.classList.remove("from2to1");
            
            img7.current.style.top = "-16%";
            img7.current.style.left = "9%";
            img7.current.style.width = "26vw";
            img7.current.classList.remove("from3to2");
            
            img8.current.style.top = "-15%";
            img8.current.style.left = "30%";
            img8.current.style.width = "16vw";
            img8.current.classList.remove("from4to3");
            
            img9.current.style.top = "-15%";
            img9.current.style.left = "40%";
            img9.current.style.width = "16vw";
            img9.current.classList.remove("from5to4");

            bar1.current.style.background = "#757180";
            bar2.current.style.background = "#bbbbbb";
            bar3.current.style.background = "#A79A89";
            bar4.current.style.background = "#DAA287";
            bar5.current.style.background = "#2C384D";
            
            bar1.current.classList.remove("from5to6colour");
            bar2.current.classList.remove("from4to5colour");
            bar3.current.classList.remove("from3to4colour");
            bar4.current.classList.remove("from2to3colour");
            bar5.current.classList.remove("from1to2colour");
            
            set_paint("#A79A89");
        }, 950);
    } else if(paint == "#A79A89") {
        img1.current.classList.add("from5to4");
        img2.current.classList.add("from6to5");
        img3.current.classList.add("from7to6");
        img4.current.classList.add("from8to7");
        img5.current.classList.add("from9to8");
        img6.current.classList.add("from1to9");
        img7.current.classList.add("from2to1");
        img8.current.classList.add("from3to2");
        img9.current.classList.add("from4to3");

        bar1.current.classList.add("from6to7colour");
        bar2.current.classList.add("from5to6colour");
        bar3.current.classList.add("from4to5colour");
        bar4.current.classList.add("from3to4colour");
        bar5.current.classList.add("from2to3colour");
        setTimeout(() => {
            img1.current.style.top = "-15%";
            img1.current.style.left = "40%";
            img1.current.style.width = "16vw";
            img1.current.classList.remove("from5to4");

            img2.current.style.top = "-16%";
            img2.current.style.left = "43%";
            img2.current.style.width = "26vw";
            img2.current.classList.remove("from6to5");

            img3.current.style.top = "-6%";
            img3.current.style.left = "53%";
            img3.current.style.width = "30vw";
            img3.current.classList.remove("from7to6");

            img4.current.style.top = "17%";
            img4.current.style.left = "39%";
            img4.current.style.width = "40vw";
            img4.current.classList.remove("from8to7");

            img5.current.style.top = "-24%";
            img5.current.style.left = "-23%";
            img5.current.style.width = "80vw";
            img5.current.classList.remove("from9to8");

            img6.current.style.top = "17%";
            img6.current.style.left = "-13%";
            img6.current.style.width = "40vw";
            img6.current.classList.remove("from1to9");

            img7.current.style.top = "-3%";
            img7.current.style.left = "-10%";
            img7.current.style.width = "30vw";
            img7.current.classList.remove("from2to1");
            
            img8.current.style.top = "-16%";
            img8.current.style.left = "9%";
            img8.current.style.width = "26vw";
            img8.current.classList.remove("from3to2");
            
            img9.current.style.top = "-15%";
            img9.current.style.left = "30%";
            img9.current.style.width = "16vw";
            img9.current.classList.remove("from4to3");

            bar1.current.style.background = "#CD2E30";
            bar2.current.style.background = "#757180";
            bar3.current.style.background = "#bbbbbb";
            bar4.current.style.background = "#A79A89";
            bar5.current.style.background = "#DAA287";
            
            bar1.current.classList.remove("from6to7colour");
            bar2.current.classList.remove("from5to6colour");
            bar3.current.classList.remove("from4to5colour");
            bar4.current.classList.remove("from3to4colour");
            bar5.current.classList.remove("from2to3colour");
            
            set_paint("#bbbbbb");
        }, 950);
    } else if(paint == "#bbbbbb") {
        img1.current.classList.add("from4to3");
        img2.current.classList.add("from5to4");
        img3.current.classList.add("from6to5");
        img4.current.classList.add("from7to6");
        img5.current.classList.add("from8to7");
        img6.current.classList.add("from9to8");
        img7.current.classList.add("from1to9");
        img8.current.classList.add("from2to1");
        img9.current.classList.add("from3to2");

        bar1.current.classList.add("from7to8colour");
        bar2.current.classList.add("from6to7colour");
        bar3.current.classList.add("from5to6colour");
        bar4.current.classList.add("from4to5colour");
        bar5.current.classList.add("from3to4colour");
        setTimeout(() => {
            img1.current.style.top = "-15%";
            img1.current.style.left = "30%";
            img1.current.style.width = "16vw";
            img1.current.classList.remove("from4to3");

            img2.current.style.top = "-15%";
            img2.current.style.left = "40%";
            img2.current.style.width = "16vw";
            img2.current.classList.remove("from5to4");

            img3.current.style.top = "-16%";
            img3.current.style.left = "43%";
            img3.current.style.width = "26vw";
            img3.current.classList.remove("from6to5");

            img4.current.style.top = "-6%";
            img4.current.style.left = "53%";
            img4.current.style.width = "30vw";
            img4.current.classList.remove("from7to6");

            img5.current.style.top = "17%";
            img5.current.style.left = "39%";
            img5.current.style.width = "40vw";
            img5.current.classList.remove("from8to7");

            img6.current.style.top = "-24%";
            img6.current.style.left = "-23%";
            img6.current.style.width = "80vw";
            img6.current.classList.remove("from9to8");

            img7.current.style.top = "17%";
            img7.current.style.left = "-13%";
            img7.current.style.width = "40vw";
            img7.current.classList.remove("from1to9");

            img8.current.style.top = "-3%";
            img8.current.style.left = "-10%";
            img8.current.style.width = "30vw";
            img8.current.classList.remove("from2to1");
            
            img9.current.style.top = "-16%";
            img9.current.style.left = "9%";
            img9.current.style.width = "26vw";
            img9.current.classList.remove("from3to2");

            bar1.current.style.background = "#050505";
            bar2.current.style.background = "#CD2E30";
            bar3.current.style.background = "#757180";
            bar4.current.style.background = "#bbbbbb";
            bar5.current.style.background = "#A79A89";
            
            bar1.current.classList.remove("from7to8colour");
            bar2.current.classList.remove("from6to7colour");
            bar3.current.classList.remove("from5to6colour");
            bar4.current.classList.remove("from4to5colour");
            bar5.current.classList.remove("from3to4colour");
            
            set_paint("#757180");
        }, 950);
    } else if(paint == "#757180") {
        img1.current.classList.add("from3to2");
        img2.current.classList.add("from4to3");
        img3.current.classList.add("from5to4");
        img4.current.classList.add("from6to5");
        img5.current.classList.add("from7to6");
        img6.current.classList.add("from8to7");
        img7.current.classList.add("from9to8");
        img8.current.classList.add("from1to9");
        img9.current.classList.add("from2to1");

        bar1.current.classList.add("from8to9colour");
        bar2.current.classList.add("from7to8colour");
        bar3.current.classList.add("from6to7colour");
        bar4.current.classList.add("from5to6colour");
        bar5.current.classList.add("from4to5colour");
        setTimeout(() => {
            img1.current.style.top = "-16%";
            img1.current.style.left = "9%";
            img1.current.style.width = "26vw";
            img1.current.classList.remove("from3to2");

            img2.current.style.top = "-15%";
            img2.current.style.left = "30%";
            img2.current.style.width = "16vw";
            img2.current.classList.remove("from4to3");

            img3.current.style.top = "-15%";
            img3.current.style.left = "40%";
            img3.current.style.width = "16vw";
            img3.current.classList.remove("from5to4");

            img4.current.style.top = "-16%";
            img4.current.style.left = "43%";
            img4.current.style.width = "26vw";
            img4.current.classList.remove("from6to5");

            img5.current.style.top = "-6%";
            img5.current.style.left = "53%";
            img5.current.style.width = "30vw";
            img5.current.classList.remove("from7to6");

            img6.current.style.top = "17%";
            img6.current.style.left = "39%";
            img6.current.style.width = "40vw";
            img6.current.classList.remove("from8to7");

            img7.current.style.top = "-24%";
            img7.current.style.left = "-23%";
            img7.current.style.width = "80vw";
            img7.current.classList.remove("from9to8");

            img8.current.style.top = "17%";
            img8.current.style.left = "-13%";
            img8.current.style.width = "40vw";
            img8.current.classList.remove("from1to9");

            img9.current.style.top = "-3%";
            img9.current.style.left = "-10%";
            img9.current.style.width = "30vw";
            img9.current.classList.remove("from2to1");

            bar1.current.style.background = "#C3CADB";
            bar2.current.style.background = "#050505";
            bar3.current.style.background = "#CD2E30";
            bar4.current.style.background = "#757180";
            bar5.current.style.background = "#bbbbbb";
            
            bar1.current.classList.remove("from8to9colour");
            bar2.current.classList.remove("from7to8colour");
            bar3.current.classList.remove("from6to7colour");
            bar4.current.classList.remove("from5to6colour");
            bar5.current.classList.remove("from4to5colour");
            
            set_paint("#CD2E30");
        }, 950);
    } else if(paint == "#CD2E30") {
        img1.current.classList.add("from2to1");
        img2.current.classList.add("from3to2");
        img3.current.classList.add("from4to3");
        img4.current.classList.add("from5to4");
        img5.current.classList.add("from6to5");
        img6.current.classList.add("from7to6");
        img7.current.classList.add("from8to7");
        img8.current.classList.add("from9to8");
        img9.current.classList.add("from1to9");

        bar1.current.classList.add("from9to1colour");
        bar2.current.classList.add("from8to9colour");
        bar3.current.classList.add("from7to8colour");
        bar4.current.classList.add("from6to7colour");
        bar5.current.classList.add("from5to6colour");
        setTimeout(() => {
            img1.current.style.top = "-3%";
            img1.current.style.left = "-10%";
            img1.current.style.width = "30vw";
            img1.current.classList.remove("from2to1");

            img2.current.style.top = "-16%";
            img2.current.style.left = "9%";
            img2.current.style.width = "26vw";
            img2.current.classList.remove("from3to2");

            img3.current.style.top = "-15%";
            img3.current.style.left = "30%";
            img3.current.style.width = "16vw";
            img3.current.classList.remove("from4to3");

            img4.current.style.top = "-15%";
            img4.current.style.left = "40%";
            img4.current.style.width = "16vw";
            img4.current.classList.remove("from5to4");

            img5.current.style.top = "-16%";
            img5.current.style.left = "43%";
            img5.current.style.width = "26vw";
            img5.current.classList.remove("from6to5");

            img6.current.style.top = "-6%";
            img6.current.style.left = "53%";
            img6.current.style.width = "30vw";
            img6.current.classList.remove("from7to6");

            img7.current.style.top = "17%";
            img7.current.style.left = "39%";
            img7.current.style.width = "40vw";
            img7.current.classList.remove("from8to7");

            img8.current.style.top = "-24%";
            img8.current.style.left = "-23%";
            img8.current.style.width = "80vw";
            img8.current.classList.remove("from9to8");

            img9.current.style.top = "17%";
            img9.current.style.left = "-13%";
            img9.current.style.width = "40vw";
            img9.current.classList.remove("from1to9");

            bar1.current.style.background = "#FCFCFC";
            bar2.current.style.background = "#C3CADB";
            bar3.current.style.background = "#050505";
            bar4.current.style.background = "#CD2E30";
            bar5.current.style.background = "#757180";
            
            bar1.current.classList.remove("from9to1colour");
            bar2.current.classList.remove("from8to9colour");
            bar3.current.classList.remove("from7to8colour");
            bar4.current.classList.remove("from6to7colour");
            bar5.current.classList.remove("from5to6colour");
            
            set_paint("#050505");
        }, 950);
    }
    setTimeout(() => {
        set_swipe(true);
    }, 1000);
  };

  useEffect(() => {
    if(isDragging && swipe && !buy_modal && model == "Street Rider") {
      const deltaX = currentX - startX;

      if(deltaX < 0) clockwise();
      else if(deltaX > 0) anti_clockwise();
    }
  }, [currentX]);

  return (
    <>
    <div className="outer-spinner">
        <div className="spinner" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onTouchMove={handleMouseMove} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onTouchEnd={handleMouseLeave}>
            <img style={{opacity: (buy_modal && paint != "#FCFCFC") ? 0.5 : 1}} ref={img1} src="01.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#2C384D") ? 0.5 : 1}} ref={img2} src="03.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#DAA287") ? 0.5 : 1}} ref={img3} src="06.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#A79A89") ? 0.5 : 1}} ref={img4} src="08.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#bbbbbb") ? 0.5 : 1}} ref={img5} src="11.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#757180") ? 0.5 : 1}} ref={img6} src="12.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#CD2E30") ? 0.5 : 1}} ref={img7} src="21.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#050505") ? 0.5 : 1}} ref={img8} src="22.png" alt="" />
            <img style={{opacity: (buy_modal && paint != "#C3CADB") ? 0.5 : 1}} ref={img9} src="24.png" alt="" />
            <div></div>
        </div>
    </div>
    {/* <div onClick={clockwise} className="left-bar-arrow"><FontAwesomeIcon icon={faCaretLeft} style={{fontSize: "2rem"}} /></div>
    <div onClick={anti_clockwise} className="right-bar-arrow"><FontAwesomeIcon icon={faCaretRight} style={{fontSize: "2rem"}} /></div> */}
    <div id="bar_container" className="bar_container">
        <div style={{opacity: (buy_modal || model != "Street Rider") ? "0.5" : "1"}} className="bar">
            <div onClick={anti_clockwise} ref={bar1} className={(!buy_modal && model == "Street Rider") ? "bar_clickable bar1" : "bar1"}></div>
            <div onClick={anti_clockwise} ref={bar2} className={(!buy_modal && model == "Street Rider") ? "bar_clickable bar2" : "bar2"}></div>
            <div ref={bar3} className="bar3"></div>
            <div onClick={clockwise} ref={bar4} className={(!buy_modal && model == "Street Rider") ? "bar_clickable bar4" : "bar4"}></div>
            <div onClick={clockwise} ref={bar5} className={(!buy_modal && model == "Street Rider") ? "bar_clickable bar5" : "bar5"}></div>
        </div>
    </div>
    </>
  );
}

export default Vehicles;
