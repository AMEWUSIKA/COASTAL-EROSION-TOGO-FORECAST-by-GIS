ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([67375.776106, 572257.702152, 467255.408110, 815007.016471]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mesures_protection_1 = new ol.format.GeoJSON();
var features_Mesures_protection_1 = format_Mesures_protection_1.readFeatures(json_Mesures_protection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Mesures_protection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_1.addFeatures(features_Mesures_protection_1);
var lyr_Mesures_protection_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_1, 
                style: style_Mesures_protection_1,
                popuplayertitle: "Mesures_protection",
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_1.png" /> Mesures_protection'
            });
var format_infrastructure_vulnrable_2 = new ol.format.GeoJSON();
var features_infrastructure_vulnrable_2 = format_infrastructure_vulnrable_2.readFeatures(json_infrastructure_vulnrable_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_infrastructure_vulnrable_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastructure_vulnrable_2.addFeatures(features_infrastructure_vulnrable_2);
var lyr_infrastructure_vulnrable_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infrastructure_vulnrable_2, 
                style: style_infrastructure_vulnrable_2,
                popuplayertitle: "infrastructure_vulnérable",
                interactive: true,
                title: '<img src="styles/legend/infrastructure_vulnrable_2.png" /> infrastructure_vulnérable'
            });
var format_Zone_dtude_3 = new ol.format.GeoJSON();
var features_Zone_dtude_3 = format_Zone_dtude_3.readFeatures(json_Zone_dtude_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zone_dtude_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_dtude_3.addFeatures(features_Zone_dtude_3);
var lyr_Zone_dtude_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_dtude_3, 
                style: style_Zone_dtude_3,
                popuplayertitle: "Zone_d'étude",
                interactive: true,
                title: '<img src="styles/legend/Zone_dtude_3.png" /> Zone_d\'étude'
            });
var format_PaysTOGO_4 = new ol.format.GeoJSON();
var features_PaysTOGO_4 = format_PaysTOGO_4.readFeatures(json_PaysTOGO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_PaysTOGO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaysTOGO_4.addFeatures(features_PaysTOGO_4);
var lyr_PaysTOGO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaysTOGO_4, 
                style: style_PaysTOGO_4,
                popuplayertitle: "PaysTOGO ",
                interactive: true,
                title: '<img src="styles/legend/PaysTOGO_4.png" /> PaysTOGO '
            });
var format_Superficie_2054_5 = new ol.format.GeoJSON();
var features_Superficie_2054_5 = format_Superficie_2054_5.readFeatures(json_Superficie_2054_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_2054_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_2054_5.addFeatures(features_Superficie_2054_5);
var lyr_Superficie_2054_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_2054_5, 
                style: style_Superficie_2054_5,
                popuplayertitle: "Superficie_2054",
                interactive: true,
    title: 'Superficie_2054<br />\
    <img src="styles/legend/Superficie_2054_5_0.png" /> accretion<br />\
    <img src="styles/legend/Superficie_2054_5_1.png" /> erosion<br />'
        });
var format_Superficie_2024_6 = new ol.format.GeoJSON();
var features_Superficie_2024_6 = format_Superficie_2024_6.readFeatures(json_Superficie_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_2024_6.addFeatures(features_Superficie_2024_6);
var lyr_Superficie_2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_2024_6, 
                style: style_Superficie_2024_6,
                popuplayertitle: "Superficie_2024",
                interactive: true,
    title: 'Superficie_2024<br />\
    <img src="styles/legend/Superficie_2024_6_0.png" /> accretion<br />\
    <img src="styles/legend/Superficie_2024_6_1.png" /> erosion<br />'
        });
var format_Superficie_1990_7 = new ol.format.GeoJSON();
var features_Superficie_1990_7 = format_Superficie_1990_7.readFeatures(json_Superficie_1990_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_1990_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_1990_7.addFeatures(features_Superficie_1990_7);
var lyr_Superficie_1990_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_1990_7, 
                style: style_Superficie_1990_7,
                popuplayertitle: "Superficie_1990",
                interactive: true,
    title: 'Superficie_1990<br />\
    <img src="styles/legend/Superficie_1990_7_0.png" /> accretion<br />\
    <img src="styles/legend/Superficie_1990_7_1.png" /> erosion<br />'
        });
var format_infrastructure_risque_8 = new ol.format.GeoJSON();
var features_infrastructure_risque_8 = format_infrastructure_risque_8.readFeatures(json_infrastructure_risque_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_infrastructure_risque_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastructure_risque_8.addFeatures(features_infrastructure_risque_8);
var lyr_infrastructure_risque_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infrastructure_risque_8, 
                style: style_infrastructure_risque_8,
                popuplayertitle: "infrastructure_risque",
                interactive: true,
                title: '<img src="styles/legend/infrastructure_risque_8.png" /> infrastructure_risque'
            });
