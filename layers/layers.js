ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1678783.167537, 4510889.480087, 1681813.634810, 4512772.087800]);
var wms_layers = [];


        var lyr_GoogleSatellite2026_0 = new ol.layer.Tile({
            'title': 'Google Satellite - 2026',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard2026_1 = new ol.layer.Tile({
            'title': 'OSM Standard - 2026',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_PianoTopograficodelllacittaeSuburbio1928circa_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Piano Topografico dellla citta\' e Suburbio 1928-circa<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_0.png" /> 7<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_1.png" /> 10<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_2.png" /> 11<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_3.png" /> 13<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_4.png" /> 14<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_5.png" /> 15<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_6.png" /> 16<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_7.png" /> 17<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_8.png" /> 18<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_9.png" /> 19<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_10.png" /> 20<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_11.png" /> 21<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_12.png" /> 22<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_13.png" /> 23<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_14.png" /> 24<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_15.png" /> 25<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_16.png" /> 26<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_17.png" /> 27<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_18.png" /> 28<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_19.png" /> 29<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_20.png" /> 30<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_21.png" /> 31<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_22.png" /> 32<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_23.png" /> 33<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_24.png" /> 34<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_25.png" /> 35<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_26.png" /> 36<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_27.png" /> 37<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_28.png" /> 38<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_29.png" /> 39<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_30.png" /> 40<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_31.png" /> 41<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_32.png" /> 42<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_33.png" /> 43<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_34.png" /> 44<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_35.png" /> 45<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_36.png" /> 46<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_37.png" /> 47<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_38.png" /> 48<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_39.png" /> 49<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_40.png" /> 50<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_41.png" /> 51<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_42.png" /> 52<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_43.png" /> 53<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_44.png" /> 54<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_45.png" /> 55<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_46.png" /> 56<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_47.png" /> 57<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_48.png" /> 58<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_49.png" /> 59<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_50.png" /> 60<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_51.png" /> 61<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_52.png" /> 62<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_53.png" /> 63<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_54.png" /> 64<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_55.png" /> 65<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_56.png" /> 66<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_57.png" /> 67<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_58.png" /> 68<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_59.png" /> 69<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_60.png" /> 70<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_61.png" /> 71<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_62.png" /> 72<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_63.png" /> 73<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_64.png" /> 74<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_65.png" /> 75<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_66.png" /> 76<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_67.png" /> 77<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_68.png" /> 78<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_69.png" /> 79<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_70.png" /> 80<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_71.png" /> 81<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_72.png" /> 82<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_73.png" /> 83<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_74.png" /> 84<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_75.png" /> 85<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_76.png" /> 86<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_77.png" /> 87<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_78.png" /> 88<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_79.png" /> 89<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_80.png" /> 90<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_81.png" /> 91<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_82.png" /> 92<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_83.png" /> 93<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_84.png" /> 94<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_85.png" /> 95<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_86.png" /> 96<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_87.png" /> 97<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_88.png" /> 98<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_89.png" /> 99<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_90.png" /> 100<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_91.png" /> 101<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_92.png" /> 102<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_93.png" /> 103<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_94.png" /> 104<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_95.png" /> 105<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_96.png" /> 106<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_97.png" /> 107<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_98.png" /> 108<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_99.png" /> 109<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_100.png" /> 110<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_101.png" /> 111<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_102.png" /> 112<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_103.png" /> 113<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_104.png" /> 114<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_105.png" /> 115<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_106.png" /> 116<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_107.png" /> 117<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_108.png" /> 118<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_109.png" /> 119<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_110.png" /> 120<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_111.png" /> 121<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_112.png" /> 122<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_113.png" /> 123<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_114.png" /> 124<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_115.png" /> 125<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_116.png" /> 126<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_117.png" /> 127<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_118.png" /> 128<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_119.png" /> 129<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_120.png" /> 130<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_121.png" /> 131<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_122.png" /> 132<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_123.png" /> 133<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_124.png" /> 134<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_125.png" /> 135<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_126.png" /> 136<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_127.png" /> 137<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_128.png" /> 138<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_129.png" /> 139<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_130.png" /> 140<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_131.png" /> 141<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_132.png" /> 142<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_133.png" /> 143<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_134.png" /> 144<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_135.png" /> 145<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_136.png" /> 146<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_137.png" /> 147<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_138.png" /> 148<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_139.png" /> 149<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_140.png" /> 150<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_141.png" /> 151<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_142.png" /> 152<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_143.png" /> 153<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_144.png" /> 154<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_145.png" /> 155<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_146.png" /> 156<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_147.png" /> 157<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_148.png" /> 158<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_149.png" /> 159<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_150.png" /> 160<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_151.png" /> 161<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_152.png" /> 162<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_153.png" /> 163<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_154.png" /> 164<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_155.png" /> 165<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_156.png" /> 166<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_157.png" /> 167<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_158.png" /> 168<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_159.png" /> 169<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_160.png" /> 170<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_161.png" /> 171<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_162.png" /> 172<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_163.png" /> 173<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_164.png" /> 174<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_165.png" /> 175<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_166.png" /> 176<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_167.png" /> 177<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_168.png" /> 178<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_169.png" /> 179<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_170.png" /> 180<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_171.png" /> 181<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_172.png" /> 182<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_173.png" /> 183<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_174.png" /> 184<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_175.png" /> 185<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_176.png" /> 186<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_177.png" /> 187<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_178.png" /> 188<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_179.png" /> 189<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_180.png" /> 190<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_181.png" /> 191<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_182.png" /> 192<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_183.png" /> 193<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_184.png" /> 194<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_185.png" /> 195<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_186.png" /> 196<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_187.png" /> 197<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_188.png" /> 198<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_189.png" /> 199<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_190.png" /> 200<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_191.png" /> 201<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_192.png" /> 202<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_193.png" /> 203<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_194.png" /> 204<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_195.png" /> 205<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_196.png" /> 206<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_197.png" /> 207<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_198.png" /> 208<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_199.png" /> 209<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_200.png" /> 210<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_201.png" /> 211<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_202.png" /> 212<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_203.png" /> 213<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_204.png" /> 214<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_205.png" /> 215<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_206.png" /> 216<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_207.png" /> 217<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_208.png" /> 218<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_209.png" /> 219<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_210.png" /> 220<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_211.png" /> 221<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_212.png" /> 222<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_213.png" /> 223<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_214.png" /> 224<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_215.png" /> 225<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_216.png" /> 226<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_217.png" /> 227<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_218.png" /> 228<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_219.png" /> 229<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_220.png" /> 230<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_221.png" /> 231<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_222.png" /> 232<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_223.png" /> 233<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_224.png" /> 234<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_225.png" /> 235<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_226.png" /> 236<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_227.png" /> 237<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_228.png" /> 238<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_229.png" /> 239<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_230.png" /> 240<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_231.png" /> 241<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_232.png" /> 242<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_233.png" /> 243<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_234.png" /> 244<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_235.png" /> 245<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_236.png" /> 246<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_237.png" /> 247<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_238.png" /> 248<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_239.png" /> 249<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_240.png" /> 250<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_241.png" /> 251<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_242.png" /> 252<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_243.png" /> 253<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_244.png" /> 254<br />\
    <img src="styles/legend/PianoTopograficodelllacittaeSuburbio1928circa_2_245.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PianoTopograficodelllacittaeSuburbio1928circa_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1671416.214055, 4504939.429864, 1685369.577614, 4515526.341316]
        })
    });
