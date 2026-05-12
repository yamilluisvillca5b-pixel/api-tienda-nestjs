import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { OrdenProductoModule } from './orden-producto/orden-producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'tienda',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClientesModule,
    CategoriasModule,
    ProductosModule,
    OrdenesModule,
    OrdenProductoModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}