import React from 'react'

const Heder = ({ scrollToSection, refs }) => {
  return (
<section className="cpnteheres"     >     
 
 
<img 
        className='log1' 
        src='https://res.cloudinary.com/db8e98ggo/image/upload/v1720878611/uivl3o3xh0rhuhhwz6iu.png' 
        alt="Logo" 
      />
  
  
  
  <ul  className="contelisther" >
   <li onClick={() => scrollToSection(refs.sertvicoRef)}  className="itemher"   >Home   </li>
  <li   onClick={() => scrollToSection(refs.somosRef)}  className="itemher"    >       Conocenos  </li>
  <li onClick={() => scrollToSection(refs.serviciosRef)}   className="itemher"     > Nuestros Servicios </li>
  <li  onClick={() => scrollToSection(refs.contactanosRef)}  className="itemher"  > Contáctanos</li>   
    </ul>
</section>
  )
}

export default Heder