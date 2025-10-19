import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {  }; 
const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
}; 

const Proyectos = () => {
    const proyectos = [
        { id: 1, titulo: 'E-Commerce con Html, css y javascript vanilla', desc: 'Plataforma de compras con carrito y factura de compra simulada.', link: 'URL_GITHUB_PROYECTO_1' },
        { id: 2, titulo: 'Plataforma de mensajeria con Node.js, Express, React Vite y MongoDB', desc: 'Mensajería en tiempo real.', link: 'URL_GITHUB_PROYECTO_2' },
        { id: 3, titulo: 'Portafolio Personal (Este)', desc: 'Construido con React y Framer Motion para demostrar habilidades de frontend.', link: 'URL_GITHUB_ESTE_PROYECTO' },
    ];

    return (
        <motion.section 
            id="proyectos"
            className="section-base proyectos-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Mis Proyectos</h2>
            
            <div className="proyectos-wrapper">
                {proyectos.map((p) => (
                    <motion.div
                        key={p.id}
                        className="proyecto-card"
                        variants={itemVariants}
                    >
                        <h3>{p.titulo}</h3>
                        <p>{p.desc}</p>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-proyecto">
                            Ver Código
                        </a>
                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
}

export default Proyectos;