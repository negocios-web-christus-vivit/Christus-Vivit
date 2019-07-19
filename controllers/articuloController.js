// Importar los modelos
const Articulo = require('../models/Articulo');
//importar convertidor a pug
const html2pug = require('html2pug')

exports.articulosHome = async (req, res) => {
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    res.render('index');
};

exports.wysiwyg = function(req, res){
    res.render('wysiwyg');
}

exports.ariculosHome2 = async(req, res) =>{
    const articulosPromise = Articulo.findAll();

    const [articulos] = await Promise.all([articulosPromise]).then();
    
    const pugCode = 'h1 holia'
    res.render('verArticulos',{
        articulos,
        pugCode
    });
}
exports.nuevoArticulo = async (req, res) => {

    const titulo = req.body.titulo;
    const content = req.body.content;
   
    let errores = [];
    
    if (!titulo && !content ) {
        errores.push({'texto': 'Se encotraron errores'});
    }
   
    if (errores.length > 0) {
        console.log(errores)
        res.render('/crear_articulos');
    }else{
        let newArticle = new Articulo({
                    nombre:titulo,
                    cuerpo:content
        });

        await Articulo.create({nombre: newArticle.nombre, cuerpo: newArticle.cuerpo});
        res.redirect('/ver_articulos');
    }

    

}