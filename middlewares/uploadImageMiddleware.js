import multer from 'multer';
//import path from 'path';

//  const uploadImageMiddleware = multer({
//      storage: multer.diskStorage({
//          destination: (req, file, cb) => {
//              cb(null, '../api-blog/public');
//          },
//          filename: (req, file, cb) => {
//              cb(null, Date.now().toString() + "_" + file.originalname);
//          }
//      }),

//      fileFilter: (req, file, cb) => {
//          const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(
//              formatoAceito => formatoAceito === file.mimetype
//          );

//          if (extensaoImg) {
//              return cb(null, true);
//          } else {
//              return cb(null, false);
//          }
//      }
//  });


const uploadImageMiddleware = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
          //  cb(null, path.resolve('../public')); // Caminho
          cb(null, '../api-blog/public');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname);
        }
    }),

    fileFilter: (req, file, cb) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype);

        if (extensaoImg) {
            return cb(null, true);
        } else {
            req.fileValidationError = "Formato de arquivo inválido! Use PNG, JPG ou JPEG.";
            return cb(null, false);
        }
    }
});

export default uploadImageMiddleware;


