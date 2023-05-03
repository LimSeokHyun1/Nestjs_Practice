import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//global import?
import { setupSwagger } from 'src/util/swagger';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
        .setTitle('NestJS Study API Docs')
        .setDescription('NestJS Study API description')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
}

// 시작점! Entry point
async function bootstrap() {
    // 가장 큰 app Module 생성
    const app = await NestFactory.create(AppModule);

    setupSwagger(app);

    // Node js application 실행, 3000 port 에서 ..
    await app.listen(3000);
}
bootstrap();
