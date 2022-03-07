## Project setup

### Install NPM
```
npm install
npm install -g mongo-seeding-cli
```

### Compile and minifies for development
```
npm run start
```

### Run migrations
```
sequelize db:migrate
seed -u 'mongodb://127.0.0.1:27017/mydb' --drop-database ./example/data
```

### Undo migrations
```
sequelize db:migrate:undo:all
```

### Run seeders
```
sequelize db:seed:all
```

### Undo seeders
```
sequelize db:seed:undo:all
```

### Run tests script
```
npm run test
```

### Swagger API documentation
```
http://127.0.0.1:{port}/api-docs
```
