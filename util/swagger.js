import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Users API',
    version: "1.0.0",
    description: 'Users API'
  },
  host: 'localhost:3000',
  basePath: "/cars"
};

const outputFile = '../swagger-output.json';
const routes = ['../routes/cars.js'];

swaggerAutogen()(outputFile, routes, doc);