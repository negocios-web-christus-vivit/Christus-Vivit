// Importar los modelos
const Articulo = require('../models/Articulo');
//importar convertidor a pug
const html2pug = require('html2pug')

var markdown = require('marked');

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
    
    const text = "figure.media oembed(url='https://www.youtube.com/watch?v=A0S3Wy0ofZg')";
    res.render('verArticulos',{
        articulos,
        markdown,
        text
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

exports.articuloPorUrl = async (req, res) => {

    const articulosPromise = Articulo.findOne({
        where : {
            url : req.params.url
        }
    });

    const [articulo] = await Promise.all([articulosPromise]).then();
    
    res.render('verArticuloIndividual',{
        articulo
    });

}