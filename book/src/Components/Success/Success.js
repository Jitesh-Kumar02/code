import React, { useEffect, useRef, useState } from "react";
import "./Success.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShareNodes, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import jsPDF from "jspdf";
// import Facebook from "../Facebook";
// import Twitter from "../Twitter";
// import Youtube from "../Youtube";
// import Linkedin from "../Linkedin";
// import Instagram from "../Instagram";
import { TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon, LinkedinShareButton, LinkedinIcon, FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
import { SocialIcon } from 'react-social-icons';

export default function Success() {
    let [orderId, set_orderId] = useState("");
    let [order, set_order] = useState({});
    // let [url, set_url] = useState("http://localhost:3000");
    let [url, set_url] = useState("https://book.rivotmotors.com");
    // let [follow_icons_size, set_follow_icons_size] = useState("2rem");
    let [message, set_message] = useState("Hi, I just booked this fantastic Electric scooter completely build in India, click to book yours now before the early bird discount of Rs.10,000 runs out");

    const mobile = () => {
        root.style.setProperty("--main_content_flex_direction", "column");
        root.style.setProperty("--left_right_content_width", "100%");
        // root.style.setProperty("--left_content_img_width", "100%");
        root.style.setProperty("--left_content_font_size", "1rem");
        root.style.setProperty("--main_content_padding_top", "0vh");
        root.style.setProperty("--main_content_justify_content", "center");
        root.style.setProperty("--right_content_padding", "1vh 4vw");
        root.style.setProperty("--right_content_font_size", "0.6rem");
        root.style.setProperty("--right_content_heading_font_size", "0.8rem");
        root.style.setProperty("--right_content_margin_top", "2vh");
        root.style.setProperty("--divide_height", "1.1");
        root.style.setProperty("--box_margin_top", "1vh");
        root.style.setProperty("--box_margin_bottom", "1vh");
        root.style.setProperty("--img_scale", "1.1");
        root.style.setProperty("--icons_div_width", "80vw");
        // set_follow_icons_size("2rem");
    };
    
    const landscape = () => {
        root.style.setProperty("--main_content_flex_direction", "row");
        root.style.setProperty("--left_right_content_width", "45%");
        // root.style.setProperty("--left_content_img_width", "100%");
        root.style.setProperty("--left_content_font_size", "1.5rem");
        root.style.setProperty("--main_content_padding_top", "2vh");
        root.style.setProperty("--right_content_padding", "3vh 2vw");
        root.style.setProperty("--main_content_justify_content", "space-between");
        root.style.setProperty("--right_content_font_size", "1rem");
        root.style.setProperty("--right_content_heading_font_size", "1.2rem");
        root.style.setProperty("--right_content_margin_top", "0vh");
        root.style.setProperty("--divide_height", "1");
        root.style.setProperty("--box_margin_top", "0vh");
        root.style.setProperty("--box_margin_bottom", "0vh");
        root.style.setProperty("--img_scale", "1.7");
        root.style.setProperty("--icons_div_width", "20vw");
        // set_follow_icons_size("3rem");
    };
    
    const handleResize = () => {
        if (window.innerWidth > window.innerHeight) landscape();
        else mobile();
    };

    const download = () => {
        var doc = new jsPDF();

        var contentFromDatabase = `
        Congratulations, ${order?.buyerFirstName} ${order?.buyerLastName}
        
        Your pre-booking order for ${order?.model}${order?.model == "Street Rider" ? ` ${order?.variant}` : ``} has been confirmed.
        
        
        Name                        ${order?.buyerFirstName} ${order?.buyerLastName}
        Mobile Number         ${order?.buyerPhoneNumber}
        State                         ${order?.buyerState}
        Email                         ${order?.buyerEmail}
        City                            ${order?.buyerCity}
        Pincode                     ${order?.pincode}
        Order Id                     ${orderId}
        Model                        ${order?.model}
        ${order?.model == "Street Rider" ? `Variant                       ${order?.variant}` : ``}
        `;
        doc.text(contentFromDatabase, 10, 10);

        doc.save("order_summary.pdf");
    }
    
    useEffect(() => {
        let orderId = localStorage.getItem("orderId");
        if(!orderId) window.location.href = "/";
        set_orderId(orderId);

        try {
            // let url = "http://localhost:5000";
            let url = "https://zaakpay-backend.onrender.com";
            fetch((url + "/getData?orderId=" + orderId), {
                method: "GET",
            }).then((data) => {
                data.json().then((data) => {
                    if(data.statusCode == 200 && data.data) {
                        set_order(data.data);
                    } else {
                        window.location.href = "/";
                    }
                })
            })
        } catch {
            window.location.href = "/";
        }

        setTimeout(() => {
            handleResize();
        }, 20);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let [show_icons, set_show_icons] = useState(false);
    let icons_div = useRef(null);

    const open_icons = () => {
        if(icons_div.current) {
            icons_div.current.classList.remove("close_ani");
            icons_div.current.classList.add("open_ani");
            setTimeout(() => {
                icons_div.current.style.bottom = "3vh";
                set_show_icons(true);
            }, 550);
        }
    };

    const close_icons = () => {
        if(icons_div.current) {
            icons_div.current.classList.remove("open_ani");
            icons_div.current.classList.add("close_ani");
            setTimeout(() => {
                icons_div.current.style.bottom = "-20vh";
                set_show_icons(false);
            }, 550);
        }
    };

    useEffect(() => {
        const func = (e) => {
            if(show_icons && icons_div.current && e.target != icons_div.current) close_icons();
        }

        window.addEventListener("click", func);

        return () => {
            window.removeEventListener("click", func);
        }
    }, [show_icons]);
    
    return (
        <div className="container">
            <div ref={icons_div} className="icons_div">
                <TwitterShareButton url={url + "/" + orderId} quote={""} title={message + "\n\n"}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <TelegramShareButton url={url + "/" + orderId} quote={""} title={message + "\n\n"}>
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <LinkedinShareButton url={url + "/" + orderId} quote={""} title={message + "\n\n"}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <FacebookMessengerShareButton url={url + "/" + orderId} quote={""} title={message + "\n\n"}>
                    <FacebookMessengerIcon size={32} round={true} />
                </FacebookMessengerShareButton>
                <FacebookShareButton url={url + "/" + orderId} quote={""} title={message + "\n\n"}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton url={url + "/" + orderId} quote={""} title={message + "\n\n"}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
            </div>

            <div className="header"></div>
            <div className="model-btns">
                <div onClick={() => window.location.href="/"}><img src={url + "/home.svg"} alt="" /></div>
            </div>
            <div className="main_content">
                <div className="left_content">
                    <div className="left_content_img"><img src={url + "/01.png"} alt="" /></div>
                    <div className="left_content_content-1">Congratulations, {order?.buyerFirstName} {order?.buyerLastName}</div>
                    <div className="left_content_content-2">Welcome to RIVOT family!</div>
                    <div className="left_content_content-3">Your pre-booking order for {order?.model} {order?.variant} has been confirmed.</div>
                </div>
                <div className="right_content">
                    <div className="right_content_heading">Order Summary</div>
                    <div className="right_content_content box_margin_top">
                        <div className="right_content_inner_content"><div>Name</div><div>{order?.buyerFirstName} {order?.buyerLastName}</div></div>
                        <div className="right_content_inner_content"><div>Mobile Number</div><div>{order?.buyerPhoneNumber}</div></div>
                        <div className="right_content_inner_content"><div>State</div><div>{order?.buyerState}</div></div>
                        <div className="right_content_inner_content"><div>Email</div><div>{order?.buyerEmail}</div></div>
                        <div className="right_content_inner_content"><div>City</div><div>{order?.buyerCity}</div></div>
                        <div className="right_content_inner_content"><div>Pincode</div><div>{order?.pincode}</div></div>
                    </div>
                    <div className="right_content_content box_margin_bottom">
                        <div className="right_content_inner_content"><div>Order Id</div><div>{orderId}</div></div>
                        <div className="right_content_inner_content"><div>Model</div><div>{order?.model}</div></div>
                        {order?.model == "Street Rider" &&
                        <div className="right_content_inner_content"><div>Variant</div><div>{order?.variant}</div></div>
                        }
                        <div className="right_content_inner_content"><div>Amount Paid</div><div>₹ 999</div></div>
                    </div>
                    <div className="right_content_content">
                        <div className="right_content_inner_content_1">
                            <div onClick={download} style={{cursor: "pointer", marginRight: "0.5rem"}}>
                                <FontAwesomeIcon icon={faDownload} style={{color: "black"}} />
                            </div>
                            <div>Order summary</div>
                        </div>
                        <div className="right_content_inner_content_1">
                            <div style={{marginRight: "0.5rem"}}>
                                <FontAwesomeIcon icon={faPhone} style={{color: "black"}} />
                            </div>
                            <div>Customer care number: +91 898-898-4646</div>
                        </div>
                        <div className="right_content_inner_content_1">
                            <div style={{cursor: "pointer", marginRight: "0.5rem"}}>
                                <a href="mailto:booking@rivotmotors.com">
                                    <FontAwesomeIcon icon={faEnvelope} style={{color: "black"}} />
                                </a>
                            </div>
                            <div>Email: booking@rivotmotors.com</div>
                        </div>
                        <br />
                        <br />
                        <div onClick={() => {open_icons();}} className="right_content_inner_content_1">
                            <div style={{cursor: "pointer", marginRight: "0.5rem"}}>
                                <FontAwesomeIcon icon={faShareNodes} style={{color: "black"}} />
                            </div>
                            <div>Share the good news with your friends and familiy and stand a chance to win this NX100 for free. Conditions Apply.</div>
                        </div>
                    </div>
                    <div style={{marginTop: "0.5vh"}} className="follow_links">Follow us on:&nbsp;
                        <SocialIcon url="https://www.facebook.com/rivotmotors" bgColor={"transparent"} fgColor={"white"} target="_blank" />
                        <SocialIcon url="https://www.twitter.com/rivotmotors" bgColor={"transparent"} fgColor={"white"} target="_blank" />
                        <SocialIcon url="https://www.instagram.com/rivotmotors" bgColor={"transparent"} fgColor={"white"} target="_blank" />
                        <SocialIcon url="https://www.linkedin.com/company/rivotmotors" bgColor={"transparent"} fgColor={"white"} target="_blank" />
                        <SocialIcon url="https://www.youtube.com/c/rivotmotors" bgColor={"transparent"} fgColor={"white"} target="_blank" />
                        {/* <a href="https://www.facebook.com/rivotmotors" target="_blank">
                            <Facebook width={follow_icons_size} height={follow_icons_size} />
                        </a>
                        <a href="https://www.twitter.com/rivotmotors" target="_blank">
                            <Twitter width={follow_icons_size} height={follow_icons_size} />
                        </a>
                        <a href="https://www.instagram.com/rivotmotors" target="_blank">
                            <Instagram width={follow_icons_size} height={follow_icons_size} />
                        </a>
                        <a href="https://www.linkedin.com/company/rivotmotors" target="_blank">
                            <Linkedin width={follow_icons_size} height={follow_icons_size} />
                        </a>
                        <a href="https://www.youtube.com/c/rivotmotors" target="_blank">
                            <Youtube width={follow_icons_size} height={follow_icons_size} />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
