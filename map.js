window.addEventListener('load', function() {
    if (!window.map) return;


    const pointsSource = new ol.source.Vector();
    const pointsLayer = new ol.layer.Vector({
        source: pointsSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({ color: 'red' }),
                stroke: new ol.style.Stroke({ color: 'black', width: 1 })
            })
        })
    });


    window.map.addLayer(pointsLayer);
   
    // Configuração dos modais
    const customModal = document.getElementById('customModal');
    const locationModal = document.getElementById('locationModal');
    const allModals = document.getElementsByClassName('modal');
    const closeButtons = document.getElementsByClassName('modal-close');


    // Fechar modais quando clicar no X
    Array.from(closeButtons).forEach(function(btn) {
        btn.onclick = function() {
            Array.from(allModals).forEach(function(modal) {
                modal.style.display = 'none';
            });
        }
    });


    // Fechar modais quando clicar fora deles
    window.onclick = function(event) {
        Array.from(allModals).forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }


    // Adicionar evento para o botão de refresh
    document.getElementById('refresh-points').addEventListener('click', function() {
        pointsSource.clear();
    });


    document.getElementById('add-coordinates').addEventListener('click', function() {
        const lat = parseFloat(document.getElementById('latitude').value);
        const lon = parseFloat(document.getElementById('longitude').value);


        if (isNaN(lat) || isNaN(lon)) {
            alert('Por favor, insira coordenadas válidas.');
            return;
        }


        const coordinates = ol.proj.transform(
            [lon, lat],
            'EPSG:4326',
            window.map.getView().getProjection().getCode()
        );


        let pontoNaTerra = false;
        let areaInfo = '';


        window.map.getLayers().forEach(function(layer) {
            if (layer.getSource() && layer.getSource().getFeatures) {
                const features = layer.getSource().getFeatures();
                features.forEach(function(feature) {
                    if (feature.getGeometry().intersectsCoordinate(coordinates)) {
                        pontoNaTerra = true;
                        const properties = feature.getProperties();
                        for (let prop in properties) {
                            if (properties[prop] && typeof properties[prop] === 'string' &&
                                properties[prop].toLowerCase().includes('contactar')) {
                                areaInfo = properties[prop];
                                break;
                            }
                        }
                        if (!areaInfo) {
                            areaInfo = feature.get('Concelho') ||
                                      feature.get('Nome') ||
                                      feature.get('Contacto') ||
                                      layer.get('title') ||
                                      'Área identificada';
                        }
                    }
                });
            }
        });


        const feature = new ol.Feature({
            geometry: new ol.geom.Point(coordinates),
            name: `Coordenadas (${lat}, ${lon})`
        });


        pointsSource.addFeature(feature);
        window.map.getView().animate({
            center: coordinates,
            zoom: 12,
            duration: 1000
        });


        if (!pontoNaTerra) {
            customModal.style.display = 'block';
        } else {
            document.getElementById('modal-lat').textContent = lat;
            document.getElementById('modal-lon').textContent = lon;
            document.getElementById('modal-area').textContent = areaInfo;
            locationModal.style.display = 'block';
        }
    });
});


