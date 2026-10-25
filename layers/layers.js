var wms_layers = [];


        var lyr_GoogleSatellite2026_0 = new ol.layer.Tile({
            'title': 'Google Satellite - 2026',
            'type':'base',
            'opacity': 0.704000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard2026_1 = new ol.layer.Tile({
            'title': 'OSM Standard - 2026',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PRGPiccinato28giugno1969_2 = new ol.format.GeoJSON();
var features_PRGPiccinato28giugno1969_2 = format_PRGPiccinato28giugno1969_2.readFeatures(json_PRGPiccinato28giugno1969_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRGPiccinato28giugno1969_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRGPiccinato28giugno1969_2.addFeatures(features_PRGPiccinato28giugno1969_2);
var lyr_PRGPiccinato28giugno1969_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRGPiccinato28giugno1969_2, 
                style: style_PRGPiccinato28giugno1969_2,
                popuplayertitle: 'PRG Piccinato - 28 giugno 1969',
                interactive: true,
    title: 'PRG Piccinato - 28 giugno 1969<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_0.png" /> <br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_1.png" /> A<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_2.png" /> A1<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_3.png" /> AREA PRIVATA<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_4.png" /> ARTIGIANALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_5.png" /> B<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_6.png" /> BALNEARE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_7.png" /> C<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_8.png" /> CENTRO COMMERCIALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_9.png" /> D<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_10.png" /> D1<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_11.png" /> D2<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_12.png" /> E<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_13.png" /> E1<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_14.png" /> F<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_15.png" /> G<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_16.png" /> G1<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_17.png" /> H<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_18.png" /> I<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_19.png" /> INDUSTRIALE GENERALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_20.png" /> INDUSTRIALE INFRASTRUTTURE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_21.png" /> INDUSTRIALE PORTUALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_22.png" /> INTERESSE ARCHITETTONICO<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_23.png" /> L<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_24.png" /> L1<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_25.png" /> RESIDENZIALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_26.png" /> RESIDENZIALE SATURA<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_27.png" /> RISPETTO PEDONALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_28.png" /> SPIAGGE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_29.png" /> VERDE PUBBLICO<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_30.png" /> VERDE RURALE<br />\
    <img src="styles/legend/PRGPiccinato28giugno1969_2_31.png" /> VINCOLO ASSOLUTO<br />' });
var lyr_PianoTopograficodelllacittaeSuburbio1928circa_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Piano Topografico dellla citta\' e Suburbio 1928-circa<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_0.png" /> 0<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_1.png" /> 1<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_2.png" /> 2<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_3.png" /> 3<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_4.png" /> 4<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_5.png" /> 5<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_6.png" /> 6<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_7.png" /> 7<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_8.png" /> 8<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_9.png" /> 9<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_10.png" /> 10<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_11.png" /> 11<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_12.png" /> 12<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_13.png" /> 13<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_14.png" /> 14<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_15.png" /> 15<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_16.png" /> 16<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_17.png" /> 17<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_18.png" /> 18<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_19.png" /> 19<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_20.png" /> 20<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_21.png" /> 21<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_22.png" /> 22<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_23.png" /> 23<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_24.png" /> 24<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_25.png" /> 25<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_26.png" /> 26<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_27.png" /> 27<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_28.png" /> 28<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_29.png" /> 29<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_30.png" /> 30<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_31.png" /> 31<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_32.png" /> 32<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_33.png" /> 33<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_34.png" /> 34<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_35.png" /> 35<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_36.png" /> 36<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_37.png" /> 37<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_38.png" /> 38<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_39.png" /> 39<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_40.png" /> 40<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_41.png" /> 41<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_42.png" /> 42<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_43.png" /> 43<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_44.png" /> 44<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_45.png" /> 45<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_46.png" /> 46<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_47.png" /> 47<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_48.png" /> 48<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_49.png" /> 49<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_50.png" /> 50<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_51.png" /> 51<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_52.png" /> 52<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_53.png" /> 53<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_54.png" /> 54<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_55.png" /> 55<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_56.png" /> 56<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_57.png" /> 57<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_58.png" /> 58<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_59.png" /> 59<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_60.png" /> 60<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_61.png" /> 61<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_62.png" /> 62<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_63.png" /> 63<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_64.png" /> 64<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_65.png" /> 65<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_66.png" /> 66<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_67.png" /> 67<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_68.png" /> 68<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_69.png" /> 69<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_70.png" /> 70<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_71.png" /> 71<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_72.png" /> 72<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_73.png" /> 73<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_74.png" /> 74<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_75.png" /> 75<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_76.png" /> 76<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_77.png" /> 77<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_78.png" /> 78<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_79.png" /> 79<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_80.png" /> 80<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_81.png" /> 81<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_82.png" /> 82<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_83.png" /> 83<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_84.png" /> 84<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_85.png" /> 85<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_86.png" /> 86<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_87.png" /> 87<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_88.png" /> 88<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_89.png" /> 89<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_90.png" /> 90<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_91.png" /> 91<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_92.png" /> 92<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_93.png" /> 93<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_94.png" /> 94<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_95.png" /> 95<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_96.png" /> 96<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_97.png" /> 97<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_98.png" /> 98<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_99.png" /> 99<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_100.png" /> 100<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_101.png" /> 101<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_102.png" /> 102<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_103.png" /> 103<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_104.png" /> 104<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_105.png" /> 105<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_106.png" /> 106<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_107.png" /> 107<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_108.png" /> 108<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_109.png" /> 109<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_110.png" /> 110<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_111.png" /> 111<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_112.png" /> 112<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_113.png" /> 113<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_114.png" /> 114<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_115.png" /> 115<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_116.png" /> 116<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_117.png" /> 117<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_118.png" /> 118<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_119.png" /> 119<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_120.png" /> 120<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_121.png" /> 121<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_122.png" /> 122<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_123.png" /> 123<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_124.png" /> 124<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_125.png" /> 125<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_126.png" /> 126<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_127.png" /> 127<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_128.png" /> 128<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_129.png" /> 129<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_130.png" /> 130<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_131.png" /> 131<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_132.png" /> 132<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_133.png" /> 133<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_134.png" /> 134<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_135.png" /> 135<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_136.png" /> 136<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_137.png" /> 137<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_138.png" /> 138<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_139.png" /> 139<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_140.png" /> 140<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_141.png" /> 141<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_142.png" /> 142<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_143.png" /> 143<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_144.png" /> 144<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_145.png" /> 145<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_146.png" /> 146<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_147.png" /> 147<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_148.png" /> 148<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_149.png" /> 149<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_150.png" /> 150<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_151.png" /> 151<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_152.png" /> 152<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_153.png" /> 153<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_154.png" /> 154<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_155.png" /> 155<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_156.png" /> 156<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_157.png" /> 157<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_158.png" /> 158<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_159.png" /> 159<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_160.png" /> 160<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_161.png" /> 161<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_162.png" /> 162<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_163.png" /> 163<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_164.png" /> 164<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_165.png" /> 165<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_166.png" /> 166<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_167.png" /> 167<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_168.png" /> 168<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_169.png" /> 169<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_170.png" /> 170<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_171.png" /> 171<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_172.png" /> 172<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_173.png" /> 173<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_174.png" /> 174<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_175.png" /> 175<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_176.png" /> 176<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_177.png" /> 177<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_178.png" /> 178<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_179.png" /> 179<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_180.png" /> 180<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_181.png" /> 181<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_182.png" /> 182<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_183.png" /> 183<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_184.png" /> 184<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_185.png" /> 185<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_186.png" /> 186<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_187.png" /> 187<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_188.png" /> 188<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_189.png" /> 189<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_190.png" /> 190<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_191.png" /> 191<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_192.png" /> 192<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_193.png" /> 193<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_194.png" /> 194<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_195.png" /> 195<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_196.png" /> 196<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_197.png" /> 197<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_198.png" /> 198<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_199.png" /> 199<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_200.png" /> 200<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_201.png" /> 201<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_202.png" /> 202<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_203.png" /> 203<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_204.png" /> 204<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_205.png" /> 205<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_206.png" /> 206<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_207.png" /> 207<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_208.png" /> 208<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_209.png" /> 209<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_210.png" /> 210<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_211.png" /> 211<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_212.png" /> 212<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_213.png" /> 213<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_214.png" /> 214<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_215.png" /> 215<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_216.png" /> 216<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_217.png" /> 217<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_218.png" /> 218<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_219.png" /> 219<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_220.png" /> 220<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_221.png" /> 221<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_222.png" /> 222<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_223.png" /> 223<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_224.png" /> 224<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_225.png" /> 225<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_226.png" /> 226<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_227.png" /> 227<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_228.png" /> 228<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_229.png" /> 229<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_230.png" /> 230<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_231.png" /> 231<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_232.png" /> 232<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_233.png" /> 233<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_234.png" /> 234<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_235.png" /> 235<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_236.png" /> 236<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_237.png" /> 237<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_238.png" /> 238<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_239.png" /> 239<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_240.png" /> 240<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_241.png" /> 241<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_242.png" /> 242<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_243.png" /> 243<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_244.png" /> 244<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_245.png" /> 245<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_246.png" /> 246<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_247.png" /> 247<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_248.png" /> 248<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_249.png" /> 249<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_250.png" /> 250<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_251.png" /> 251<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_252.png" /> 252<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_253.png" /> 253<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_254.png" /> 254<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_3_255.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PianoTopograficodelllacittaeSuburbio1928circa_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1671416.214055, 4504939.429864, 1685369.577614, 4515526.341316]
        })
    });
