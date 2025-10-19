

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const Footer = () => {
    
    
    const redesSociales = [
        { id: 1, nombre: 'LinkedIn', url: 'URL_DE_TU_LINKEDIN', Icono: FaLinkedin }, 
        { id: 2, nombre: 'GitHub', url: 'https://github.com/piazz77', Icono: FaGithub },       
    ];

   

    return (
        <motion.footer
          
        >
            <div className="footer-content container">
                
              
                <div className="social-links">
                    <h3>¡Contactame!</h3>
                    {redesSociales.map((red) => (
                        <a 
                            key={red.id}
                            href={red.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link-item"
                        >
                           
                            <red.Icono size={20} style={{ marginRight: '8px' }} /> 
                            {red.nombre}
                        </a>
                    ))}
                </div>

               
            </div>
        </motion.footer>
    );
}

export default Footer;