import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API Docs',
    version: "1.0.0",
    description: 'API Docs'
  },
  host: 'localhost:3000',
  basePath: "/api"
};
// host: "surveys-5jvt.onrender.com",

const outputFile = '../api-swagger-doc.json';
const routes = ['../routes/cars.js', '../routes/books.js'];

swaggerAutogen()(outputFile, routes, doc);