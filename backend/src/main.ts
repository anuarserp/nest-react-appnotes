import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   //validacion
   app.useGlobalPipes(
      new ValidationPipe({
         whitelist: true,
      })
   );

   //puerto
   await app.listen(4000);
   Logger.log(`Server on port ${await app.getUrl()}`);
}

bootstrap();
