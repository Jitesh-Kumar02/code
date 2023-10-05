import "./Models.css";
import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import BuyModal from '../BuyModal/BuyModal';
import Vehicles from '../Vehicles/Vehicles';

export default function Models({ set_page, referId }) {
    let root = document.documentElement;

    let [model, set_model] = useState("Street Rider");
    let [variant, set_variant] = useState("100KM");
    let [paint, set_paint] = useState("#050505");
    let [buy_modal, set_buy_modal] = useState(false);
    let [mobile_device, set_mobile_device] = useState("");

    let func2 = () => {
        let input_head_1 = document.getElementById("input_head_1");
        let input_head_2 = document.getElementById("input_head_2");
        let input_head_3 = document.getElementById("input_head_3");
        let maxi3 = Math.max(input_head_1?.clientHeight || 0, input_head_2?.clientHeight || 0, input_head_3?.clientHeight || 0);
        if(input_head_1) {
            if(mobile_device) input_head_1.style.height = "auto";
            else input_head_1.style.height = maxi3 + "px";
        }
        if(input_head_2) {
            if(mobile_device) input_head_2.style.display = "none";
            else {
                input_head_2.style.display = "flex";
                input_head_2.style.height = maxi3 + "px";
            }
        }
        if(input_head_3) {
            if(mobile_device) input_head_3.style.display = "none";
            else {
                input_head_3.style.display = "flex";
                input_head_3.style.height = maxi3 + "px";
            }
        }

        let head1 = document.getElementById("book_head1");
        let head2 = document.getElementById("book_head2");
        let head3 = document.getElementById("book_head3");
        let maxi = Math.max(head1?.clientHeight || 0, head2?.clientHeight || 0, head3?.clientHeight || 0);
        if(head1) {
            if(mobile_device) head1.style.height = "auto";
            else head1.style.height = maxi + "px";
        }
        if(head2) {
            if(mobile_device)  head2.style.display = "none";
            else {
                head2.style.display = "flex";
                head2.style.height = maxi + "px";
            }
        }
        if(head3) {
            if(mobile_device) head3.style.display = "none";
            else {
                head3.style.display = "flex";
                head3.style.height = maxi + "px";
            }
        }
    }

    let func = () => {
        let links = document.getElementById("links");
        if(links) root.style.setProperty("--lower_box_padding_bottom", links.clientHeight + "px");

        let head1 = document.getElementById("head1");
        let head2 = document.getElementById("head2");
        let head3 = document.getElementById("head3");
        let maxi = Math.max(head1?.clientHeight || 0, head2?.clientHeight || 0, head3?.clientHeight || 0);
        if(head1) head1.style.height = maxi + "px";
        if(head2) head2.style.height = maxi + "px";
        if(head3) {
            if(mobile_device) head3.style.display = "none";
            else {
                head3.style.display = "flex";
                head3.style.height = maxi + "px";
            }
        }

        let content1 = document.getElementById("content1");
        let content2 = document.getElementById("content2");
        let content3 = document.getElementById("content3");
        let maxi2 = Math.max(content1?.clientHeight || 0, content2?.clientHeight || 0, content3?.clientHeight || 0);
        if(mobile_device) {
            if(content1) content1.style.height = "auto";
            if(content2) content2.style.height = "auto";
            if(content3) content3.style.height = "auto";
        } else {
            if(content1) content1.style.height = maxi2 + "px";
            if(content2) content2.style.height = maxi2 + "px";
            if(content3) content3.style.height = maxi2 + "px";
        }

        let variant_selector = document.getElementById("variant_selector");
        let bar_container = document.getElementById("bar_container");
        
        if(variant_selector) root.style.setProperty("--variant_selector_height", (variant_selector.clientHeight + "px"));
        else root.style.setProperty("--variant_selector_height", "0px");
        if(bar_container) root.style.setProperty("--bar_selector_height", (bar_container.clientHeight + "px"));
        else root.style.setProperty("--bar_selector_height", "0px");

        func2();
        
        let model_selector = document.getElementById("model_selector");
        let buy_modal_1 = document.getElementById("buy_modal_1");
        let buy_modal_2 = document.getElementById("buy_modal_2");
        let maxi3 = Math.max(model_selector?.clientHeight || 0, buy_modal_1?.clientHeight || 0, buy_modal_2?.clientHeight || 0);
        if(model_selector) model_selector.style.height = maxi3 + "px";
        if(buy_modal_1) buy_modal_1.style.height = maxi3 + "px";
        if(buy_modal_2) buy_modal_2.style.height = maxi3 + "px";
        root.style.setProperty("--buy_modal_height", maxi3 + "px");
    }

    useEffect(() => {
        func();
    }, [mobile_device]);

    const mobile = () => {
        root.style.setProperty("--state_selector_max_height", "300%");
        root.style.setProperty("--city_selector_max_height", "300%");
        root.style.setProperty("--gap_between_selectors", "3vw");
        root.style.setProperty("--gap_between_bar_selector", "3vw");
        root.style.setProperty("--gap_between_bar_vehicle", "3vw");
        root.style.setProperty("--variant_selectors_1_width", "65%");
        root.style.setProperty("--variant_selectors_2_width", "35%");
        root.style.setProperty("--model_selector_flex_direction", "column");
        root.style.setProperty("--inner_model_selector_width", "100%");
        root.style.setProperty("--selector_heading_font_size", "0.9rem");
        root.style.setProperty("--selector_heading_margin_bottom", "0%");
        root.style.setProperty("--selector_content_font_size", "0.7rem");

        root.style.setProperty("--buy_modal_flex_direction", "column");
        root.style.setProperty("--input_outer_div_width", "100%");
        root.style.setProperty("--input_margin_left", "0%");
        root.style.setProperty("--input_width", "100%");
        root.style.setProperty("--booking_content_width", "100%");
        root.style.setProperty("--booking_details_div_width", "100%");
        
        set_mobile_device(true);
    };
    
    const landscape = () => {
        root.style.setProperty("--state_selector_max_height", "200%");
        root.style.setProperty("--city_selector_max_height", "120%");
        root.style.setProperty("--gap_between_selectors", "1.5vw");
        root.style.setProperty("--gap_between_bar_selector", "1.5vw");
        root.style.setProperty("--gap_between_bar_vehicle", "1.5vw");
        root.style.setProperty("--variant_selectors_1_width", "33%");
        root.style.setProperty("--variant_selectors_2_width", "33%");
        root.style.setProperty("--model_selector_flex_direction", "row");
        root.style.setProperty("--inner_model_selector_width", "33%");
        root.style.setProperty("--selector_heading_font_size", "1.2rem");
        root.style.setProperty("--selector_heading_margin_bottom", "2%");
        root.style.setProperty("--selector_content_font_size", "1rem");
        
        root.style.setProperty("--buy_modal_flex_direction", "row");
        root.style.setProperty("--input_outer_div_width", "33%");
        root.style.setProperty("--input_margin_left", "0%");
        root.style.setProperty("--input_width", "90%");
        root.style.setProperty("--booking_content_width", "70%");
        root.style.setProperty("--booking_details_div_width", "33%");

        set_mobile_device(false);
    };

    const handleResize = () => {
        if (window.innerWidth > window.innerHeight) landscape();
        else mobile();
    };

    useEffect(() => {
        setTimeout(() => {
            handleResize();
        }, 20);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        <div className="container">
            <div className="header"></div>
            <div className="model-btns">
                <div onClick={() => set_page("video")}><img src="./home.svg" alt="" /></div>
            </div>
            <Vehicles model={model} paint={paint} set_paint={set_paint} buy_modal={buy_modal} />
            <div id="variant_selector" style={{opacity: buy_modal ? "0.5" : "1"}} className="variant_selectors">
                <div className="variant_selectors_1">
                    <div className="inner_variant_selectors_1">
                        <div onClick={() => {
                            if(buy_modal) return;
                            set_model("Street Rider");
                            if(model != "Street Rider") set_variant("100KM");
                        }} className={model == "Street Rider" ? "inner_variant_selector variant_selected" : buy_modal ? "inner_variant_selector" : "inner_variant_selector variant_not_selected"}>Street Rider</div>
                        <div onClick={() => {
                            if(buy_modal) return;
                            set_model("Sports");
                            set_variant("100KM");
                        }} className={model == "Sports" ? "inner_variant_selector variant_selected" : buy_modal ? "inner_variant_selector" : "inner_variant_selector variant_not_selected"}>Octane</div>
                        <div onClick={() => {
                            if(buy_modal) return;
                            set_model("Army Version");
                            set_variant("300KM");
                        }} className={model == "Army Version" ? "inner_variant_selector variant_selected" : buy_modal ? "inner_variant_selector" : "inner_variant_selector variant_not_selected"}>Offlander</div>
                    </div>
                </div>
                {model == "Street Rider" &&
                <div className="variant_selectors_2">
                    <div className="inner_variant_selectors_2">
                        <div onClick={() => {if(!buy_modal) set_variant("100KM")}} className={variant == "100KM" ? "inner_variant_selector variant_selected" : buy_modal ? "inner_variant_selector" : "inner_variant_selector variant_not_selected"}>Vista</div>
                        <div onClick={() => {if(!buy_modal) set_variant("200KM")}} className={variant == "200KM" ? "inner_variant_selector variant_selected" : buy_modal ? "inner_variant_selector" : "inner_variant_selector variant_not_selected"}>Class</div>
                        <div onClick={() => {if(!buy_modal) set_variant("300KM")}} className={variant == "300KM" ? "inner_variant_selector variant_selected" : buy_modal ? "inner_variant_selector" : "inner_variant_selector variant_not_selected"}>Loaded</div>
                    </div>
                </div>
                }
            </div>
            <BuyModal referId={referId} mobile_device={mobile_device} buy_modal={buy_modal} set_buy_modal={set_buy_modal} model={model == "Street Rider" ? "Street Rider" : model == "Sports" ? "Octane" : "Offlander"} variant={model != "Street Rider" ? "" : variant == "100KM" ? "Vista" : variant == "200KM" ? "Class" : "Loaded"} paint={paint} />
            <div style={{zIndex: buy_modal ? "-1" : "1"}} id="model_selector" className="model-selectors">
                <div className="inner_model_selector">
                    <div id="head1" className="selector_heading">Highlights</div>
                    <div id="content1" className="selector_content">
                        <div className="selector_content_row">
                            <div>
                                {model == "Street Rider" && variant == "100KM" && "100 Km"}
                                {model == "Street Rider" && variant == "200KM" && "200 Km"}
                                {model == "Street Rider" && variant == "300KM" && "300 Km"}
                                {model == "Sports" && variant == "100KM" && "100 Km"}
                                {model == "Army Version" && variant == "300KM" && "300 Km"}
                            </div>
                            <div>IDC Range</div>
                        </div>
                        <div className="selector_content_row">
                            <div>
                                {(model == "Street Rider" || model == "Army Version") && "100 Kmph"}
                                {model == "Sports" && "110 Kmph"}
                            </div>
                            <div>Top Speed</div>
                        </div>
                        <div className="selector_content_row">
                            <div>
                                {((model == "Street Rider" && variant == "100KM") || model == "Sports") && "1900 KWh"}
                                {(model == "Street Rider" && variant == "200KM") && "3800 KWh"}
                                {((model == "Street Rider" && variant == "300KM") || model == "Army Version") && "5700 KWh"}
                            </div>
                            <div>Battery Pack</div>
                        </div>
                    </div>
                </div>
                <div className="inner_model_selector">
                    <div id="head2" className="selector_heading">Features</div>
                    <div id="content2" className="selector_content">
                        {model == "Street Rider" && variant == "100KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Combi Brake System</div>
                                <div className="selectors-content-div">&#8226; Center Stand</div>
                                <div className="selectors-content-div">&#8226; recoEngine</div>
                                <div className="selectors-content-div">&#8226; Reverse Gear</div>
                            </>
                        }
                        {model == "Street Rider" && variant == "200KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Everything in Vista and</div>
                                <div className="selectors-content-div">&#8226; Internet connected</div>
                                <div className="selectors-content-div">&#8226; APU (Auxiliary Power Unit)</div>
                                <div className="selectors-content-div">&#8226; easyHold</div>
                            </>
                        }
                        {model == "Street Rider" && variant == "300KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Everything in Class and</div>
                                <div className="selectors-content-div">&#8226; rideCam</div>
                                <div className="selectors-content-div">&#8226; comfortKey</div>
                                <div className="selectors-content-div">&#8226; Lady foot rest</div>
                            </>
                        }
                        {model == "Sports" && variant == "100KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Everything in Vista and</div>
                                <div className="selectors-content-div">&#8226; rideCam</div>
                                <div className="selectors-content-div">&#8226; Proximity unlock</div>
                                <div className="selectors-content-div">&#8226; Race track theme</div>
                            </>
                        }
                        {model == "Army Version" && variant == "300KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Everything in Loaded and</div>
                                <div className="selectors-content-div">&#8226; Upto 300KM IDC range (upgradable to 500KM)</div>
                                <div className="selectors-content-div">&#8226; Offroad theme</div>
                                <div className="selectors-content-div">&#8226; comfortBoot</div>
                            </>
                        }
                    </div>
                </div>
                <div className="inner_model_selector">
                    <div id="head3" className="selector_heading"></div>
                    <div id="content3" className="selector_content_2">
                        {model == "Street Rider" && variant == "100KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Onboard Charger</div>
                                <div className="selectors-content-div">&#8226; rideOS 3.1</div>
                                <div className="selectors-content-div">&#8226; Touchscreen, Multimedia & Navigation</div>
                            </>
                        }
                        {model == "Street Rider" && variant == "200KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; phoneLock</div>
                                <div className="selectors-content-div">&#8226; Boost</div>
                            </>
                        }
                        {model == "Street Rider" && variant == "300KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; comfortBoot</div>
                                <div className="selectors-content-div">&#8226; rollProtect</div>
                            </>
                        }
                        {model == "Sports" && variant == "100KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; rollProtect</div>
                                <div className="selectors-content-div">&#8226; comfortBoot</div>
                                <div className="selectors-content-div">&#8226; comfortKey</div>
                            </>
                        }
                        {model == "Army Version" && variant == "300KM" &&
                            <>
                                <div className="selectors-content-div">&#8226; Rugged ready Protection cage</div>
                                <div className="selectors-content-div">&#8226; Offroad tyres</div>
                            </>
                        }
                    </div>
                </div>
                {!buy_modal &&
                <div className="place-order-next-div">
                    <div></div>
                    <button onClick={() => set_buy_modal(true)} className="place-order-next color_white">Next</button>
                </div>
                }
            </div>
        </div>
        </>
    )
}
