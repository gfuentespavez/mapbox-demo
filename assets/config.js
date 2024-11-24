var config = {
    style: 'mapbox://styles/germanfuentes/cm3t6fzv3007601ql8t1a85l9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZ2VybWFuZnVlbnRlcyIsImEiOiJjbTN0NmU3bXYwM3dnMmxwd201MXNtc3R2In0.8md46jHNBme3_OHPPAW7Lw',
    showMarkers: false,
    theme: 'dark',
    markerColor: '#FFCC06',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right' ,
    use3dTerrain: false, //set true for enabling 3D maps.
    title: '',
    subtitle: '',
    byline: '',
    image: '<img src="/assets/images/logo.png" alt="" class="custom-logo">',

    auto: false,
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">¿Dónde ocurren más accidentes en el Gran Concepción?</h3>',
            description: '<p class="custom-description">Analizamos datos de Waze para determinar los sectores con mayor prevalencia de accidentes de tránsito en el área metropolitana. Los resultados nos permiten entender las causas subyacentes a los accidentes.  <br><br> El Área Metropolitana del Gran Concepción, segundo conglomerado urbano del país, experimentó un constante incremento en la flota vehicular durante los últimos años: en 2022, se vendieron 27.926 vehículos nuevos, y 21.027, en 2023 (Anac, 2022-23). También, en 2022, la región del Biobío ocupó el tercer lugar con la mayor cantidad de permisos de circulación para vehículos en Chile con 511.500 permisos. Esto corresponde a 0,3 permisos por persona, situándose por sobre los 0,27 de la Región Metropolitana (INE, 2023).\n' +
                '<br><br>Este aumento de vehículos motorizados en la ciudad genera diferentes impactos de carácter negativo como el incremento en el flujo y la congestión vehicular, la contribución a la contaminación y, por último. potencia el riesgo de experimentar una colisión o accidentes de tránsito.\n' +
                '<br><br>En 2023, a nivel país se registraron 78.238 siniestros de tránsito en los cuales resultaron 1.635 personas fallecidas (Carabineros, 2023). Sin embargo, esto representa una disminución de un 9,1% con respecto al año anterior. Y, en el caso de la región del Biobío, fallecieron 156 personas por la misma causa vial y 5.665 quedaron con lesiones de diversa consideración, presentando uno de los menores niveles del índice de severidad del país con 1,88 víctimas fatales por cada 100 siniestros de tránsito (Conaset, 2023).\n</p>',
            location: {
                center: [-73.10207, -36.81371],
                zoom: 9.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'alborada-spp',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">Estación Alborada, <br>San Pedro de la Paz.</h3>',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-73.13022, -36.84421],
                zoom: 15.5,
                pitch: 20,
                bearing: -90,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'diagonal-biobio-spp',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">Diagonal biobio spp</h3>',
            description: '<p class="custom-description">Analizamos datos de Waze para determinar los sectores con mayor prevalencia de accidentes de tránsito en el área metropolitana. Los resultados nos permiten entender las causas subyacentes a los accidentes.</p>',
            location: {
                center: [-73.11807, -36.83740],
                zoom: 16.35,
                pitch: 60.01,
                bearing: -60.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bonilla',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">Rotonda Bonilla, Concepción</h3>',
            description: '<p class="custom-description">La entrada al terminal siempre tomada por los Uber.</p>',
            location: {
                center: [-73.02745, -36.81144],
                zoom: 16,
                pitch: 20,
                bearing: -0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
