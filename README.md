# API Tienda Online

Backend desarrollado con NestJS, PostgreSQL y TypeORM.

## Tecnologías usadas

- NestJS
- PostgreSQL
- TypeORM
- Swagger
- Class Validator

---

# Instalación

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## Entrar al proyecto

```bash
cd tienda
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar proyecto

```bash
npm run start:dev
```

---

# Base de Datos

Configurar PostgreSQL en:

```ts
app.module.ts
```

```ts
username: 'postgres',
password: '1234',
database: 'tienda',
```

---

# Documentación Swagger

Entrar a:

```text
http://localhost:3000/docs
```

---

# Funcionalidades

## CRUD Clientes
- Crear cliente
- Obtener clientes
- Actualizar cliente
- Eliminar cliente

## CRUD Categorias
- Crear categoria
- Obtener categorias
- Actualizar categoria
- Eliminar categoria

## CRUD Productos
- Crear producto
- Relación con categoria
- Obtener productos

## CRUD Ordenes
- Crear orden
- Relación con cliente

## CRUD OrdenProducto
- Crear detalle de orden
- Relación orden-producto

---

# Relaciones implementadas

- Cliente -> Orden
- Categoria -> Producto
- Orden -> OrdenProducto
- Producto -> OrdenProducto

---

# Manejo de errores

Uso de:

```ts
NotFoundException
```

---

# Autor

Yamil Luis Villca