var format_zone_risqu_2054_9 = new ol.format.GeoJSON();
var features_zone_risqu_2054_9 = format_zone_risqu_2054_9.readFeatures(json_zone_risqu_2054_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_zone_risqu_2054_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_risqu_2054_9.addFeatures(features_zone_risqu_2054_9);
var lyr_zone_risqu_2054_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_risqu_2054_9, 
                style: style_zone_risqu_2054_9,
                popuplayertitle: "zone_risqué_2054",
                interactive: true,
                title: '<img src="styles/legend/zone_risqu_2054_9.png" /> zone_risqué_2054'
            });
var format_pre_acre_10 = new ol.format.GeoJSON();
var features_pre_acre_10 = format_pre_acre_10.readFeatures(json_pre_acre_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_pre_acre_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pre_acre_10.addFeatures(features_pre_acre_10);
var lyr_pre_acre_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pre_acre_10, 
                style: style_pre_acre_10,
                popuplayertitle: "pre_acre",
                interactive: true,
    title: 'pre_acre<br />\
    <img src="styles/legend/pre_acre_10_0.png" /> Faible<br />\
    <img src="styles/legend/pre_acre_10_1.png" /> Moyen<br />\
    <img src="styles/legend/pre_acre_10_2.png" /> Elevé<br />'
        });
var format_pre_ero_11 = new ol.format.GeoJSON();
var features_pre_ero_11 = format_pre_ero_11.readFeatures(json_pre_ero_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_pre_ero_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pre_ero_11.addFeatures(features_pre_ero_11);
var lyr_pre_ero_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pre_ero_11, 
                style: style_pre_ero_11,
                popuplayertitle: "pre_ero",
                interactive: true,
    title: 'pre_ero<br />\
    <img src="styles/legend/pre_ero_11_0.png" /> Elevé<br />\
    <img src="styles/legend/pre_ero_11_1.png" /> Moyen<br />\
    <img src="styles/legend/pre_ero_11_2.png" /> Faible<br />'
        });
var format_trait_de_cte_2054_12 = new ol.format.GeoJSON();
var features_trait_de_cte_2054_12 = format_trait_de_cte_2054_12.readFeatures(json_trait_de_cte_2054_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_trait_de_cte_2054_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trait_de_cte_2054_12.addFeatures(features_trait_de_cte_2054_12);
var lyr_trait_de_cte_2054_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trait_de_cte_2054_12, 
                style: style_trait_de_cte_2054_12,
                popuplayertitle: "trait_de_côte_2054",
                interactive: true,
                title: '<img src="styles/legend/trait_de_cte_2054_12.png" /> trait_de_côte_2054'
            });
var format_Rates_1990_2024LRR_13 = new ol.format.GeoJSON();
var features_Rates_1990_2024LRR_13 = format_Rates_1990_2024LRR_13.readFeatures(json_Rates_1990_2024LRR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rates_1990_2024LRR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rates_1990_2024LRR_13.addFeatures(features_Rates_1990_2024LRR_13);
var lyr_Rates_1990_2024LRR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rates_1990_2024LRR_13, 
                style: style_Rates_1990_2024LRR_13,
                popuplayertitle: "Rates_1990_2024(LRR)",
                interactive: true,
                title: 'Rates_1990_2024(LRR)'
            });
var format_Rate_2001_2014EPR_14 = new ol.format.GeoJSON();
var features_Rate_2001_2014EPR_14 = format_Rate_2001_2014EPR_14.readFeatures(json_Rate_2001_2014EPR_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rate_2001_2014EPR_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_2001_2014EPR_14.addFeatures(features_Rate_2001_2014EPR_14);
var lyr_Rate_2001_2014EPR_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_2001_2014EPR_14, 
                style: style_Rate_2001_2014EPR_14,
                popuplayertitle: "Rate_2001_2014(EPR)",
                interactive: true,
                title: 'Rate_2001_2014(EPR)'
            });
var format_Rate_2014_2024EPR_15 = new ol.format.GeoJSON();
var features_Rate_2014_2024EPR_15 = format_Rate_2014_2024EPR_15.readFeatures(json_Rate_2014_2024EPR_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rate_2014_2024EPR_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_2014_2024EPR_15.addFeatures(features_Rate_2014_2024EPR_15);
var lyr_Rate_2014_2024EPR_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_2014_2024EPR_15, 
                style: style_Rate_2014_2024EPR_15,
                popuplayertitle: "Rate_2014_2024(EPR)",
                interactive: true,
                title: 'Rate_2014_2024(EPR)'
            });
