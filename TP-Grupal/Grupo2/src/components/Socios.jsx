import React, { useState } from 'raect';


const Socios = ({gymSocios, setGymSocios })=>{

    //estado para manejar los datos del formulario de rgeistro/edicion de usuario

    const [formularioSocio, setFormularioSocio] =useState({
        id: '',
        nombre:'',
        apellido:'',
        dni:'',
        email:'',
        rol:'socio', //rol por defecto, como lo indica el tp
    });


    //estado para saber si estamos en modo de edicion o creacion

    
}