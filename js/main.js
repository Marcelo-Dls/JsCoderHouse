function preguntar(pregunta, opciones, respuestaCorrecta) {
    const respuesta = prompt(`${pregunta}\n${opciones}`);
    
    if (respuesta === respuestaCorrecta) {
      return 1; 
    } else {
      return 0; 
    }
  }
  
  let respuestasCorrectas = 0;

  respuestasCorrectas += preguntar("¿Conoces Star Wars?", "1 - Si claro! \n 2 - No, que es eso?", "1");

  respuestasCorrectas += preguntar("¿Cómo se llama el droide de Luke Skywalker?", "1 - R2-D2 \n 2 - BB-8", "1");

  respuestasCorrectas += preguntar("¿Quién fue el maestro de Ashoka Tano?", "1 - Darth Vader \n 2 - Anakin Skywalker", "2");

  respuestasCorrectas += preguntar("¿Quién mató al cazarrecompensas Jango Fett?", "1 - Maestro Yoda \n 2 - Mace Windu", "2");

  respuestasCorrectas += preguntar("¿Quién es el hijo de Han Solo?", "1 - Kylo Ren \n 2 - Chewbacca", "1");
  
  alert(`Acertaste... \n ${respuestasCorrectas}!! respuestas correctas!!`);
  
let repetir = confirm("¿Querés intentarlo otra vez?");    
while (repetir) {
      respuestasCorrectas = 0;
      
      respuestasCorrectas += preguntar("¿Conoces Star Wars?", "1 - Si claro! \n 2 - No, que es eso?", "1");
  
      respuestasCorrectas += preguntar("¿Cómo se llama el droide de Luke Skywalker?", "1 - R2-D2 \n 2 - BB-8", "1");
  
      respuestasCorrectas += preguntar("¿Quién fue el maestro de Ashoka Tano?", "1 - Darth Vader \n 2 - Anakin Skywalker", "2");
  
      respuestasCorrectas += preguntar("¿Quién mató al cazarrecompensas Jango Fett?", "1 - Maestro Yoda \n 2 - Mace Windu", "2");
  
      respuestasCorrectas += preguntar("¿Quién es el hijo de Han Solo?", "1 - Kylo Ren \n 2 - Chewbacca", "1");
  
      alert(`Acertaste... \n ${respuestasCorrectas}!! respuestas correctas!!`);
      
      repetir = confirm("¿Querés intentarlo otra vez?");
  }
  
  alert("¡Gracias por jugar!");
