var doc = {
    _id: //idMongo,
    record: //record al que pertenecen,
    doc: {
         title: //titulo del documento (único para el record),
         theme: //tema del editor tras último cambio,
         mode: //tema del editor tras el último cambio,
         value: //último estado del contenido del editor
    },
    start: //(boolean) (True)? comienzo grabación : se ha creado durante la grabación
           //o es el estado final de otro inicial.
};