var format_MappaturaSistemaCostruttivo_4 = new ol.format.GeoJSON();
var features_MappaturaSistemaCostruttivo_4 = format_MappaturaSistemaCostruttivo_4.readFeatures(json_MappaturaSistemaCostruttivo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MappaturaSistemaCostruttivo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MappaturaSistemaCostruttivo_4.addFeatures(features_MappaturaSistemaCostruttivo_4);
var lyr_MappaturaSistemaCostruttivo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MappaturaSistemaCostruttivo_4, 
                style: style_MappaturaSistemaCostruttivo_4,
                popuplayertitle: 'Mappatura Sistema Costruttivo',
                interactive: true,
    title: 'Mappatura Sistema Costruttivo<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_4_0.png" /> ?<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_4_1.png" /> Calcestruzzo Armato<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_4_2.png" /> Misto<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_4_3.png" /> Muratura<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_4_4.png" /> <br />' });
var format_Catastale_5 = new ol.format.GeoJSON();
var features_Catastale_5 = format_Catastale_5.readFeatures(json_Catastale_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catastale_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catastale_5.addFeatures(features_Catastale_5);
cluster_Catastale_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Catastale_5
});
var lyr_Catastale_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Catastale_5, 
                style: style_Catastale_5,
                popuplayertitle: 'Catastale',
                interactive: true,
                title: '<img src="styles/legend/Catastale_5.png" /> Catastale'
            });
