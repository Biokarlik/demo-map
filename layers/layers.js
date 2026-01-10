var wms_layers = [];

var lyr_rel_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'rel<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/rel_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1924699.475550, 3079842.943754, 5633486.299122, 5581556.953943]
        })
    });
var format_rivers_1 = new ol.format.GeoJSON();
var features_rivers_1 = format_rivers_1.readFeatures(json_rivers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rivers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rivers_1.addFeatures(features_rivers_1);
var lyr_rivers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rivers_1, 
                style: style_rivers_1,
                popuplayertitle: 'rivers',
                interactive: false,
                title: '<img src="styles/legend/rivers_1.png" /> rivers'
            });
var format_waterall_2 = new ol.format.GeoJSON();
var features_waterall_2 = format_waterall_2.readFeatures(json_waterall_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterall_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterall_2.addFeatures(features_waterall_2);
var lyr_waterall_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterall_2, 
                style: style_waterall_2,
                popuplayertitle: 'waterall',
                interactive: false,
                title: '<img src="styles/legend/waterall_2.png" /> waterall'
            });
var format_krit_3 = new ol.format.GeoJSON();
var features_krit_3 = format_krit_3.readFeatures(json_krit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_krit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_krit_3.addFeatures(features_krit_3);
var lyr_krit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_krit_3, 
                style: style_krit_3,
                popuplayertitle: 'krit',
                interactive: true,
                title: '<img src="styles/legend/krit_3.png" /> krit'
            });
var format_itaka_4 = new ol.format.GeoJSON();
var features_itaka_4 = format_itaka_4.readFeatures(json_itaka_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_itaka_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_itaka_4.addFeatures(features_itaka_4);
var lyr_itaka_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_itaka_4, 
                style: style_itaka_4,
                popuplayertitle: 'itaka',
                interactive: true,
                title: '<img src="styles/legend/itaka_4.png" /> itaka'
            });
var format_troy_5 = new ol.format.GeoJSON();
var features_troy_5 = format_troy_5.readFeatures(json_troy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_troy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_troy_5.addFeatures(features_troy_5);
var lyr_troy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_troy_5, 
                style: style_troy_5,
                popuplayertitle: 'troy',
                interactive: true,
                title: '<img src="styles/legend/troy_5.png" /> troy'
            });
var format_lakonia_6 = new ol.format.GeoJSON();
var features_lakonia_6 = format_lakonia_6.readFeatures(json_lakonia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lakonia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lakonia_6.addFeatures(features_lakonia_6);
var lyr_lakonia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lakonia_6, 
                style: style_lakonia_6,
                popuplayertitle: 'lakonia',
                interactive: true,
                title: '<img src="styles/legend/lakonia_6.png" /> lakonia'
            });
var format_messenia_7 = new ol.format.GeoJSON();
var features_messenia_7 = format_messenia_7.readFeatures(json_messenia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_messenia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_messenia_7.addFeatures(features_messenia_7);
var lyr_messenia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_messenia_7, 
                style: style_messenia_7,
                popuplayertitle: 'messenia',
                interactive: true,
                title: '<img src="styles/legend/messenia_7.png" /> messenia'
            });
var format_elia_8 = new ol.format.GeoJSON();
var features_elia_8 = format_elia_8.readFeatures(json_elia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elia_8.addFeatures(features_elia_8);
var lyr_elia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elia_8, 
                style: style_elia_8,
                popuplayertitle: 'elia',
                interactive: true,
                title: '<img src="styles/legend/elia_8.png" /> elia'
            });
var format_argolida_9 = new ol.format.GeoJSON();
var features_argolida_9 = format_argolida_9.readFeatures(json_argolida_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_argolida_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_argolida_9.addFeatures(features_argolida_9);
var lyr_argolida_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_argolida_9, 
                style: style_argolida_9,
                popuplayertitle: 'argolida',
                interactive: true,
                title: '<img src="styles/legend/argolida_9.png" /> argolida'
            });
var format_mantinea_10 = new ol.format.GeoJSON();
var features_mantinea_10 = format_mantinea_10.readFeatures(json_mantinea_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mantinea_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mantinea_10.addFeatures(features_mantinea_10);
var lyr_mantinea_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mantinea_10, 
                style: style_mantinea_10,
                popuplayertitle: 'mantinea',
                interactive: true,
                title: '<img src="styles/legend/mantinea_10.png" /> mantinea'
            });
