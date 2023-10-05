import React, { useEffect, useState, useRef } from 'react';
import "./BuyModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import states_city_data from "../CONSTANTS";
// import CryptoJS from "crypto-js";

export default function BuyModal({ buy_modal, set_buy_modal, model, variant, paint, referId }) {
    let [place_order_next, set_place_order_next] = useState(true);
    let [accepted, set_accepted] = useState(false);
    let [check, set_check] = useState(false);

    // let [first_name, set_first_name] = useState("Jitesh");
    let [first_name, set_first_name] = useState("");
    const handle_first_name = (e) => {
        set_first_name(e.target.value.substr(0, 12));
    }

    // let [last_name, set_last_name] = useState("Kumar");
    let [last_name, set_last_name] = useState("");
    const handle_last_name = (e) => {
        set_last_name(e.target.value.substr(0, 12));
    }

    // let [mobile_number, set_mobile_number] = useState("8307682338");
    let [mobile_number, set_mobile_number] = useState("");
    const handle_mobile_number = (e) => {
        set_mobile_number(e.target.value.substr(0, 13));
    }

    // let [email, set_email] = useState("jiteshgoyal02@gmail.com");
    let [email, set_email] = useState("");
    const handle_email = (e) => {
        set_email(e.target.value.substr(0, 28));
    }

    // let [pincode, set_pincode] = useState("123456");
    let [pincode, set_pincode] = useState("");
    const handle_pincode = (e) => {
        set_pincode(e.target.value.substr(0, 15));
    }

    // const generateChecksum = (data, secretKey) => {
    //     var checksumstring = "";
    //     var checksumsequence = ["amount","bankid","buyerAddress",
    //             "buyerCity","buyerCountry","buyerEmail","buyerFirstName","buyerLastName","buyerPhoneNumber","buyerPincode",
    //             "buyerState","currency","debitorcredit","merchantIdentifier","merchantIpAddress","mode","orderId",
    //             "product1Description","product2Description","product3Description","product4Description",
    //             "productDescription","productInfo","purpose","returnUrl","shipToAddress","shipToCity","shipToCountry",
    //             "shipToFirstname","shipToLastname","shipToPhoneNumber","shipToPincode","shipToState","showMobile","txnDate",
    //             "txnType","zpPayOption"];
    //     for (var seq in checksumsequence) {
    //         for (var key in data) {
    //         if((key.toString()) === checksumsequence[seq]) {
    //             if(data[key].toString() !== "") {
    //             checksumstring += key+"="+data[key].toString()+"&";
    //             }
    //         }
    //         }
    //     }
    //     return checksumstring + "checksum=" + CryptoJS.HmacSHA256(checksumstring, secretKey).toString();
    // }

    const handle_checkout = async () => {
        // let url = "http://localhost:5000";
        let url = "https://zaakpay-backend.onrender.com";
        // let url = "https://zaakpay-backend.onrender.com/transact";
        // let url = "https://payment-backend-2zdx.onrender.com/transact";
        // let secret_key = "0678056d96914a8583fb518caf42828a";
        // let body = {
        //     "amount": "99900",
        //     // "buyerCity": "Delhi",
        //     // "buyerCountry": "India",
        //     "buyerEmail": "jiteshgoyal02@gmail.com",
        //     // "buyerFirstName": "Jitesh",
        //     // "buyerLastName": "Kumar",
        //     // "buyerPhoneNumber": "8307682338",
        //     // "buyerPincode": "124312",
        //     // "buyerState": "Punjab",
        //     "currency": "INR",
        //     "isAutoRedirect": "True",
        //     "merchantIdentifier": "b19e8f103bce406cbd3476431b6b7973",
        //     "mode": 0,
        //     "orderId": "bhjekfjaadbdvaevbasbshbvhae",
        //     "productDescription": "Electricscooters",
        //     "returnUrl": "https://payment-backend-2zdx.onrender.com/custom/response"
        // }

        try {
            let orderId = Date.now();
            let productDescription = "NX100";
            if(email) {
                localStorage.setItem("orderId", orderId);
                setTimeout(() => {
                    window.location.href = url + `?amount=99900&pincode=${pincode}&model=${model}&variant=${variant}&colour=${paint.substr(1)}${city ? `&buyerCity=${city}` : ""}&buyerEmail=${email}${first_name ? `&buyerFirstName=${first_name}` : ""}${last_name ? `&buyerLastName=${last_name}` : ""}${mobile_number ? `&buyerPhoneNumber=${mobile_number}` : ""}${state ? `&buyerState=${state}` : ""}&currency=INR&merchantIdentifier=b19e8f103bce406cbd3476431b6b7973&mode=0&orderId=${orderId}&productDescription=${productDescription}&returnUrl=https://payment-backend-2zdx.onrender.com/transact` + (referId ? ("&referId=" + referId) : "");
                }, 10);
            }
            // let response = await fetch(url + generateChecksum(body, secret_key), {
            // let response = await fetch(url, {
            // // let response = await fetch('https://zaakstaging.zaakpay.com/api/paymentTransact/V8?amount=200&buyerEmail=abc@abc.com&currency=INR&merchantIdentifier=fb2016ffd3a64b2994a6289dc2b671a4&orderId=ZPTest_1629007746215446&checksum=0606a7a82bd53d28ec97ba641c5f078776d6ebcf65e96e3c810294c21acb63cf', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(body)
            //     // mode: "no-cors",
            //     // headers: {
            //         // 'Cache-Control': 'no-cache',
            //         // 'Postman-Token': 'c2376ff3-c001-4eeb-b828-ac3ebcc4d3b0',
            //         // 'Cookie: JSESSIONID': 'C209398BAF749BB3935D44783B97C0A7'
            //     // },
            // });
            // console.log(response);
            // document.getElementById("root").innerHTML = response;
            // response = JSON.parse(response);
            // console.log(response);
        } catch(error) {
            console.log(error.message);
        }
    };

    let [all_states, set_all_states] = useState([]);
    let [state, set_state] = useState("");

    useEffect(() => {
        set_all_states(states_city_data.map((ele) => {
            return ele.state_name;
        }));
        set_state(states_city_data[0]?.state_name);

        set_all_cities((states_city_data[0]).cities.map((city) => {
            return city.city_name;
        }));
    }, []);

    let [all_cities, set_all_cities] = useState([]);
    let [city, set_city] = useState("");

    useEffect(() => {
        let cities_data = states_city_data.find((ele) => {
            if(ele.state_name == state) return true;
        });
        set_city(cities_data?.cities[0]?.city_name);

        if(cities_data) {
            set_all_cities(cities_data.cities.map((city) => {
                return city.city_name;
            }));
        }
    }, [state]);

    useEffect(() => {
        if(!email.length || pincode.length != 6 || !first_name.length || !last_name.length || mobile_number.length != 10 || !state.length || !city.length) set_check(false);
        else set_check(true);
    }, [email, pincode, mobile_number, first_name, last_name, state, city]);

    return (
        <>
        <form onSubmit={(e) => {e.preventDefault()}} style={{zIndex: (buy_modal && place_order_next) ? "1" : "-1"}} id="buy_modal_1" className="buy-modal">
            <div className="input_outer_div">
                <div id="input_head_1" className="input_outer_div_heading">Enter your contact details</div>
                <div className="two_inputs">
                    <input value={first_name} onChange={handle_first_name} type="text" placeholder="First Name" />
                    <input value={last_name} onChange={handle_last_name} type="text" placeholder="Last Name" />
                </div>
                <input className="input" value={mobile_number} onChange={handle_mobile_number} type="number" placeholder="Mobile Number" />
            </div>
            <div className="input_outer_div">
                <div id="input_head_2" className="input_outer_div_heading"></div>
                <input className="input" value={email} onChange={handle_email} type="text" placeholder="Email" />
                <div style={{position: "relative"}}>
                    <select name="state" id="state" onChange={(e) => set_state(e.target.value)}>
                        {all_states.map((ele) => {
                            return <option key={ele} value={ele}>{ele}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="input_outer_div">
                <div id="input_head_3" className="input_outer_div_heading"></div>
                <div style={{position: "relative"}}>
                    <select name="city" id="city" onChange={(e) => set_city(e.target.value)}>
                        {all_cities.map((ele) => {
                            return <option key={ele} value={ele}>{ele}</option>
                        })}
                    </select>
                </div>
                <input className="input" value={pincode} onChange={handle_pincode} type="number" placeholder="Pincode" />
            </div>
            <div id="links" className="place-order-next-div">
                <div onClick={() => set_buy_modal(false)} className="place-order-next">Back</div>
                <button type="submit" onClick={() => set_place_order_next(false)} className="place-order-next btn-focus">Next</button>
                    {/* {check &&
                    <div onClick={() => set_place_order_next(false)} className="place-order-next">Next</div>
                    }
                    {!check &&
                    <div className="place-order-next-disable">Next</div>
                    } */}
            </div>
        </form>
        <form onSubmit={(e) => e.preventDefault()} style={{zIndex: (buy_modal && !place_order_next) ? "1" : "-1"}} id="buy_modal_2" className="buy-modal">
            <div className="booking_details_div">
                <div id="book_head1" className="booking_details_head">Booking details</div>
                <div className="booking_content">
                    <div>Name</div>
                    <div>{first_name} {last_name}</div>
                </div>
                <div className="booking_content">
                    <div>Mobile Number</div>
                    <div>{mobile_number}</div>
                </div>
                <div className="booking_content">
                    <div>State</div>
                    <div>{state}</div>
                </div>
            </div>
            <div className="booking_details_div">
                <div id="book_head2" className="booking_details_head transparent">a</div>
                <div className="booking_content">
                    <div>Email</div>
                    <div>{email}</div>
                </div>
                <div className="booking_content">
                    <div>City</div>
                    <div>{city}</div>
                </div>
                <div className="booking_content">
                    <div>Pincode</div>
                    <div>{pincode}</div>
                </div>
            </div>
            <div className="booking_details_div">
                <div id="book_head3" className="booking_details_head transparent">a</div>
                <div className="booking_content_2">
                    <div>Model</div>
                    <div>{model}</div>
                </div>
                {model == "Street Rider" &&
                <div className="booking_content_2">
                    <div>Variant</div>
                    <div>{variant}</div>
                </div>
                }
                <div className="booking_content_2">
                    <div>Amount</div>
                    <div>₹ 999</div>
                </div>
                <div className="agree_terms_div">
                    <div onClick={() => set_accepted(!accepted)} className="agree_box">
                        {accepted &&
                        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "black"}}><FontAwesomeIcon style={{color: "white"}} icon={faCheck} /></div>
                        }
                    </div>
                    <div style={{marginLeft: "0.3rem"}}>I agree to the <a href="termsAndConditions.html" target="_blank" style={{color: "rgb(0, 220, 0)", cursor: "pointer"}}>terms & conditions</a> and <a href="privacyPolicy.html" target="_blank" style={{color: "rgb(0, 220, 0)", cursor: "pointer"}}>privacy policy</a><span style={{color: "red"}}>*</span></div>
                </div>
            </div>
            <div className="place-order-next-div">
                <div onClick={() => {set_place_order_next(true); set_accepted(false)}} className="place-order-next">Back</div>
                {accepted &&
                <button onClick={handle_checkout} type="submit" className="place-order-next btn-focus">Pay</button>
                }
                {!accepted &&
                <button type="submit" className="place-order-next place-order-next-disable">Pay</button>
                }
            </div>
        </form>
        </>
    )
}
