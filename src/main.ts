import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

// 시작점! Entry point
async function bootstrap() {
    // 가장 큰 app Module 생성
    const app = await NestFactory.create(AppModule);

    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
    
    // Node js application 실행, 3000 port 에서 ..
    await app.listen(3000);
}
bootstrap();
