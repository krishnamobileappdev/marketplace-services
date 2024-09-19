import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQLHOST || "localhost",
      port: parseInt(process.env.MYSQLPORT, 10) || 3306,
      username: process.env.MYSQLUSER || "root",
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      autoLoadEntities: true,
      synchronize: true, // set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