var group_OlivetoScammacca = new ol.layer.Group({
                                layers: [lyr_MappaturaSistemaCostruttivo_4,lyr_Catastale_5,],
                                fold: 'open',
                                title: 'Oliveto Scammacca'});

lyr_GoogleSatellite2026_0.setVisible(true);lyr_OSMStandard2026_1.setVisible(true);lyr_PRGPiccinato28giugno1969_2.setVisible(true);lyr_PianoTopograficodelllacittaeSuburbio1928circa_3.setVisible(true);lyr_MappaturaSistemaCostruttivo_4.setVisible(true);lyr_Catastale_5.setVisible(true);
var layersList = [lyr_GoogleSatellite2026_0,lyr_OSMStandard2026_1,lyr_PRGPiccinato28giugno1969_2,lyr_PianoTopograficodelllacittaeSuburbio1928circa_3,group_OlivetoScammacca];
lyr_PRGPiccinato28giugno1969_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONA': 'ZONA', });
lyr_MappaturaSistemaCostruttivo_4.set('fieldAliases', {'fid': 'fid', 'N.': 'N.', 'D. Uso': 'D. Uso', 'S.C.': 'S.C.', 'N. Piani': 'N. Piani', 'Interpiano': 'Interpiano', 'H (m)': 'H (m)', 'S. (mq)': 'S. (mq)', 'V (mc)': 'V (mc)', });
lyr_Catastale_5.set('fieldAliases', {'id': 'id', 'Planimetri': 'Planimetri', 'Prospetto': 'Prospetto', 'Sezione': 'Sezione', });
lyr_PRGPiccinato28giugno1969_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_MappaturaSistemaCostruttivo_4.set('fieldImages', {'fid': 'TextEdit', 'N.': 'Range', 'D. Uso': 'TextEdit', 'S.C.': 'TextEdit', 'N. Piani': 'TextEdit', 'Interpiano': 'Range', 'H (m)': 'Range', 'S. (mq)': 'Range', 'V (mc)': 'Range', });
lyr_Catastale_5.set('fieldImages', {'id': 'TextEdit', 'Planimetri': '', 'Prospetto': '', 'Sezione': '', });
lyr_PRGPiccinato28giugno1969_2.set('fieldLabels', {'OBJECTID': 'no label', 'ZONA': 'inline label - visible with data', });
lyr_MappaturaSistemaCostruttivo_4.set('fieldLabels', {'fid': 'hidden field', 'N.': 'inline label - visible with data', 'D. Uso': 'inline label - always visible', 'S.C.': 'inline label - always visible', 'N. Piani': 'inline label - always visible', 'Interpiano': 'hidden field', 'H (m)': 'inline label - always visible', 'S. (mq)': 'inline label - always visible', 'V (mc)': 'inline label - always visible', });
lyr_Catastale_5.set('fieldLabels', {'id': 'no label', 'Planimetri': 'inline label - visible with data', 'Prospetto': 'inline label - visible with data', 'Sezione': 'inline label - visible with data', });
lyr_Catastale_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});