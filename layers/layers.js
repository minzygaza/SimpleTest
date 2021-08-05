var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__CLS_FSH_AREA_SMR_1 = new ol.format.GeoJSON();
var features__CLS_FSH_AREA_SMR_1 = format__CLS_FSH_AREA_SMR_1.readFeatures(json__CLS_FSH_AREA_SMR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__CLS_FSH_AREA_SMR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__CLS_FSH_AREA_SMR_1.addFeatures(features__CLS_FSH_AREA_SMR_1);
var lyr__CLS_FSH_AREA_SMR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__CLS_FSH_AREA_SMR_1, 
                style: style__CLS_FSH_AREA_SMR_1,
                interactive: true,
                title: '<img src="styles/legend/_CLS_FSH_AREA_SMR_1.png" /> 조업밀집구역_여름 CLS_FSH_AREA_SMR'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__CLS_FSH_AREA_SMR_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__CLS_FSH_AREA_SMR_1];
lyr__CLS_FSH_AREA_SMR_1.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'AREA_SIZE': 'AREA_SIZE', });
lyr__CLS_FSH_AREA_SMR_1.set('fieldImages', {'OGR_FID': '', 'AREA_SIZE': '', });
lyr__CLS_FSH_AREA_SMR_1.set('fieldLabels', {'OGR_FID': 'no label', 'AREA_SIZE': 'no label', });
lyr__CLS_FSH_AREA_SMR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});