
import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
 
  hidden: { opacity: 0, scale: 0.5 }, 
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
        type: 'spring', 
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
                        {s.nombre} 
                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
}

export default SoftSkills;