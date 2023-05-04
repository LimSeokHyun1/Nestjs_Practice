import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 시작점! Entry point
async function bootstrap() {
    // 가장 큰 app Module 생성
    const app = await NestFactory.create(AppModule);

    // Node js application 실행, 3000 port 에서 ..
    await app.listen(3000);
}
bootstrap();
