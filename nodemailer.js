import nodemailer from "nodemailer"
const transporter=nodemailer.createTransport(
    {
    
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    
        user: 'ucom2002@mail.ru',
        pass: 'cH0e3FsRDH7tnMTPjjvU'
    }

},
    {
    from: "<ucom2002@mail.ru>"
    }
)
export const mailer =message=>{
    transporter.sendMail(message,(err,info)=>{
        if(err){
            return console.log(err)
        }
        console.log(info)
    })
}