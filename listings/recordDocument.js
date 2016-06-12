var record = {
    _id: //idMongo,
    author: //idUser,
    title: //no único,
    description: //(opcional),
    RC: //[{},...] Funciones de reproducción sobre el editor
    createAt: //fechaCreación,
    docs_count: //contador de documentos,
    votes_count: //contador de votos,
    replies_count: //contador de respuestas,
    comments_count: //contador de comentarios,
    channel_id: //canal al que pertenece,
    lesson_id: //lección a la que pertenece,
    section_id: //sección a la que pertenece dentro de una lección,
    order: //orden dentro de la lista de reproducción de la sección a la que pertenece.
    tags: //[{},...] etiquetas,
    ready: //(boolean) para conocer la disponibilidad del record.
    img: //imagen miniatura,
    duration: //duración en milisegundos de la grabación.
    isReply: //(boolean) indica si se trata de una respuesta a otro record.
    parent_id: //idMongo del record al que responde.
    track: //{_id: 'id del track en SoundCloud', link: 'link SoundCloud'}
};
