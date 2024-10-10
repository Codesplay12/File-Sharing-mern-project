import express from 'express';
import { uploadImage, getImage } from '../controller/imagecontro.js';
import upload from '../utils/upload.js'; // import the multer middleware

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage); // apply the upload middleware
router.get('/file/:fileId', getImage);

export default router;
