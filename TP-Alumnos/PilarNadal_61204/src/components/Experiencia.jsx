
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

const Experiencia = () => {
    
    const trabajos = [
        { id: 1, puesto: 'Desarrollador Web Junior', empresa: 'Tech Innovators', duracion: 'Ene 2024 - Presente', desc: 'Desarrollo de interfaces de usuario con React y administración de bases de datos.' },
        { id: 2, puesto: 'Asistente de Soporte Técnico', empresa: 'Global Systems', duracion: 'Jul 2023 - Dic 2023', desc: 'Mantenimiento y soporte a clientes en sistemas operativos y redes.' },
        { id: 3, puesto: 'Pasante de Programación', empresa: 'Startup XYZ', duracion: 'Ene 2023 - Jun 2023', desc: 'Implementación de pruebas unitarias y documentación de código.' },
    ];

    return (
        
        <motion.section 
            id="experiencia"
            className="section-base experiencia-lista" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Experiencia Laboral</h2>
            
            {trabajos.map((trabajo) => (
                
                <motion.div
                    key={trabajo.id}
                    className="experiencia-item"
                    variants={itemVariants}
                >
                    <h4>{trabajo.puesto}</h4>
                    <p>{trabajo.empresa} | {trabajo.duracion}</p>
                    <p className="descripcion">{trabajo.desc}</p>
                </motion.div>
            ))}

        </motion.section>
    );
}


export default Experiencia;