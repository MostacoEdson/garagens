//carrega o mapa
let lat = -23.557876134993617
let lng = -46.440005170713576

let latitudeDoUsuario;
function obterLatitudeDoUsuario() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitudeDoUsuario = position.coords.latitude;
            console.log('Latitude do usuário:', latitudeDoUsuario);
            // Agora você pode acessar a variável "latitudeDoUsuario" em qualquer lugar do seu código.
        }, function(error) {
            console.log('Erro ao obter a geolocalização:', error);
        });
    } else {
        console.log('Geolocalização não suportada pelo navegador.');
    }
}
obterLatitudeDoUsuario();
let longitudeDoUsuario;
function obterLongitudeDoUsuario() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            longitudeDoUsuario = position.coords.longitude;
            console.log('Longitude do usuário:', longitudeDoUsuario);
            // Agora você pode acessar a variável "latitudeDoUsuario" em qualquer lugar do seu código.
        }, function(error) {
            console.log('Erro ao obter a geolocalização:', error);
        });
    } else {
        console.log('Geolocalização não suportada pelo navegador.');
    }
}
obterLongitudeDoUsuario();

let map = L.map('map').setView([-23.573302,-46.6896913],18)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);






// cria os marcadores no mapa























function converterEderecoParaCoordenadas () {
    const endereco = `${enderecos[0].rua}, ${enderecos[0].numero}, '-' ${enderecos[0].bairro}, ${enderecos[0].cidade}, '-',${enderecos[0].estado}, ${enderecos[0].cep} `
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`

    fetch(url)
    .then(response => response.json())
    .then(result => {
        if(result.length > 0) {
            let latitude = parseFloat(result[0].lat)
            let longitude = parseFloat(result[0].lon)
            console.log('Latitude: ', latitude, 'Longitude: ', longitude)
            enderecos[0].coordenadas.latitude = latitude
            enderecos[0].coordenadas.longitude = longitude
            console.log(enderecos)
            marker.setLatLng([latitude, longitude])
        }else{
            console.log("Endereço não encontrado")
        }
    })
    .catch(error => {
        console.log("Erro ao converter o endereço: ", error)
    })
}

