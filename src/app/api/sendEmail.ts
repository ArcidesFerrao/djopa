import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { TransportOptions } from 'nodemailer'


export default async function handler(req: NextApiRequest , res: NextApiResponse) {
  if (req.method === 'POST') {
    const {name, apelido, email, assunto, mensagem} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host:587,
            secure: true,
            auth: {
                use: process.env.SMTP_SERVER_USERNAME,
                pass: process.env.SMTP_SERVER_PASSWORD,
            }
        } as TransportOptions );

        const mailOptions ={
            from: email,
            to: 'cidesferrao@gmail.com',
            subject: assunto || 'No subject',
            text: `Name: ${name} ${apelido}\nEmail: ${email}\n\nMessage:\n${mensagem}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
        
    } catch (error ) {
        console.error(error);
        res.status(500).send('Failed to send Message');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).send('Method not allowed');
  }
}
