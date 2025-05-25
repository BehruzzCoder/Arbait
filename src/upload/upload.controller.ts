import {
    Controller,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiConsumes, ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { extname } from 'path';
import { AuthGuard } from 'src/auth/jwt.guard';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Upload')
@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    cb(null, `${uniqueSuffix}${ext}`);
                }
            })
        })
    )
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary'
                }
            }
        }
    })
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return {
            message: 'File uploaded successfully',
            filePath: `/uploads/${file.filename}`
        };
    }
}
