
import React from 'react';
import { motion } from 'framer-motion';
import Estudios from './Estudios';
import Experiencia from './Experiencia';
import Certificados from './Certificados';
import Idiomas from './Idiomas';
import SoftSkills from './SoftSkills';
import Proyectos from './Proyectos';

const Main = () => {
    return (
       
        <> 
           
            <section className="about-me">
                <h1>Sobre mi</h1>
                <br></br>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="paragraph-styles" 
                >
                    Hola, soy Pilar Nadal y estoy estudiando la tecnicatura universitaria en programación. Me apasiona el desarrollo web y siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
                </motion.p>
            </section>
            
           
            <Estudios />
            <Certificados />
            <Experiencia />
            <Idiomas />
            <SoftSkills />
            <Proyectos />
            
        </> 
    );
}

export default Main;