var format_achaea_11 = new ol.format.GeoJSON();
var features_achaea_11 = format_achaea_11.readFeatures(json_achaea_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_achaea_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_achaea_11.addFeatures(features_achaea_11);
var lyr_achaea_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_achaea_11, 
                style: style_achaea_11,
                popuplayertitle: 'achaea',
                interactive: true,
                title: '<img src="styles/legend/achaea_11.png" /> achaea'
            });
var format_attica_12 = new ol.format.GeoJSON();
var features_attica_12 = format_attica_12.readFeatures(json_attica_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_attica_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_attica_12.addFeatures(features_attica_12);
var lyr_attica_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_attica_12, 
                style: style_attica_12,
                popuplayertitle: 'attica',
                interactive: true,
                title: '<img src="styles/legend/attica_12.png" /> attica'
            });
var format_ramka_13 = new ol.format.GeoJSON();
var features_ramka_13 = format_ramka_13.readFeatures(json_ramka_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ramka_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ramka_13.addFeatures(features_ramka_13);
var lyr_ramka_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ramka_13, 
                style: style_ramka_13,
                popuplayertitle: 'ramka',
                interactive: false,
                title: '<img src="styles/legend/ramka_13.png" /> ramka'
            });
var group_greekandtroyan = new ol.layer.Group({
                                layers: [lyr_krit_3,lyr_itaka_4,lyr_troy_5,lyr_lakonia_6,lyr_messenia_7,lyr_elia_8,lyr_argolida_9,lyr_mantinea_10,lyr_achaea_11,lyr_attica_12,],
                                fold: 'open',
                                title: 'greek and troyan'});

lyr_rel_0.setVisible(true);lyr_rivers_1.setVisible(true);lyr_waterall_2.setVisible(true);lyr_krit_3.setVisible(true);lyr_itaka_4.setVisible(true);lyr_troy_5.setVisible(true);lyr_lakonia_6.setVisible(true);lyr_messenia_7.setVisible(true);lyr_elia_8.setVisible(true);lyr_argolida_9.setVisible(true);lyr_mantinea_10.setVisible(true);lyr_achaea_11.setVisible(true);lyr_attica_12.setVisible(true);lyr_ramka_13.setVisible(true);
var layersList = [lyr_rel_0,lyr_rivers_1,lyr_waterall_2,group_greekandtroyan,lyr_ramka_13];
lyr_rivers_1.set('fieldAliases', {'fid': 'fid', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'note': 'note', 'min_zoom': 'min_zoom', 'name_alt': 'name_alt', 'min_label': 'min_label', 'name_en': 'name_en', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', 'layer': 'layer', 'path': 'path', });
lyr_waterall_2.set('fieldAliases', {'fid': 'fid', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'note': 'note', 'admin': 'admin', 'namepar': 'namepar', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'name_abb': 'name_abb', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', 'layer': 'layer', 'path': 'path', });
lyr_krit_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_itaka_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_troy_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_lakonia_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_messenia_7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_elia_8.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_argolida_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_mantinea_10.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_achaea_11.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_attica_12.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ramka_13.set('fieldAliases', {'id': 'id', });
lyr_rivers_1.set('fieldImages', {'fid': 'TextEdit', 'scalerank': 'Range', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'note': 'TextEdit', 'min_zoom': 'TextEdit', 'name_alt': 'TextEdit', 'min_label': 'TextEdit', 'name_en': 'TextEdit', 'label': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_waterall_2.set('fieldImages', {'fid': 'TextEdit', 'scalerank': 'TextEdit', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'note': 'TextEdit', 'admin': 'TextEdit', 'namepar': 'TextEdit', 'min_zoom': 'TextEdit', 'min_label': 'TextEdit', 'name_abb': 'TextEdit', 'label': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_krit_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_itaka_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_troy_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_lakonia_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_messenia_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_elia_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_argolida_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_mantinea_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_achaea_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_attica_12.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_ramka_13.set('fieldImages', {'id': 'TextEdit', });
lyr_rivers_1.set('fieldLabels', {'fid': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'note': 'no label', 'min_zoom': 'no label', 'name_alt': 'no label', 'min_label': 'no label', 'name_en': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_waterall_2.set('fieldLabels', {'fid': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'note': 'no label', 'admin': 'no label', 'namepar': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'name_abb': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_krit_3.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_itaka_4.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_troy_5.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_lakonia_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_messenia_7.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_elia_8.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_argolida_9.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_mantinea_10.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_achaea_11.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_attica_12.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_ramka_13.set('fieldLabels', {'id': 'no label', });
lyr_ramka_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});