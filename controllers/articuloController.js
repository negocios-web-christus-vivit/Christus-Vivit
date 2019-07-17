// Importar los modelos
// const Articulo = require('./models/Articulo');

exports.articulosHome = async (req, res) => {
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    res.render('index');
};

exports.wysiwyg = function(req, res){
    res.render('wysiwyg');
}