var format_PRGPiccinato1964_3 = new ol.format.GeoJSON();
var features_PRGPiccinato1964_3 = format_PRGPiccinato1964_3.readFeatures(json_PRGPiccinato1964_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRGPiccinato1964_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRGPiccinato1964_3.addFeatures(features_PRGPiccinato1964_3);
var lyr_PRGPiccinato1964_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRGPiccinato1964_3, 
                style: style_PRGPiccinato1964_3,
                popuplayertitle: 'PRG Piccinato - 1964',
                interactive: true,
    title: 'PRG Piccinato - 1964<br />\
    <img src="styles/legend/PRGPiccinato1964_3_0.png" /> A<br />\
    <img src="styles/legend/PRGPiccinato1964_3_1.png" /> A1<br />\
    <img src="styles/legend/PRGPiccinato1964_3_2.png" /> AREA PRIVATA<br />\
    <img src="styles/legend/PRGPiccinato1964_3_3.png" /> ARTIGIANALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_4.png" /> B<br />\
    <img src="styles/legend/PRGPiccinato1964_3_5.png" /> BALNEARE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_6.png" /> C<br />\
    <img src="styles/legend/PRGPiccinato1964_3_7.png" /> CENTRO COMMERCIALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_8.png" /> D<br />\
    <img src="styles/legend/PRGPiccinato1964_3_9.png" /> D1<br />\
    <img src="styles/legend/PRGPiccinato1964_3_10.png" /> D2<br />\
    <img src="styles/legend/PRGPiccinato1964_3_11.png" /> E<br />\
    <img src="styles/legend/PRGPiccinato1964_3_12.png" /> E1<br />\
    <img src="styles/legend/PRGPiccinato1964_3_13.png" /> F<br />\
    <img src="styles/legend/PRGPiccinato1964_3_14.png" /> G<br />\
    <img src="styles/legend/PRGPiccinato1964_3_15.png" /> G1<br />\
    <img src="styles/legend/PRGPiccinato1964_3_16.png" /> H<br />\
    <img src="styles/legend/PRGPiccinato1964_3_17.png" /> I<br />\
    <img src="styles/legend/PRGPiccinato1964_3_18.png" /> INDUSTRIALE GENERALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_19.png" /> INDUSTRIALE INFRASTRUTTURE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_20.png" /> INDUSTRIALE PORTUALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_21.png" /> INTERESSE ARCHITETTONICO<br />\
    <img src="styles/legend/PRGPiccinato1964_3_22.png" /> L<br />\
    <img src="styles/legend/PRGPiccinato1964_3_23.png" /> L1<br />\
    <img src="styles/legend/PRGPiccinato1964_3_24.png" /> RESIDENZIALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_25.png" /> RESIDENZIALE SATURA<br />\
    <img src="styles/legend/PRGPiccinato1964_3_26.png" /> RISPETTO PEDONALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_27.png" /> SPIAGGE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_28.png" /> VERDE PUBBLICO<br />\
    <img src="styles/legend/PRGPiccinato1964_3_29.png" /> VERDE RURALE<br />\
    <img src="styles/legend/PRGPiccinato1964_3_30.png" /> VINCOLO ASSOLUTO<br />\
    <img src="styles/legend/PRGPiccinato1964_3_31.png" /> <br />' });
