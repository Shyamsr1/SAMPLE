
async function main() { 
    const nodemailer = require("nodemailer");
    // let testAccount =  await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host:"smtp.mail.yahoo.com",
        // port : 465,
        // secure:true,
        service : 'yahoo',
        // service : 'ymail',
        port:25,
        secure: false,

        auth: {
            // user : "mathias51@ethereal.email",
            // pass : "yxemC36RxTmgMZJeEU"
            // user : "shyamsr21@ymail.com",
            // pass : 'Password1!',
            user : 'shyamsr21@yahoo.com',
            pass : 'bboveeysyetfwjqz',

        }, tls: {
            rejectUnauthorized: false
          }
    });
    //  console.log(user , pass);
    let info = await transporter.sendMail({
       from: "shyamsr21@yahoo.com",
       to: "remya.ul@ictkerala.org",
       subject : "AUTOMATED EMAIL FROM NODE",
       html : "<b>Name : </b> SHYAM SR , <br> <b> Batch :</b> ABCD Working Professionals Batch JULY 2020, <br> <b> Greetings Madam <b>",

    });
    console.log("Message sent : %s", info.messageId);
    
}
main().catch(console.error);
module.exports.printer = main;