var format_Rate_1990_2001EPR_16 = new ol.format.GeoJSON();
var features_Rate_1990_2001EPR_16 = format_Rate_1990_2001EPR_16.readFeatures(json_Rate_1990_2001EPR_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rate_1990_2001EPR_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_1990_2001EPR_16.addFeatures(features_Rate_1990_2001EPR_16);
var lyr_Rate_1990_2001EPR_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_1990_2001EPR_16, 
                style: style_Rate_1990_2001EPR_16,
                popuplayertitle: "Rate_1990_2001(EPR)",
                interactive: true,
                title: 'Rate_1990_2001(EPR)'
            });
var format_Zonevulnrable_2024_17 = new ol.format.GeoJSON();
var features_Zonevulnrable_2024_17 = format_Zonevulnrable_2024_17.readFeatures(json_Zonevulnrable_2024_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zonevulnrable_2024_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonevulnrable_2024_17.addFeatures(features_Zonevulnrable_2024_17);
var lyr_Zonevulnrable_2024_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonevulnrable_2024_17, 
                style: style_Zonevulnrable_2024_17,
                popuplayertitle: "Zone vulnérable_2024",
                interactive: true,
                title: '<img src="styles/legend/Zonevulnrable_2024_17.png" /> Zone vulnérable_2024'
            });
var format_TC2024_18 = new ol.format.GeoJSON();
var features_TC2024_18 = format_TC2024_18.readFeatures(json_TC2024_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2024_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2024_18.addFeatures(features_TC2024_18);
var lyr_TC2024_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2024_18, 
                style: style_TC2024_18,
                popuplayertitle: "TC 2024",
                interactive: true,
                title: '<img src="styles/legend/TC2024_18.png" /> TC 2024'
            });
var format_TC2014_19 = new ol.format.GeoJSON();
var features_TC2014_19 = format_TC2014_19.readFeatures(json_TC2014_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2014_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2014_19.addFeatures(features_TC2014_19);
var lyr_TC2014_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2014_19, 
                style: style_TC2014_19,
                popuplayertitle: "TC 2014",
                interactive: true,
                title: '<img src="styles/legend/TC2014_19.png" /> TC 2014'
            });
var format_TC2001_20 = new ol.format.GeoJSON();
var features_TC2001_20 = format_TC2001_20.readFeatures(json_TC2001_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2001_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2001_20.addFeatures(features_TC2001_20);
var lyr_TC2001_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2001_20, 
                style: style_TC2001_20,
                popuplayertitle: "TC 2001",
                interactive: true,
                title: '<img src="styles/legend/TC2001_20.png" /> TC 2001'
            });
var format_TC1990_21 = new ol.format.GeoJSON();
var features_TC1990_21 = format_TC1990_21.readFeatures(json_TC1990_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC1990_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC1990_21.addFeatures(features_TC1990_21);
var lyr_TC1990_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC1990_21, 
                style: style_TC1990_21,
                popuplayertitle: "TC 1990",
                interactive: true,
                title: '<img src="styles/legend/TC1990_21.png" /> TC 1990'
            });
var group_Traits_cte_ancien = new ol.layer.Group({
                                layers: [lyr_Zonevulnrable_2024_17,lyr_TC2024_18,lyr_TC2014_19,lyr_TC2001_20,lyr_TC1990_21,],
                                fold: "open",
                                title: "Traits_côte_ancien"});
var group_TauxparTransects = new ol.layer.Group({
                                layers: [lyr_Rates_1990_2024LRR_13,lyr_Rate_2001_2014EPR_14,lyr_Rate_2014_2024EPR_15,lyr_Rate_1990_2001EPR_16,],
                                fold: "open",
                                title: "Taux par Transects"});
var group_Prvisiondrosion = new ol.layer.Group({
                                layers: [lyr_pre_acre_10,lyr_pre_ero_11,lyr_trait_de_cte_2054_12,],
                                fold: "open",
                                title: "Prévision d'érosion"});
var group_Zonesrisque = new ol.layer.Group({
                                layers: [lyr_infrastructure_risque_8,lyr_zone_risqu_2054_9,],
                                fold: "open",
                                title: "Zones à risque"});
var group_Superfie_perdues = new ol.layer.Group({
                                layers: [lyr_Superficie_2054_5,lyr_Superficie_2024_6,lyr_Superficie_1990_7,],
                                fold: "open",
                                title: "Superfie_perdues"});
