var wms_layers = [];

var lyr_rel_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'rel<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/rel_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1926339.657608, 3079322.472229, 5632166.024351, 5581551.788373]
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
var format_troada_5 = new ol.format.GeoJSON();
var features_troada_5 = format_troada_5.readFeatures(json_troada_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_troada_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_troada_5.addFeatures(features_troada_5);
var lyr_troada_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_troada_5, 
                style: style_troada_5,
                popuplayertitle: 'troada',
                interactive: true,
                title: '<img src="styles/legend/troada_5.png" /> troada'
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
var format_elida_8 = new ol.format.GeoJSON();
var features_elida_8 = format_elida_8.readFeatures(json_elida_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elida_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elida_8.addFeatures(features_elida_8);
var lyr_elida_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elida_8, 
                style: style_elida_8,
                popuplayertitle: 'elida',
                interactive: true,
                title: '<img src="styles/legend/elida_8.png" /> elida'
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
var format_kythera_13 = new ol.format.GeoJSON();
var features_kythera_13 = format_kythera_13.readFeatures(json_kythera_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kythera_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kythera_13.addFeatures(features_kythera_13);
var lyr_kythera_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kythera_13, 
                style: style_kythera_13,
                popuplayertitle: 'kythera',
                interactive: true,
                title: '<img src="styles/legend/kythera_13.png" /> kythera'
            });
var format_beotia_14 = new ol.format.GeoJSON();
var features_beotia_14 = format_beotia_14.readFeatures(json_beotia_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beotia_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beotia_14.addFeatures(features_beotia_14);
var lyr_beotia_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beotia_14, 
                style: style_beotia_14,
                popuplayertitle: 'beotia',
                interactive: true,
                title: '<img src="styles/legend/beotia_14.png" /> beotia'
            });
var format_evbea_15 = new ol.format.GeoJSON();
var features_evbea_15 = format_evbea_15.readFeatures(json_evbea_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_evbea_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_evbea_15.addFeatures(features_evbea_15);
var lyr_evbea_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_evbea_15, 
                style: style_evbea_15,
                popuplayertitle: 'evbea',
                interactive: true,
                title: '<img src="styles/legend/evbea_15.png" /> evbea'
            });
var format_Argos_16 = new ol.format.GeoJSON();
var features_Argos_16 = format_Argos_16.readFeatures(json_Argos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Argos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Argos_16.addFeatures(features_Argos_16);
var lyr_Argos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Argos_16,
maxResolution:280.0446615226196,
 
                style: style_Argos_16,
                popuplayertitle: 'Argos',
                interactive: true,
                title: '<img src="styles/legend/Argos_16.png" /> Argos'
            });
var format_Micenaeus_17 = new ol.format.GeoJSON();
var features_Micenaeus_17 = format_Micenaeus_17.readFeatures(json_Micenaeus_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Micenaeus_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Micenaeus_17.addFeatures(features_Micenaeus_17);
var lyr_Micenaeus_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Micenaeus_17,
maxResolution:280.0446615226196,
 minResolution:0.28004466152261964,

                style: style_Micenaeus_17,
                popuplayertitle: 'Micenaeus',
                interactive: true,
                title: '<img src="styles/legend/Micenaeus_17.png" /> Micenaeus'
            });
var format_Sparta_18 = new ol.format.GeoJSON();
var features_Sparta_18 = format_Sparta_18.readFeatures(json_Sparta_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sparta_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sparta_18.addFeatures(features_Sparta_18);
var lyr_Sparta_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sparta_18,
maxResolution:280.0446615226196,
 
                style: style_Sparta_18,
                popuplayertitle: 'Sparta',
                interactive: true,
                title: '<img src="styles/legend/Sparta_18.png" /> Sparta'
            });
var format_pilos_19 = new ol.format.GeoJSON();
var features_pilos_19 = format_pilos_19.readFeatures(json_pilos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pilos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pilos_19.addFeatures(features_pilos_19);
var lyr_pilos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pilos_19,
maxResolution:280.0446615226196,
 
                style: style_pilos_19,
                popuplayertitle: 'pilos',
                interactive: true,
                title: '<img src="styles/legend/pilos_19.png" /> pilos'
            });
var format_elida_20 = new ol.format.GeoJSON();
var features_elida_20 = format_elida_20.readFeatures(json_elida_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elida_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elida_20.addFeatures(features_elida_20);
var lyr_elida_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elida_20,
maxResolution:280.0446615226196,
 
                style: style_elida_20,
                popuplayertitle: 'elida',
                interactive: true,
                title: '<img src="styles/legend/elida_20.png" /> elida'
            });
