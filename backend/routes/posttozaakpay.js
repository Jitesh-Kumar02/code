var express = require('express');
var checksum = require('../lib/checksum');
const transacturl = require('../lib/config');
var router = express.Router();
let OrdersDetailModel = require("../models/orderDetails");
const nodemailer = require("nodemailer");


router.get('/transact', async function(req, res, next) {
  if(req.query.orderId) {
    try {
      await OrdersDetailModel.create(req.query);
    } catch(err) {}
  }

  var checksumstring = checksum.getChecksumString(req.query);
  var calculatedchecksum = checksum.calculateChecksum(checksumstring);
  var url = transacturl.merchantInfo.transactApi;

  res.render('transact', {
    data: req.query,
    checksum: calculatedchecksum,
    checksumstring: checksumstring,
    url:url
  });
  res.end();
});

router.post('/transact', async function(req, res, next) {
  let orderId = req.body.orderId;
  let order = await OrdersDetailModel.findOneAndUpdate({orderId}, {statusCode: req.body.responseCode}, {new: true});
  
  if(order?.statusCode == 100) {
    if(order.referId) {
      let referedBy = await OrdersDetailModel.findOneAndUpdate({orderId: order.referId}, {$inc: {referCount: 1}}, {new: true});
      if(referedBy) {
        // const transporter = nodemailer.createTransport({
        //   host: "smtp.hostinger.com",
        //   port: 465,
        //   secure: true,
        //   auth: {
        //     user: "congratulations@rivotmotors.com",
        //     pass: "congratulations@Be1gaum",
        //   },
        // });
  
        // transporter.sendMail({
        //   from: "RIVOT MOTORS <congratulations@rivotmotors.com>",
        //   to: referedBy.buyerEmail,
        //   subject: "Congratulations !! Your booking for NX100 was successful",
        //   html: `Dear ${order.buyerFirstName + " " + order.buyerLastName}
        //   <br />
        //   <br />
        //   Congratulations!! We have received the booking for your brand new NX100 with order no: ${orderId} for any queries please reach out to our customer care at 898-898-4646. 
        //   <br />
        //   <br />
        //   Regards
        //   <br />
        //   RIVOT Motors`,
        // });
      }
    }
    if(order.buyerPhoneNumber) {
      import("node-fetch").then(({ default: fetch }) => {
        // let smsUrl = `http://107.20.199.106/sms/1/text/query?username=rivotm&password=Kap@user!123&from=RIVOTM&to=91${order.buyerPhoneNumber}&text=Dear ${order.buyerFirstName + order.buyerLastName} Congratulations!! We have received the booking for your brand new NX100 with order no: ${orderId} for any queries please reach out to our customer care at 898-898-4646. RIVOT`;
        let smsUrl = `http://107.20.199.106/sms/1/text/query?username=rivotm&password=Kap@user!123&from=RIVOTM&to=91${order.buyerPhoneNumber}&text=Dear ${order.buyerFirstName} ${order.buyerLastName} Congratulations!! We have received the booking for your brand new ${"NX 100"} with order no: ${orderId}  for any queries please reach out to our customer care at 898-898-4646. RIVOT`;
        fetch(smsUrl, {method: "GET"}).then((data) => {}).catch((err) => {console.log(err)});

        let user = {
          "phoneNumber": order.buyerPhoneNumber,
          "countryCode": "+91",
          "traits": {
            "name": order.buyerFirstName + " " + order.buyerLastName,
            "email": order.buyerEmail
          }
        };
        fetch("https://api.interakt.ai/v1/public/track/users/", {
          method: "POST",
          headers: {
            "Authorization": "Basic M1htTVhwZVd0Z0FLMXVGbmZDQzExZi02SnpCakJqSlcwMUpmanp6TWRMMDo=",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        }).then(() => {
          let event = {
            "phoneNumber": order.buyerPhoneNumber,
            "countryCode": "+91",
            "event": "Prebook NX 100",
            traits: {
              orderId: orderId
            }
          };
          fetch("https://api.interakt.ai/v1/public/track/events/", {
            method: "POST",
            headers: {
              "Authorization": "Basic M1htTVhwZVd0Z0FLMXVGbmZDQzExZi02SnpCakJqSlcwMUpmanp6TWRMMDo=",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
          }).then((data) => {}).catch((err) => {});
        }).catch((err) => {});
      });
    };

    if(order.buyerEmail) {
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: "congratulations@rivotmotors.com",
          pass: "congratulations@Be1gaum",
        },
      });

      transporter.sendMail({
        from: "RIVOT MOTORS <congratulations@rivotmotors.com>",
        to: order.buyerEmail,
        subject: "Congratulations !! Your booking for NX100 was successful",
        html: `Dear ${order.buyerFirstName + " " + order.buyerLastName}
        <br />
        <br />
        Congratulations!! We have received the booking for your brand new NX100 with order no: ${orderId} for any queries please reach out to our customer care at 898-898-4646. 
        <br />
        <br />
        Regards
        <br />
        RIVOT Motors`,
      });
    }
  }
  res.redirect("https://book.rivotmotors.com/order/summary");
  // res.redirect("http://localhost:3000");
  res.end();
});

module.exports = router;
