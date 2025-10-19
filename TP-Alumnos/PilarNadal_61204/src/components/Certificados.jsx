

import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: { opacity: 1, y: 0 }, 
};

const Certificados = () => {
    
    const certificados = [
        { id: 1, nombre: 'Full-Stack Web Development', emisor: 'Platzi', anio: 2024 },
        { id: 2, nombre: 'JavaScript Moderno', emisor: 'Udemy', anio: 2023 },
        { id: 3, nombre: 'Diseño UX/UI Básico', emisor: 'Google Garage', anio: 2023 },
    ];

    return (
       
        <motion.section 
            id="certificados"
            className="section-base certificados-lista" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Certificados</h2>
            
            {certificados.map((cert) => (
                // Cada certificado es un item animado
                <motion.div
                    key={cert.id}
                    className="certificado-item"
                    variants={itemVariants}
                >
                    <h4>{cert.nombre}</h4>
                    <p>{cert.emisor} ({cert.anio})</p>
                </motion.div>
            ))}

        </motion.section>
    );
}

export default Certificados;