# Zaakpay-NodeJs-Kit

This is a ReadMe for the Zaakpay NodeJS kit.
This Zaakpay PG kit is made up of 3 different APIs, which are described below.<br /><br />
Inside the kit, We have config file where you can define ENV and merchant credentials accordingly.


<ul>
                <li><strong>Staging Server</strong>: https://zaakstaging.zaakpay.com/ <br/></li>
                <li><strong>Live Server</strong>: https://api.zaakpay.com/</li>
                <li><strong>config.js Path</strong>: /NodeJS-PG-KIT/NodeJs_KIT/lib/config.js</li>
</ul>

Port: 8080 [Can be changed in /bin/www]

Return URL: http://localhost:8080/response


For Transact API
<ul>
                            <li><strong>test_merchant_input.ejs</strong> : This is the Template file which takes input from user & posts data.<br/></li>
                            <li><strong>posttozaakpay.js</strong> : This is the file which accepts input, sanitizes it & posts it to the TRANSACT API.</li>
</ul>
                        
                        

For Check Status API                     
<ul>
                            <li><strong>test_status_check_input.ejs</strong> : This is the Template file which takes input from user & posts data.</li>
                            <li><strong>poststatuschecktozaakpay.js</strong> : This is the file which accepts input, sanitizes it & posts it to the STATUS CHECK API.</li>
</ul>
                        
                        

For Update/Refund API                   
<ul>
                            <li><strong>test_mtx_update_input.ejs</strong> : This is the Template file which takes input from user & posts data.</li>
                            <li><strong>postmtxupdatetozaakpay.js</strong> : This is the file which accepts input, sanitizes it & posts it to the STATUS UPDATE API.</li>
</ul>

