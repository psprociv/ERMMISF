ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5016").setExtent([285161.012659, 3605216.486382, 348143.938659, 3642611.227115]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Areas_Portuarias_RAM_1 = new ol.format.GeoJSON();
var features_Areas_Portuarias_RAM_1 = format_Areas_Portuarias_RAM_1.readFeatures(json_Areas_Portuarias_RAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Areas_Portuarias_RAM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Portuarias_RAM_1.addFeatures(features_Areas_Portuarias_RAM_1);
var lyr_Areas_Portuarias_RAM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Portuarias_RAM_1, 
                style: style_Areas_Portuarias_RAM_1,
                popuplayertitle: "Areas_Portuarias_RAM",
                interactive: true,
                title: '<img src="styles/legend/Areas_Portuarias_RAM_1.png" /> Areas_Portuarias_RAM'
            });
var format_Madeira_Municipios_CAOP2023_2 = new ol.format.GeoJSON();
var features_Madeira_Municipios_CAOP2023_2 = format_Madeira_Municipios_CAOP2023_2.readFeatures(json_Madeira_Municipios_CAOP2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Madeira_Municipios_CAOP2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeira_Municipios_CAOP2023_2.addFeatures(features_Madeira_Municipios_CAOP2023_2);
var lyr_Madeira_Municipios_CAOP2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeira_Municipios_CAOP2023_2, 
                style: style_Madeira_Municipios_CAOP2023_2,
                popuplayertitle: "Madeira_Municipios_CAOP2023",
                interactive: true,
                title: '<img src="styles/legend/Madeira_Municipios_CAOP2023_2.png" /> Madeira_Municipios_CAOP2023'
            });
var format_IFCN_3 = new ol.format.GeoJSON();
var features_IFCN_3 = format_IFCN_3.readFeatures(json_IFCN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_IFCN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IFCN_3.addFeatures(features_IFCN_3);
var lyr_IFCN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IFCN_3, 
                style: style_IFCN_3,
                popuplayertitle: "IFCN",
                interactive: true,
                title: '<img src="styles/legend/IFCN_3.png" /> IFCN'
            });
var format_DRAAC_AguasBalneares_4 = new ol.format.GeoJSON();
var features_DRAAC_AguasBalneares_4 = format_DRAAC_AguasBalneares_4.readFeatures(json_DRAAC_AguasBalneares_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_DRAAC_AguasBalneares_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAAC_AguasBalneares_4.addFeatures(features_DRAAC_AguasBalneares_4);
var lyr_DRAAC_AguasBalneares_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAAC_AguasBalneares_4, 
                style: style_DRAAC_AguasBalneares_4,
                popuplayertitle: "DRAAC_Aguas Balneares",
                interactive: true,
                title: '<img src="styles/legend/DRAAC_AguasBalneares_4.png" /> DRAAC_Aguas Balneares'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_Areas_Portuarias_RAM_1.setVisible(true);lyr_Madeira_Municipios_CAOP2023_2.setVisible(true);lyr_IFCN_3.setVisible(true);lyr_DRAAC_AguasBalneares_4.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_Areas_Portuarias_RAM_1,lyr_Madeira_Municipios_CAOP2023_2,lyr_IFCN_3,lyr_DRAAC_AguasBalneares_4];
lyr_Areas_Portuarias_RAM_1.set('fieldAliases', {'Name': 'Name', 'Contacto': 'Contacto', });
lyr_Madeira_Municipios_CAOP2023_2.set('fieldAliases', {'Municipio': 'Municipio', 'Contacto': 'Contacto', });
lyr_IFCN_3.set('fieldAliases', {'layer': 'layer', 'Contacto': 'Contacto', });
lyr_DRAAC_AguasBalneares_4.set('fieldAliases', {'Nome da Á': 'Nome da Á', 'Contacto': 'Contacto', });
lyr_Areas_Portuarias_RAM_1.set('fieldImages', {'Name': 'TextEdit', 'Contacto': '', });
lyr_Madeira_Municipios_CAOP2023_2.set('fieldImages', {'Municipio': 'TextEdit', 'Contacto': '', });
lyr_IFCN_3.set('fieldImages', {'layer': 'TextEdit', 'Contacto': '', });
lyr_DRAAC_AguasBalneares_4.set('fieldImages', {'Nome da Á': 'TextEdit', 'Contacto': 'TextEdit', });
lyr_Areas_Portuarias_RAM_1.set('fieldLabels', {'Name': 'no label', 'Contacto': 'no label', });
lyr_Madeira_Municipios_CAOP2023_2.set('fieldLabels', {'Municipio': 'no label', 'Contacto': 'no label', });
lyr_IFCN_3.set('fieldLabels', {'layer': 'no label', 'Contacto': 'no label', });
lyr_DRAAC_AguasBalneares_4.set('fieldLabels', {'Nome da Á': 'no label', 'Contacto': 'no label', });
lyr_DRAAC_AguasBalneares_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});