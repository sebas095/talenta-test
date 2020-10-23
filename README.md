# Talenta Test

Pequeña aplicación del clásico juego de tres en raya. [Ver Tweet](https://twitter.com/sebasd095/status/1319159042162495489)

## 🖥 Requerimentos/Dependencias

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/es/)
- [Webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)

## 🚀 Backend

### 🛠 instalación

```bash
  cd api
  npm install
```

### ⚙️ Ejecutar en desarrollo

```bash
  npm run dev
```

### ⚙️ Ejecutar en producción

```bash
  npm start
```

- Corriendo en http://localhost:5000/v1/api/

## 🚀 Frontend

### 🛠 instalación

```bash
  cd client
  npm install
```

### ⚙️ Ejecutar en desarrollo

```bash
  npm start
```

### ⚙️ Ejecutar en producción

```bash
  npm run start:prod
```

- Corriendo en http://localhost:3000

## 🔗 Endpoints

### Get Game Info

GET `/game/:id`

#### Response

```js
{
  _id: String,
  status: String,
  board: String[],
  turn: String,
  winner: String,
}
```

### Get Game Info

PATCH `/game/:id`

#### Response

```js
{
  _id: String,
  status: String,
  board: String[],
  turn: String,
  winner: String,
}
```

### Create New Game

POST `/game`

#### Response

```js
{
  _id: String,
  status: String,
  board: String[],
  turn: String,
  winner: String,
}
```

### Get All Games

GET `/game`

#### Response

```js
{
  started: [
    {
      _id: String,
      status: String,
      board: String[],
      turn: String,
      winner: String,
    }
  ],
  finished: {
    wons: [
      {
        _id: String,
        status: String,
        board: String[],
        turn: String,
        winner: String,
      }
    ],
    tied: [
      {
        _id: String,
        status: String,
        board: String[],
        turn: String,
        winner: String,
      }
    ]
  }
}
```

### Get Stats Game

GET `/game/stats`

#### Response

```js
{
  playerOne: Number,
  playerTwo: Number
}
```

## 🧾 Licencia

The MIT License (MIT)