var format_tegeya_21 = new ol.format.GeoJSON();
var features_tegeya_21 = format_tegeya_21.readFeatures(json_tegeya_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tegeya_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tegeya_21.addFeatures(features_tegeya_21);
var lyr_tegeya_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tegeya_21,
maxResolution:280.0446615226196,
 
                style: style_tegeya_21,
                popuplayertitle: 'tegeya',
                interactive: true,
                title: '<img src="styles/legend/tegeya_21.png" /> tegeya'
            });
var format_knoss_22 = new ol.format.GeoJSON();
var features_knoss_22 = format_knoss_22.readFeatures(json_knoss_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_knoss_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_knoss_22.addFeatures(features_knoss_22);
var lyr_knoss_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_knoss_22,
maxResolution:280.0446615226196,
 
                style: style_knoss_22,
                popuplayertitle: 'knoss',
                interactive: true,
                title: '<img src="styles/legend/knoss_22.png" /> knoss'
            });
var format_troycity_23 = new ol.format.GeoJSON();
var features_troycity_23 = format_troycity_23.readFeatures(json_troycity_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_troycity_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_troycity_23.addFeatures(features_troycity_23);
var lyr_troycity_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_troycity_23,
maxResolution:280.0446615226196,
 
                style: style_troycity_23,
                popuplayertitle: 'troy-city',
                interactive: true,
                title: '<img src="styles/legend/troycity_23.png" /> troy-city'
            });
var format_athens_24 = new ol.format.GeoJSON();
var features_athens_24 = format_athens_24.readFeatures(json_athens_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_athens_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_athens_24.addFeatures(features_athens_24);
var lyr_athens_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_athens_24,
maxResolution:280.0446615226196,
 
                style: style_athens_24,
                popuplayertitle: 'athens',
                interactive: true,
                title: '<img src="styles/legend/athens_24.png" /> athens'
            });
var format_thebes_25 = new ol.format.GeoJSON();
var features_thebes_25 = format_thebes_25.readFeatures(json_thebes_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thebes_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thebes_25.addFeatures(features_thebes_25);
var lyr_thebes_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thebes_25,
maxResolution:280.0446615226196,
 
                style: style_thebes_25,
                popuplayertitle: 'thebes',
                interactive: true,
                title: '<img src="styles/legend/thebes_25.png" /> thebes'
            });
var format_etetria_26 = new ol.format.GeoJSON();
var features_etetria_26 = format_etetria_26.readFeatures(json_etetria_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etetria_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etetria_26.addFeatures(features_etetria_26);
var lyr_etetria_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_etetria_26,
maxResolution:280.0446615226196,
 
                style: style_etetria_26,
                popuplayertitle: 'etetria',
                interactive: true,
                title: '<img src="styles/legend/etetria_26.png" /> etetria'
            });
var format_itakacity_27 = new ol.format.GeoJSON();
var features_itakacity_27 = format_itakacity_27.readFeatures(json_itakacity_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_itakacity_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_itakacity_27.addFeatures(features_itakacity_27);
var lyr_itakacity_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_itakacity_27,
maxResolution:280.0446615226196,
 
                style: style_itakacity_27,
                popuplayertitle: 'itaka-city',
                interactive: true,
                title: '<img src="styles/legend/itakacity_27.png" /> itaka-city'
            });
var format_ramka_28 = new ol.format.GeoJSON();
var features_ramka_28 = format_ramka_28.readFeatures(json_ramka_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ramka_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ramka_28.addFeatures(features_ramka_28);
var lyr_ramka_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ramka_28, 
                style: style_ramka_28,
                popuplayertitle: 'ramka',
                interactive: false,
                title: '<img src="styles/legend/ramka_28.png" /> ramka'
            });
var group_citygreekandtroyan = new ol.layer.Group({
                                layers: [lyr_Argos_16,lyr_Micenaeus_17,lyr_Sparta_18,lyr_pilos_19,lyr_elida_20,lyr_tegeya_21,lyr_knoss_22,lyr_troycity_23,lyr_athens_24,lyr_thebes_25,lyr_etetria_26,lyr_itakacity_27,],
                                fold: 'close',
                                title: 'city greek and troyan'});
var group_greekandtroyan = new ol.layer.Group({
                                layers: [lyr_krit_3,lyr_itaka_4,lyr_troada_5,lyr_lakonia_6,lyr_messenia_7,lyr_elida_8,lyr_argolida_9,lyr_mantinea_10,lyr_achaea_11,lyr_attica_12,lyr_kythera_13,lyr_beotia_14,lyr_evbea_15,],
                                fold: 'close',
                                title: 'greek and troyan'});

