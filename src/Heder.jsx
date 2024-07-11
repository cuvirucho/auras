import React from 'react'

const Heder = ({ scrollToSection, refs }) => {
  return (
<section className="cpnteheres"     >     
  <img className='log1'  src="src/imgds/Diseño sin título (4).png"  alt="sss" />
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