// src/components/SoftSkills.jsx

import React from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURACIÓN DE ANIMACIÓN ---
const containerVariants = {
  // El contenedor es el mismo: oculta todo y luego dispara a los hijos
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Retardo un poco más corto (0.1s)
    },
  },
};

const itemVariants = {
  // CLAVE: Usa 'scale' para el efecto de crecimiento
  hidden: { opacity: 0, scale: 0.5 }, // Empieza invisible y a la mitad del tamaño (50%)
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
        type: 'spring', // Tipo 'spring' para un efecto de "rebote" rápido
        stiffness: 150 
    } 
  },
};

const SoftSkills =()=> {
    const skills=[
        {id:1, nombre:'Trabajo en quipo'},
        {id:2, nombre: 'Resolucion de problemas'},
        {id:3, nombre:'Autogestion y organizacion'},
        {id:4, nombre:'Paciencia y adaptabilidad'},
    ];

    return (
        <motion.section 
            id="soft-skills"
            className="section-base softskills-lista"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Habilidades Blandas</h2>
            
            <div className="skills-grid">
                {skills.map((s) => (
                    <motion.div
                        key={s.id}
                        className="skill-item"
                        variants={itemVariants}
                    >
                        {s.nombre} {/* ✅ Asegúrate de usar s.nombre */}
                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
}

export default SoftSkills;