

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
  hidden: { opacity: 0, x: -20 }, 
  visible: { opacity: 1, x: 0 },
};

const Idiomas = () => {
   
    const idiomas = [
        { id: 1, idioma: 'Español', nivel: 'Nativo' },
        { id: 2, idioma: 'Inglés', nivel: 'Intermedio Avanzado (B2)' },
    ];

    return (
        <motion.section 
            id="idiomas"
            className="section-base idiomas-lista"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Idiomas</h2>
            
            {idiomas.map((idioma) => (
                <motion.div
                    key={idioma.id}
                    className="idioma-item"
                    variants={itemVariants}
                >
                    <h4>{idioma.idioma}</h4>
                    <p>{idioma.nivel}</p>
                </motion.div>
            ))}

        </motion.section>
    );
}

export default Idiomas;