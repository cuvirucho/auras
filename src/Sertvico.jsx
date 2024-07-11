import React from 'react'
import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Sertvico = () => {

    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const slideRef = useRef(null);
  
    useEffect(() => {
      const handleNextClick = () => {
        const items = slideRef.current.querySelectorAll('.item');
        if (items.length > 0) {
          slideRef.current.appendChild(items[0]);
        }
      };
  
      const handlePrevClick = () => {
        const items = slideRef.current.querySelectorAll('.item');
        if (items.length > 0) {
          slideRef.current.prepend(items[items.length - 1]);
        }
      };
  
      const nextButton = nextRef.current;
      const prevButton = prevRef.current;
  
      nextButton.addEventListener('click', handleNextClick);
      prevButton.addEventListener('click', handlePrevClick);
  
      return () => {
        nextButton.removeEventListener('click', handleNextClick);
        prevButton.removeEventListener('click', handlePrevClick);
      };
    }, []);
  




    const phoneNumber = '+593963200325'; // Replace with the recipient's phone number
    const message = ''; // Replace with your message
  
    const gomsaje = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };


  
  
    return (
      <article>
        <div className="container">
          <div className="slide"ref={slideRef}   >
            
            



          <div
              className="item"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/6940364/pexels-photo-6940364.jpeg)`,
              }}
            >
              <div className="content">
                <div className="name">Uñas</div>
                <div className="des">
                Los mejores esmaltados en gel y en acrílico incluido exfoliacion
                para tus manos.
                 
                </div>
                <button onClick={gomsaje}   >MAS INFO</button>
              </div>
            </div>
  









            <div
              className="item"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            >
              <div className="content">
                <div id='titu'  className="name">Aura</div>
                <div className="des">
                Lo mejor en cuidado personal por que en Aura Belleza sales como una princesa.
                </div>
                <button onClick={gomsaje}  >MAS INFO</button>
              </div>
            </div>
  
            <div
              className="item"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/5654206/pexels-photo-5654206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            >
              <div className="content">
                <div className="name">Maquillaje</div>
                <div className="des">
                  Un Maquillaje que va con tu personalidad y que realzará tu belleza.
                </div>
                <button onClick={gomsaje}   >MAS INFO</button>
              </div>
            </div>
  


            <div
              className="item"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/2749495/pexels-photo-2749495.jpeg)`,
              }}
            >
              <div className="content">
                <div className="name">Peluqueria</div>
                <div className="des">
                  Que tu cabello sea una extensión de tu personalidad con un corte
                  moderno y vibrando a tu ritmo.
                </div>
                <button onClick={gomsaje}   >MAS INFO</button>
              </div>
            </div>

            <div className="button">
              <button ref={prevRef} className="prev"><i class='bx bx-left-arrow-alt'></i></button>
            
     
              <button  id="no"   ref={nextRef} className="next">x</button>
            </div>
          
          
          
          </div>
        </div>
      </article>
    );
  }
  







export default Sertvico