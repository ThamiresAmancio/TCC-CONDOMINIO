
var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");


const BUCKET = "tcc-condominio-2f85f.appspot.com";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});


const bucket = admin.storage().bucket();

const uploadImage = (req,res,next) => {

    if(!req.file) return next();

    const imagem = req.file;
    const nameArquivo = Date.now() + "." + imagem.originalname.split(".").pop();

    const file = bucket.file(nameArquivo);

    const stream = file.createWriteStream({
        metadata:{
            contentType: imagem.mimetype,
        },
    });

    stream.on("error",(e) =>{
        console.error(e);
    });


    stream.on("finish", async () => {

       await file.makePublic();


       req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameArquivo}`;

       next();

    });

    stream.end(imagem.buffer)

}


module.exports = uploadImage;