var format_Catastale_4 = new ol.format.GeoJSON();
var features_Catastale_4 = format_Catastale_4.readFeatures(json_Catastale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catastale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catastale_4.addFeatures(features_Catastale_4);
cluster_Catastale_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Catastale_4
});
var lyr_Catastale_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Catastale_4, 
                style: style_Catastale_4,
                popuplayertitle: 'Catastale',
                interactive: true,
                title: '<img src="styles/legend/Catastale_4.png" /> Catastale'
            });
var format_MappaturaSistemaCostruttivo_5 = new ol.format.GeoJSON();
var features_MappaturaSistemaCostruttivo_5 = format_MappaturaSistemaCostruttivo_5.readFeatures(json_MappaturaSistemaCostruttivo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MappaturaSistemaCostruttivo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MappaturaSistemaCostruttivo_5.addFeatures(features_MappaturaSistemaCostruttivo_5);
var lyr_MappaturaSistemaCostruttivo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MappaturaSistemaCostruttivo_5, 
                style: style_MappaturaSistemaCostruttivo_5,
                popuplayertitle: 'Mappatura Sistema Costruttivo',
                interactive: true,
    title: 'Mappatura Sistema Costruttivo<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_5_0.png" /> ?<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_5_1.png" /> Calcestruzzo Armato<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_5_2.png" /> Misto<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_5_3.png" /> Muratura<br />\
    <img src="styles/legend/MappaturaSistemaCostruttivo_5_4.png" /> <br />' });
var group_OlivetoScammacca = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite2026_0,lyr_OSMStandard2026_1,lyr_PianoTopograficodelllacittaeSuburbio1928circa_2,lyr_PRGPiccinato1964_3,lyr_Catastale_4,lyr_MappaturaSistemaCostruttivo_5,],
                                fold: 'open',
                                title: 'Oliveto Scammacca'});

lyr_GoogleSatellite2026_0.setVisible(true);lyr_OSMStandard2026_1.setVisible(true);lyr_PianoTopograficodelllacittaeSuburbio1928circa_2.setVisible(true);lyr_PRGPiccinato1964_3.setVisible(true);lyr_Catastale_4.setVisible(true);lyr_MappaturaSistemaCostruttivo_5.setVisible(true);
var layersList = [group_OlivetoScammacca];
lyr_PRGPiccinato1964_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONA': 'ZONA', });
lyr_Catastale_4.set('fieldAliases', {'id': 'id', 'Planimetri': 'Planimetri', 'Prospetto': 'Prospetto', 'Sezione': 'Sezione', });
lyr_MappaturaSistemaCostruttivo_5.set('fieldAliases', {'fid': 'fid', 'N.': 'N.', 'D. Uso': 'D. Uso', 'S.C.': 'S.C.', 'N. Piani': 'N. Piani', 'Interpiano': 'Interpiano', 'H (m)': 'H (m)', 'S. (mq)': 'S. (mq)', 'V (mc)': 'V (mc)', });
lyr_PRGPiccinato1964_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_Catastale_4.set('fieldImages', {'id': 'TextEdit', 'Planimetri': '', 'Prospetto': '', 'Sezione': '', });
lyr_MappaturaSistemaCostruttivo_5.set('fieldImages', {'fid': 'TextEdit', 'N.': 'Range', 'D. Uso': 'TextEdit', 'S.C.': 'TextEdit', 'N. Piani': 'TextEdit', 'Interpiano': 'Range', 'H (m)': 'Range', 'S. (mq)': 'Range', 'V (mc)': 'Range', });
lyr_PRGPiccinato1964_3.set('fieldLabels', {'OBJECTID': 'no label', 'ZONA': 'inline label - always visible', });
lyr_Catastale_4.set('fieldLabels', {'id': 'no label', 'Planimetri': 'inline label - visible with data', 'Prospetto': 'inline label - visible with data', 'Sezione': 'inline label - visible with data', });
lyr_MappaturaSistemaCostruttivo_5.set('fieldLabels', {'fid': 'hidden field', 'N.': 'inline label - visible with data', 'D. Uso': 'inline label - always visible', 'S.C.': 'inline label - always visible', 'N. Piani': 'inline label - always visible', 'Interpiano': 'hidden field', 'H (m)': 'inline label - always visible', 'S. (mq)': 'inline label - always visible', 'V (mc)': 'inline label - always visible', });
lyr_MappaturaSistemaCostruttivo_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});