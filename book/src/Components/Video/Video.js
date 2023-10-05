import React, { useState } from 'react';
import "./Video.css";
import Tick_SVG from '../Tick_SVG';

export default function Video({ set_page }) {
    return (
        <>
            <div className="linkssssss">
                <a href="about.html">About us</a>
                <a href="faq.html">FAQ</a>
                <a href="contact.html">Conatct us</a>
                <a href="cancellationRefund.html">Cancellation and refund</a>
                <a href="privacyPolicy.html">Privacy policy</a>
                <a href="termsAndConditions.html">Terms and Conditions</a>
            </div>
            <div className="video-div">
                {/* <video autoPlay loop muted>
                    <source src="/controller.gif" type="video/mp4" />
                </video> */}
                <img src="/controller.gif" alt="" />
            </div>
            <div onClick={() => {set_page("models")}} className="pre-book-video-btn">Pre Book <Tick_SVG color={"white"} /></div>
        </>
    )
}
