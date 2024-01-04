import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    // Validação para arquivos com formatos diferentes
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG, JPEG ou JPG'));
    }

    return cb(null, true);
  },

  // Configuração do multer para armazenamento de arquivos
  storage: multer.diskStorage({
    // Define o diretório de destino para os uploads
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    // Define o nome do arquivo a ser salvo
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