var group_References = new ol.layer.Group({
                                layers: [lyr_Mesures_protection_1,lyr_infrastructure_vulnrable_2,lyr_Zone_dtude_3,lyr_PaysTOGO_4,],
                                fold: "open",
                                title: "References"});

lyr_OSMStandard_0.setVisible(true);lyr_Mesures_protection_1.setVisible(true);lyr_infrastructure_vulnrable_2.setVisible(true);lyr_Zone_dtude_3.setVisible(true);lyr_PaysTOGO_4.setVisible(true);lyr_Superficie_2054_5.setVisible(true);lyr_Superficie_2024_6.setVisible(true);lyr_Superficie_1990_7.setVisible(true);lyr_infrastructure_risque_8.setVisible(true);lyr_zone_risqu_2054_9.setVisible(true);lyr_pre_acre_10.setVisible(true);lyr_pre_ero_11.setVisible(true);lyr_trait_de_cte_2054_12.setVisible(true);lyr_Rates_1990_2024LRR_13.setVisible(true);lyr_Rate_2001_2014EPR_14.setVisible(true);lyr_Rate_2014_2024EPR_15.setVisible(true);lyr_Rate_1990_2001EPR_16.setVisible(true);lyr_Zonevulnrable_2024_17.setVisible(true);lyr_TC2024_18.setVisible(true);lyr_TC2014_19.setVisible(true);lyr_TC2001_20.setVisible(true);lyr_TC1990_21.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_References,group_Superfie_perdues,group_Zonesrisque,group_Prvisiondrosion,group_TauxparTransects,group_Traits_cte_ancien];
lyr_Mesures_protection_1.set('fieldAliases', {'creator': 'creator', 'version': 'version', 'lat': 'lat', 'lon': 'lon', 'ns1_name': 'ns1_name', 'ns1_ele': 'ns1_ele', 'ns1_time': 'ns1_time', });
lyr_infrastructure_vulnrable_2.set('fieldAliases', {'creator': 'creator', 'version': 'version', 'lat': 'lat', 'lon': 'lon', 'ns1_name': 'ns1_name', 'ns1_ele': 'ns1_ele', 'ns1_time': 'ns1_time', });
lyr_Zone_dtude_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Noms': 'Village/quartier', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Superficie': 'superficie(km²)', });
lyr_PaysTOGO_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Superficie': 'superficie(km²)', });
lyr_Superficie_2054_5.set('fieldAliases', {'Id': 'Id', 'superficie': 'superfcie(km²)', 'type': 'type', });
lyr_Superficie_2024_6.set('fieldAliases', {'Id': 'Id', 'Superficie': 'superficie(km²)', 'Typ_': 'Typ_', });
lyr_Superficie_1990_7.set('fieldAliases', {'Id': 'Id', 'superficie': 'superficie(km²)', 'type': 'type', });
lyr_infrastructure_risque_8.set('fieldAliases', {'id': 'id', 'COMMUNE': 'COMMUNE', 'CANTON': 'CANTON', 'VILLAGE_QU': 'village/quartier', 'ACTIVITES': 'Activités', 'SECTEUR': 'secteur', 'TYPE': 'TYPE', 'STATUT': 'STATUT', 'ETAT': 'ETAT', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALTITUDE': 'ALTITUDE', 'field_28': 'field_28', 'field_29': 'field_29', 'Colonne1': 'Secteur', });
lyr_zone_risqu_2054_9.set('fieldAliases', {'Id': 'Id', 'nom': 'nom', 'LRR_2054': 'LRR_2054', });
lyr_pre_acre_10.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_pre_ero_11.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_trait_de_cte_2054_12.set('fieldAliases', {'Id': 'Id', 'loca': 'loca', });
lyr_Rates_1990_2024LRR_13.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR(m/an)', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_2001_2014EPR_14.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_2014_2024EPR_15.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_1990_2001EPR_16.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Zonevulnrable_2024_17.set('fieldAliases', {'Id': 'Id', 'Nom': 'Nom', 'Taux_éros': 'Taux_éros', });
lyr_TC2024_18.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC2014_19.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC2001_20.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC1990_21.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_Mesures_protection_1.set('fieldImages', {'creator': 'TextEdit', 'version': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'ns1_name': 'TextEdit', 'ns1_ele': 'TextEdit', 'ns1_time': 'TextEdit', });
lyr_infrastructure_vulnrable_2.set('fieldImages', {'creator': 'TextEdit', 'version': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'ns1_name': 'TextEdit', 'ns1_ele': 'TextEdit', 'ns1_time': 'TextEdit', });
lyr_Zone_dtude_3.set('fieldImages', {'OBJECTID': 'Hidden', 'Noms': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Superficie': 'TextEdit', });
lyr_PaysTOGO_4.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'ADM0_FR': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM0_REF': 'Hidden', 'date': 'Hidden', 'validOn': 'Hidden', 'validTo': 'Hidden', 'Superficie': 'TextEdit', });
lyr_Superficie_2054_5.set('fieldImages', {'Id': 'Hidden', 'superficie': 'TextEdit', 'type': 'TextEdit', });
lyr_Superficie_2024_6.set('fieldImages', {'Id': 'Hidden', 'Superficie': 'TextEdit', 'Typ_': 'TextEdit', });
lyr_Superficie_1990_7.set('fieldImages', {'Id': 'Hidden', 'superficie': 'TextEdit', 'type': 'TextEdit', });
lyr_infrastructure_risque_8.set('fieldImages', {'id': 'Hidden', 'COMMUNE': 'Hidden', 'CANTON': 'Hidden', 'VILLAGE_QU': 'TextEdit', 'ACTIVITES': 'TextEdit', 'SECTEUR': 'Hidden', 'TYPE': 'Hidden', 'STATUT': 'Hidden', 'ETAT': 'Hidden', 'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'ALTITUDE': 'Hidden', 'field_28': 'Hidden', 'field_29': 'Hidden', 'Colonne1': 'TextEdit', });
lyr_zone_risqu_2054_9.set('fieldImages', {'Id': 'Range', 'nom': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_pre_acre_10.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_pre_ero_11.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_trait_de_cte_2054_12.set('fieldImages', {'Id': 'Hidden', 'loca': 'Hidden', });
lyr_Rates_1990_2024LRR_13.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'TextEdit', 'LR2': 'Hidden', 'LCI': 'Hidden', 'LSE': 'Hidden', 'EPR': 'Hidden', 'EPRunc': 'Hidden', 'NSM': 'Hidden', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Rate_2001_2014EPR_14.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Rate_2014_2024EPR_15.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Rate_1990_2001EPR_16.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Zonevulnrable_2024_17.set('fieldImages', {'Id': 'Range', 'Nom': 'TextEdit', 'Taux_éros': 'TextEdit', });
lyr_TC2024_18.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_TC2014_19.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_TC2001_20.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_TC1990_21.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_Mesures_protection_1.set('fieldLabels', {'creator': 'no label', 'version': 'no label', 'lat': 'no label', 'lon': 'no label', 'ns1_name': 'no label', 'ns1_ele': 'no label', 'ns1_time': 'no label', });
lyr_infrastructure_vulnrable_2.set('fieldLabels', {'creator': 'no label', 'version': 'no label', 'lat': 'no label', 'lon': 'no label', 'ns1_name': 'no label', 'ns1_ele': 'no label', 'ns1_time': 'no label', });
lyr_Zone_dtude_3.set('fieldLabels', {'Noms': 'no label', 'Superficie': 'no label', });
lyr_PaysTOGO_4.set('fieldLabels', {'Superficie': 'no label', });
lyr_Superficie_2054_5.set('fieldLabels', {'superficie': 'no label', 'type': 'no label', });
lyr_Superficie_2024_6.set('fieldLabels', {'Superficie': 'no label', 'Typ_': 'no label', });
lyr_Superficie_1990_7.set('fieldLabels', {'superficie': 'no label', 'type': 'no label', });
lyr_infrastructure_risque_8.set('fieldLabels', {'VILLAGE_QU': 'no label', 'ACTIVITES': 'no label', 'Colonne1': 'no label', });
lyr_zone_risqu_2054_9.set('fieldLabels', {'Id': 'no label', 'nom': 'no label', 'LRR_2054': 'no label', });
lyr_pre_acre_10.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_pre_ero_11.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_trait_de_cte_2054_12.set('fieldLabels', {});
lyr_Rates_1990_2024LRR_13.set('fieldLabels', {'LRR': 'no label', });
lyr_Rate_2001_2014EPR_14.set('fieldLabels', {'EPR': 'no label', 'NSM': 'no label', });
lyr_Rate_2014_2024EPR_15.set('fieldLabels', {'EPR': 'no label', 'NSM': 'no label', });
lyr_Rate_1990_2001EPR_16.set('fieldLabels', {'EPR': 'no label', 'NSM': 'no label', });
lyr_Zonevulnrable_2024_17.set('fieldLabels', {'Id': 'no label', 'Nom': 'no label', 'Taux_éros': 'no label', });
lyr_TC2024_18.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC2014_19.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC2001_20.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC1990_21.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC1990_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});