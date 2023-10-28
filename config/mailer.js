import nodemailer from 'nodemailer'

async function createMailTransporter(user) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"ProyectoWeb" <proyectowebdevelopment@gmail.com>',
    to: user.email,
    subject: "Verifique su email...",
    html: `<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;min-width:100%" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;max-width:600px" width="600">
        <tbody><tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        <tr>
        <td align="center">
        <img height="auto" src="https://i.postimg.cc/ZYg31Rrs/Proyecto-2-removebg-preview.png" style="display:block;border:0px;text-decoration:none;border-style:none;color:#ffffff;border-width:0" width="99" class="CToWUd" data-bit="iit">
        </td>
        </tr>
        <tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="max-width:600px" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        <td align="center">
        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
        
        <tbody><tr>
        <td align="center" style="padding-top:16px">
        
        <img height="auto" src="https://i.postimg.cc/k4TNVvR7/Proyecto-4-removebg-preview.png" style="display:block;border:0px;width:60%;max-width:180px;min-width:180px" width="180" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 554px; top: 215.062px;"><div id=":os" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2MTM1MDYzNjMxMzQ3MzQwMiIsbnVsbCxbXV0." data-tooltip-class="a1V" data-tooltip="Descargar"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div>
        
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <h1 class="m_-5401722008193577908f48" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:38px;font-weight:bold;color:#4b4b4b">
        Verificá tu correo
        
        </h1>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¡Gracias por ayudarnos a hacer tu cuenta más segura! Haga clic en el botón de abajo para terminar de verificar su correo electrónico.
        
        
        </p>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <div>
        
        
        <table border="0" cellpadding="0" cellspacing="0" style="width:215px;border-spacing:0;border-collapse:collapse" width="215">
        <tbody><tr>
        <td align="center" height="43" style="border-collapse:collapse;background-color:#161616;border-radius:9px;white-space:nowrap">
        <a href='${process.env.CLIENT_URL}/verify/${user.verify_code}' style="display:inline-block;width:100%;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;line-height:19px;color:#ffffff;text-align:center;text-decoration:none;background-color:#161616;border-radius:14px;border-top:12px solid #161616;border-bottom:12px solid #161616;text-transform:uppercase" target="_blank" >
        &nbsp;&nbsp;CONFIRMAR CUENTA
        &nbsp;&nbsp;
        </a>
        </td>
        </tr>
        </tbody></table>
        
        </div>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¿No creaste una cuenta? Póngase en contacto con nosotros para eliminar esta dirección de correo electrónico.
        
        
        </p>
        
        </td>
        </tr>
        
        
        </tbody></table>
        </td>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        </tr>
        </tbody></table>
        
        </td>
        </tr>
        <tr>
        <td height="50" style="height:50px;min-height:50px;line-height:50px;font-size:1px;border-bottom:2px solid #f2f2f2">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        `
  });

}


export default createMailTransporter
