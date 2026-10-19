var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MappaturaSistemaCostruttivo_2 = new ol.format.GeoJSON();
var features_MappaturaSistemaCostruttivo_2 = format_MappaturaSistemaCostruttivo_2.readFeatures(json_MappaturaSistemaCostruttivo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MappaturaSistemaCostruttivo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MappaturaSistemaCostruttivo_2.addFeatures(features_MappaturaSistemaCostruttivo_2);
var lyr_MappaturaSistemaCostruttivo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MappaturaSistemaCostruttivo_2, 
                style: style_MappaturaSistemaCostruttivo_2,
                popuplayertitle: 'Mappatura Sistema Costruttivo',
                interactive: true,
    title: 'Mappatura Sistema Costruttivo<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_2_0.png" /> ?<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_2_1.png" /> Calcestruzzo Armato<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_2_2.png" /> Misto<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_2_3.png" /> Muratura<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_2_4.png" /> <br />' });
var format_Catastale_3 = new ol.format.GeoJSON();
var features_Catastale_3 = format_Catastale_3.readFeatures(json_Catastale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catastale_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catastale_3.addFeatures(features_Catastale_3);
cluster_Catastale_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Catastale_3
});
var lyr_Catastale_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Catastale_3, 
                style: style_Catastale_3,
                popuplayertitle: 'Catastale',
                interactive: true,
                title: '<img src="styles/legend/Catastale_3.png" /> Catastale'
            });
var group_OlivetoScammacca = new ol.layer.Group({
                                layers: [lyr_MappaturaSistemaCostruttivo_2,lyr_Catastale_3,],
                                fold: 'open',
                                title: 'Oliveto Scammacca'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MappaturaSistemaCostruttivo_2.setVisible(true);lyr_Catastale_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,group_OlivetoScammacca];
lyr_MappaturaSistemaCostruttivo_2.set('fieldAliases', {'fid': 'fid', 'N.': 'N.', 'D. Uso': 'D. Uso', 'S.C.': 'S.C.', 'N. Piani': 'N. Piani', 'Interpiano': 'Interpiano', 'H (m)': 'H (m)', 'S. (mq)': 'S. (mq)', 'V (mc)': 'V (mc)', 'Catastale': 'Catastale', });
lyr_Catastale_3.set('fieldAliases', {'id': 'id', 'Link': 'Link', });
lyr_MappaturaSistemaCostruttivo_2.set('fieldImages', {'fid': 'TextEdit', 'N.': 'Range', 'D. Uso': 'TextEdit', 'S.C.': 'TextEdit', 'N. Piani': 'TextEdit', 'Interpiano': 'Range', 'H (m)': 'Range', 'S. (mq)': 'Range', 'V (mc)': 'Range', 'Catastale': 'CheckBox', });
lyr_Catastale_3.set('fieldImages', {'id': 'TextEdit', 'Link': 'TextEdit', });
lyr_MappaturaSistemaCostruttivo_2.set('fieldLabels', {'fid': 'hidden field', 'N.': 'hidden field', 'D. Uso': 'inline label - always visible', 'S.C.': 'inline label - always visible', 'N. Piani': 'inline label - always visible', 'Interpiano': 'hidden field', 'H (m)': 'inline label - always visible', 'S. (mq)': 'inline label - always visible', 'V (mc)': 'inline label - always visible', 'Catastale': 'hidden field', });
lyr_Catastale_3.set('fieldLabels', {'id': 'no label', 'Link': 'no label', });
lyr_Catastale_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});