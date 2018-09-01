const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad del clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}