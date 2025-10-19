

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


const Estudios = () => {
   
    const estudios = [
        { id: 1, titulo: 'Escuela Tecnica N1 Famailla', inst: 'Tecnica en informatica profesional y personal' },
        { id: 2, titulo: 'Universidad Tecnologica de Tucuman(UTN)', inst: 'Tecnico Universitario en Programacion' },
    ];

    return (
        <motion.section 
            id="estudios"
            className="section-base estudios-lista" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Formación Académica</h2>
            
            {estudios.map((estudio) => (
                <motion.div
                    key={estudio.id}
                    className="estudio-item"
                    variants={itemVariants}
                >
                    <h4>{estudio.titulo}</h4>
                    <p>{estudio.inst}</p>
                </motion.div>
            ))}

        </motion.section>
    );
}


export default Estudios;