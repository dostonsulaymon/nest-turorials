import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";






async function bootstrap(){
    const app = await NestFactory.create(AppModule);


    await app.listen(3030);
}

bootstrap().then(r => console.log(`App started on port 3000`));


