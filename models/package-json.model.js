module.exports = (name, description) => {
    return `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "${description}",
  "main": "bin/server.js",        
  "dependencies": {
    "axios": "^0.19.1",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "js-yaml": "^3.13.1",
    "moment": "^2.24.0",
    "swagger-tools": "^0.10.4"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^7.0.0",
    "nodemon": "^2.0.2",
    "nyc": "^15.0.0",
    "supertest": "^4.0.2"
  },
  "scripts": {
    "test": "nyc ./node_modules/mocha/bin/mocha --recursive --exit --timeout 40000",
    "coverage": "nyc report --reporter=lcov",
    "start": "node bin/server.js",
    "dev": "nodemon bin/server.js"
  }                
}            
    `
}