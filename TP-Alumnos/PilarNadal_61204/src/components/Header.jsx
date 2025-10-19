

import React from 'react';
import {motion} from 'framer-motion';



const Header = () => {
  return (
    <header className='header'>
        <div className='header-inner container'>

           
            <motion.div
                className='brand'
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 0.6, delay: 0.2 }} 
            >
                <div>
                    <h1>Maria Paz del Pilar Nadal</h1>
                    <h2>Estudiante de tecnicatura universitaria en programación</h2>
                </div>
            </motion.div>
            
           
            <motion.div
                className="header-right"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }}  
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }} 
            >
                <img className="profile-photo" src="/perfil.jfif" alt="Foto de perfil" />
            </motion.div>
            
        </div>
    </header>
  );
}

export default Header;