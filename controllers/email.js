const sendEmail = require('../utils/sendEmails');

require('dotenv').config();

exports.sendEmail = async (req, res) => {
  try {
    const { email, message, name, phone } = req.body;
    switch (true) {
      case !email:
        return res.status(400).json({ message: 'Email is required.' });
      case !message:
        return res.status(400).json({ message: 'Message is required.' });
      case !name:
        return res.status(400).json({ message: 'Name is required.' });
      case !phone:
        return res.status(400).json({ message: 'Phone is required.' });
      default:
        break;
    }

    const options = {
      to: 'transvilatransportes@gmail.com',
      subject: 'Você recebeu uma mensagem de atraves do site da Transvila',
      message: `<div>Nome: ${name} - telefone: ${phone}</div>
      <div>responder para: ${email}</div>
      mensagem recebida: ${message}`,
    };

    await sendEmail(options);

    res.status(200).json({
      message: 'Check your mail!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
