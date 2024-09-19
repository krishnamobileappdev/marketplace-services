import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQLHOST || 'autorack.proxy.rlwy.net',
      port: parseInt(process.env.MYSQLPORT, 10) || 55661,
      username: process.env.MYSQLUSER || "root",
      password: process.env.MYSQLPASSWORD || 'IsjuOFvoSxpgjCBoWEsbzIPdRABFTEjB',
      database: process.env.MYSQLDATABASE || 'railway',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