lyr_rel_0.setVisible(true);lyr_rivers_1.setVisible(true);lyr_waterall_2.setVisible(true);lyr_krit_3.setVisible(true);lyr_itaka_4.setVisible(true);lyr_troada_5.setVisible(true);lyr_lakonia_6.setVisible(true);lyr_messenia_7.setVisible(true);lyr_elida_8.setVisible(true);lyr_argolida_9.setVisible(true);lyr_mantinea_10.setVisible(true);lyr_achaea_11.setVisible(true);lyr_attica_12.setVisible(true);lyr_kythera_13.setVisible(true);lyr_beotia_14.setVisible(true);lyr_evbea_15.setVisible(true);lyr_Argos_16.setVisible(true);lyr_Micenaeus_17.setVisible(true);lyr_Sparta_18.setVisible(true);lyr_pilos_19.setVisible(true);lyr_elida_20.setVisible(true);lyr_tegeya_21.setVisible(true);lyr_knoss_22.setVisible(true);lyr_troycity_23.setVisible(true);lyr_athens_24.setVisible(true);lyr_thebes_25.setVisible(true);lyr_etetria_26.setVisible(true);lyr_itakacity_27.setVisible(true);lyr_ramka_28.setVisible(true);
var layersList = [lyr_rel_0,lyr_rivers_1,lyr_waterall_2,group_greekandtroyan,group_citygreekandtroyan,lyr_ramka_28];
lyr_rivers_1.set('fieldAliases', {'fid': 'fid', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'note': 'note', 'min_zoom': 'min_zoom', 'name_alt': 'name_alt', 'min_label': 'min_label', 'name_en': 'name_en', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', 'layer': 'layer', 'path': 'path', });
lyr_waterall_2.set('fieldAliases', {'fid': 'fid', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'note': 'note', 'admin': 'admin', 'namepar': 'namepar', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'name_abb': 'name_abb', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', 'layer': 'layer', 'path': 'path', });
lyr_krit_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_itaka_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_troada_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_lakonia_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_messenia_7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_elida_8.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_argolida_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_mantinea_10.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_achaea_11.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_attica_12.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_kythera_13.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_beotia_14.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_evbea_15.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Argos_16.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Micenaeus_17.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Sparta_18.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_pilos_19.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_elida_20.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_tegeya_21.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_knoss_22.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_troycity_23.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_athens_24.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_thebes_25.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_etetria_26.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_itakacity_27.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ramka_28.set('fieldAliases', {'id': 'id', });
lyr_rivers_1.set('fieldImages', {'fid': 'TextEdit', 'scalerank': 'Range', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'note': 'TextEdit', 'min_zoom': 'TextEdit', 'name_alt': 'TextEdit', 'min_label': 'TextEdit', 'name_en': 'TextEdit', 'label': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_waterall_2.set('fieldImages', {'fid': 'TextEdit', 'scalerank': 'TextEdit', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'note': 'TextEdit', 'admin': 'TextEdit', 'namepar': 'TextEdit', 'min_zoom': 'TextEdit', 'min_label': 'TextEdit', 'name_abb': 'TextEdit', 'label': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_krit_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_itaka_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_troada_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_lakonia_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_messenia_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_elida_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_argolida_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_mantinea_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_achaea_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_attica_12.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_kythera_13.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_beotia_14.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_evbea_15.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Argos_16.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Micenaeus_17.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Sparta_18.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_pilos_19.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_elida_20.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_tegeya_21.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_knoss_22.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_troycity_23.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_athens_24.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_thebes_25.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_etetria_26.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_itakacity_27.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_ramka_28.set('fieldImages', {'id': 'TextEdit', });
lyr_rivers_1.set('fieldLabels', {'fid': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'note': 'no label', 'min_zoom': 'no label', 'name_alt': 'no label', 'min_label': 'no label', 'name_en': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_waterall_2.set('fieldLabels', {'fid': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'note': 'no label', 'admin': 'no label', 'namepar': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'name_abb': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_krit_3.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_itaka_4.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_troada_5.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_lakonia_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_messenia_7.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_elida_8.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_argolida_9.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_mantinea_10.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_achaea_11.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_attica_12.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_kythera_13.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_beotia_14.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_evbea_15.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_Argos_16.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_Micenaeus_17.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_Sparta_18.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_pilos_19.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_elida_20.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_tegeya_21.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_knoss_22.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_troycity_23.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_athens_24.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_thebes_25.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_etetria_26.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_itakacity_27.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_ramka_28.set('fieldLabels', {'id': 'no label', });
lyr_ramka_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});