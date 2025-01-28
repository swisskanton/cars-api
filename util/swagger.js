import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Wizards API',
    version: "1.0.0",
    description: 'Wirards Docs'
  },
  host: 'localhost:3000',
  basePath: "/api/wizards"
};
// host: "surveys-5jvt.onrender.com",

const outputFile = '../wizards-swagger-doc.json';
const routes = ['../routes/wizards.js'];

swaggerAutogen()(outputFile, routes, doc);