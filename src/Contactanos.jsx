import React from 'react'

const Contactanos = () => {



  
  const phoneNumber = '+593963200325'; // Replace with the recipient's phone number
  const message = ''; // Replace with your message

  const gomsaje = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
  <article className='conteconta'   >

<h1>Contáctanos</h1>
<p>Agenda ya tu cita con la belleza</p>
<button onClick={gomsaje}    className='btbcota' ><i class='bx bxl-whatsapp' ></i> Whatsapp</button>

<div className='conterese'   > 
<a href="https://www.facebook.com/profile.php?id=61561536188510&mibextid=ZbWKwL">
  <span><i class='bx bxl-facebook-circle' ></i></span>
</a>
<a href="https://www.instagram.com/aurabelleza.1?utm_source=qr&igsh=d3EzcTJoeXNmdXNo">
<span><i class='bx bxl-instagram-alt' ></i></span>

</a>
<a href="https://www.tiktok.com/@aurabelleza1?_t=8nv1eQEUW1O&_r=1">
<span><i class='bx bxl-tiktok' ></i></span>

</a>
 </div>
  </article>
  )
}

export default Contactanos