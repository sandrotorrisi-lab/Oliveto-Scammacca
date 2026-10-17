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
var format_MappaturaSistemaCostruttivo_1 = new ol.format.GeoJSON();
var features_MappaturaSistemaCostruttivo_1 = format_MappaturaSistemaCostruttivo_1.readFeatures(json_MappaturaSistemaCostruttivo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MappaturaSistemaCostruttivo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MappaturaSistemaCostruttivo_1.addFeatures(features_MappaturaSistemaCostruttivo_1);
var lyr_MappaturaSistemaCostruttivo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MappaturaSistemaCostruttivo_1, 
                style: style_MappaturaSistemaCostruttivo_1,
                popuplayertitle: 'Mappatura Sistema Costruttivo',
                interactive: true,
    title: 'Mappatura Sistema Costruttivo<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_1_0.png" /> ?<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_1_1.png" /> Calcestruzzo Armato<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_1_2.png" /> Misto<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_1_3.png" /> Muratura<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_1_4.png" /> <br />' });
var group_OlivetoScammacca = new ol.layer.Group({
                                layers: [lyr_MappaturaSistemaCostruttivo_1,],
                                fold: 'open',
                                title: 'Oliveto Scammacca'});

lyr_OSMStandard_0.setVisible(true);lyr_MappaturaSistemaCostruttivo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_OlivetoScammacca];
lyr_MappaturaSistemaCostruttivo_1.set('fieldAliases', {'fid': 'fid', 'N.': 'N.', 'Destinazione d\'uso': 'Destinazione d\'uso', 'Sistema Costruttivo': 'Sistema Costruttivo', 'N. Piani': 'N. Piani', 'Interpiano': 'Interpiano', 'Altezza Totale': 'Altezza Totale', 'Superficie': 'Superficie', 'Volume': 'Volume', });
lyr_MappaturaSistemaCostruttivo_1.set('fieldImages', {'fid': 'TextEdit', 'N.': 'Range', 'Destinazione d\'uso': 'TextEdit', 'Sistema Costruttivo': 'TextEdit', 'N. Piani': 'TextEdit', 'Interpiano': 'TextEdit', 'Altezza Totale': 'TextEdit', 'Superficie': 'TextEdit', 'Volume': 'TextEdit', });
lyr_MappaturaSistemaCostruttivo_1.set('fieldLabels', {'fid': 'hidden field', 'N.': 'hidden field', 'Destinazione d\'uso': 'hidden field', 'Sistema Costruttivo': 'inline label - always visible', 'N. Piani': 'inline label - always visible', 'Interpiano': 'hidden field', 'Altezza Totale': 'inline label - always visible', 'Superficie': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_MappaturaSistemaCostruttivo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});