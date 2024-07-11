import React from 'react'





const Servicios = () => {

   /* const fromPhoneNumberId = 'FROM_PHONE_NUMBER_ID'; // Reemplaza con el ID de tu número de teléfono
    const accessToken = 'ACCESS_TOKEN'; // Reemplaza con tu token de acceso
    const phoneNumber = 'NÚMERO_DE_TELÉFONO'; // Reemplaza con el número de teléfono del destinatario
    const messageContent = 'CONTENIDO_DEL_MENSAJE'; // Reemplaza con el contenido del mensaje
  
    const handleSendMessage = async () => {
      const url = `https://graph.facebook.com/v20.0/${fromPhoneNumberId}/messages`;
      
      const data = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: {
          preview_url: false,
          body: messageContent,
        },
      };
  
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      };
  
      try {
        const response = await axios.post(url, data, { headers });
        console.log('Message sent successfully:', response.data);
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message.');
      }
    };*/







  const phoneNumber = '+593963200325'; // Replace with the recipient's phone number
    const message = ''; // Replace with your message
  
    const gomsaje = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };


  return (
  <article className='contser'       >
    <h1 className='titservi'     >Nuestros servicios</h1>
    <section  className='cariu'  >
<div className='items'   style={{
                backgroundImage: `url(https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }} >
    <h1 className='titiuem'    >Uñas acrílicas</h1> 
    <button onClick={gomsaje}   className='btnitem' >Reserva</button> 
</div>

<div className='items'    style={{
                backgroundImage: `url(https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=600)`,
              }}  >
    <h1 className='titiuem' >Uñas de gel</h1> 
    <button  id='btgel'  onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>


<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)`,
              }}    >
    <h1 className='titiuem' > Manicure Clásico</h1> 
    <button   onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>




<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/17056222/pexels-photo-17056222/free-photo-of-mujer-pie-pedicura-unas-de-los-pies.jpeg?auto=compress&cs=tinysrgb&w=600)`,
              }}    >
    <h1 className='titiuem' >Pedicure Clásico</h1> 
    <button onClick={gomsaje}   className='btnitem' >Reserva</button> 
</div>



<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/2010922/pexels-photo-2010922.jpeg?auto=compress&cs=tinysrgb&w=600)`,
              }}    >
    <h1 className='titiuem' >Diseños en 3D </h1> 
    <button   onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>



<div className='items'  id='semipercon'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem'  id="semiper" >Esmaltados Semipermanentes </h1> 
    <button  onClick={gomsaje} className='btnitem' id='btresemi'    >Reserva</button> 
</div>   



<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/4677845/pexels-photo-4677845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem' >Esmaltado natural</h1> 
    <button  onClick={gomsaje}  className='btnitem' >Reserva</button> 
</div>



<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/5177994/pexels-photo-5177994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem' >Diseño de cejas </h1> 
    <button  onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>


<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/713949/pexels-photo-713949.jpeg?auto=compress&cs=tinysrgb&w=600)`,
              }}    >
    <h1 className='titiuem' >Lifting de pestañas    </h1> 
    <button  onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>



<div className='items' id='semipercon' style={{
                backgroundImage: `url(https://images.pexels.com/photos/3065450/pexels-photo-3065450.jpeg?auto=compress&cs=tinysrgb&w=600)`,
              }}    >
    <h1 id="semiper"    className='titiuem' >Pestañas pelo a pelo</h1> 
    <button  onClick={gomsaje} className='btnitem'  id='btresemi'  >Reserva</button> 
</div>

<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&w=600)`,
              }}    >
    <h1 className='titiuem' >Maquillaje profesional    </h1> 
    <button  onClick={gomsaje}  className='btnitem' >Reserva</button> 
</div>

<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/22055572/pexels-photo-22055572/free-photo-of-mujer-modelo-maqueta-rubia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem' >Maquillaje diario   </h1> 
    <button  onClick={gomsaje}  className='btnitem' >Reserva</button> 
</div>

<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/4029303/pexels-photo-4029303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem' >Maquillaje de noche  </h1> 
    <button  onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>

<div className='items'  style={{
                backgroundImage: `url(https://images.pexels.com/photos/10193997/pexels-photo-10193997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem' >Maquillaje de bodas  </h1> 
    <button onClick={gomsaje} className='btnitem' >Reserva</button> 
</div>


<div className='items' id='semipercon' style={{
                backgroundImage: `url(https://images.pexels.com/photos/6155894/pexels-photo-6155894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}    >
    <h1 className='titiuem'  id="semiper" > Eventos especiales  </h1> 
    <button onClick={gomsaje} className='btnitem' id='btresemi' >Reserva</button> 
</div>




    </section>
  </article>
  )
}

export default Servicios