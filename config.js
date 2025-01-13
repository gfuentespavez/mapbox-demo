var config = {
    style: 'mapbox://styles/germanfuentes/cm3t6fzv3007601ql8t1a85l9',
    accessToken: 'pk.eyJ1IjoiZ2VybWFuZnVlbnRlcyIsImEiOiJjbTN0MmN0MTcwM3QyMmtwdW9oYXh5c3IxIn0.9Hdplt9Zub25GnbsZaxJBw',
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
    use3dTerrain: false, //set true for enabling 3D maps.
    title: '',
    subtitle: '',
    byline: '',
    image: '<img src="./assets/images/logo.png" alt="" class="custom-logo">',

    auto: false,
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-main-title">¿Dónde ocurren más accidentes en el Gran Concepción?</h3>',
            subs: '<h3 class="custom-subs">Analizamos los puntos críticos de la ciudad usando datos en partnership con Waze.</h3>',
            location: {
                center: [-73.10207, -36.81371],
                zoom: 9.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro-bajada',
            alignment: 'left',
            hidden: false,
            title:'',
            description:'<p class="custom-description">El Área Metropolitana del Gran Concepción, segundo conglomerado urbano del país, experimentó un constante incremento en la flota vehicular durante los últimos años: en 2022, se vendieron 27.926 vehículos nuevos, y 21.027, en 2023 (Anac, 2022-23). También, en 2022, la región del Biobío ocupó el tercer lugar con la mayor cantidad de permisos de circulación para vehículos en Chile con 511.500 permisos. Esto corresponde a 0,3 permisos por persona, situándose por sobre los 0,27 de la Región Metropolitana (INE, 2023).\n' +
                '<br><br>Este aumento de vehículos motorizados en la ciudad genera diferentes impactos de carácter negativo como el incremento en el flujo y la congestión vehicular, la contribución a la contaminación y, por último. potencia el riesgo de experimentar una colisión o accidentes de tránsito',
            location: {
                center: [-73.10207, -36.81371],
                zoom: 9.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'alborada-spp',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">Estación Alborada, <br>San Pedro de la Paz.</h3>',
            description: `
        <p class="custom-description">
            En la zona, se produjeron 266 accidentes en total dentro del rango de fecha analizado. La mayoría se producen en la Ruta 160 que conecta Concepción y Coronel - Lota.
            <br><br>
            En la zona que concentra una densidad elevada de accidentes mayores se contabilizaron 52 accidentes. En el sector solo se presenta un colegio y un mall de importaciones.
        </p>
        <div class="image-row">
            <img src="assets/images/indicadores/Estación alborada_1.png" alt="Estación Alborada Image 1" class="chapter-image">
            <img src="assets/images/indicadores/Estación alborada-02.png" alt="Estación Alborada Image 2" class="chapter-image">
            <img src="assets/images/indicadores/Estación alborada-03.png" alt="Estación Alborada Image 3" class="chapter-image">
        </div>
    `,
            image: '',  // No main image as we've added the images directly in the description
            location: {
                center: [-73.13022, -36.84421],
                zoom: 16.72,
                pitch: 20,
                bearing: -90,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'diagonal-biobio-spp',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">Diagonal Biobío - estación Biotren</h3>',
            description: '<p class="custom-description"> Hacia Concepción por la ruta 160, este sector sumó 389 accidentes en total. En esta zona crítica para el tráfico se encuentra el Cesfam Candelaria, un SAPU y un SAR, además de la Tenencia de Carabineros y siete establecimientos educacionales.',
            location: {
                center: [-73.11807, -36.83740],
                zoom: 16.54,
                pitch: 40,
                bearing: -60.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id:'nudo-nobis',
            alignment: 'left',
            hidden: false,
            title:'<h3 class="custom-title">Nudo Nobis, Concepción</h3>',
            description:'<p class="custom-description">En octubre de 2023, los trabajos de ampliación y mejoramiento del Nudo Nobis entraron en la incertidumbre. La quiebra de la empresa constructora perjuficó el desplazamiento vehicular por esta zona con usos de suelos mixtos. \n' +
                'Entre el 15 de marzo y el 19 de agosto, se contabilizaron 496 accidentes, de los cuales 67 fueron de características mayores. En una zona de conexión entre Concepción, Talcahuano, Hualpén, San Pedro de la Paz y las comunas al sur del Biobío, resulta indispensable contar con una corresponsabilidad vial.',
            location: {
                center: [-73.07828, -36.80668],
                zoom: 17.25,
                pitch: 30,
                bearing: -0.1,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id:'trebol',
            alignment: 'left',
            hidden: false,
            title:'<h3 class="custom-title">Enlace Trébol</h3>',
            description:'<p class="custom-description">Las largas filas para ingresar a la planta de revisión técnica generaron filas kilométricas, según reportó el medio <a href="https://www.biobiochile.cl/noticias/nacional/region-del-bio-bio/2024/07/02/esperas-de-hasta-2-horas-y-filas-kilometricas-planta-de-revision-tecnica-de-paicavi-esta-colapsada.shtml" target="_blank">biobiochile.cl</a>. La aplicación Waze reportó 759 incidentes totales, entre los cuales se cuentan los 94 accidentes mayores que alteraron el tráfico. \n' +
                'En la zona encontramos el Mall Plaza Trébol, dos centros de salud privado más una mutualidad, dos centros de estudios superiores, dos escuelas, la Prefectura de Carabineros, supermercados y la ya mencionada PRT Paicaví.',
            location: {
                center: [-73.06528, -36.79791],
                zoom: 15.81,
                pitch: 20,
                bearing: -0.1,
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
            description: '<p class="custom-description">Punto de conexión entre Penco y Concepción, en la Rotonda Bonilla se registraron 296 accidentes, de los cuales 32 son de carácter mayor. \n ' +
        'Los días previos a feriados largos, los eventos multitudinarios y el tránsito de camiones que vienen desde Cabrero y Penco ocasionan en esta área grandes atascamientos, cuyos impactos pueden alcanzar incluso hasta el sector del Mall Plaza Trébol.',
            location: {
                center: [-73.02745, -36.81144],
                zoom: 15.506,
                pitch: 20,
                bearing: -0.1,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cierre',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-title">Conclusiones y recomendaciones</h3>',
            description: `
        <p class="custom-description">
            Según las cifras de Conaset, en los últimos años, los accidentes no fatales en la región de Biobío incrementaron. 
            Sin embargo, se presenta uno de los índices de severidad más bajos del país, posicionando al Gran Concepción 
            como el área metropolitana con los mejores indicadores de accidentes de tránsito de vehículos particulares en Chile.
            <br><br>
            El análisis de los datos de Waze arrojó que los accidentes de tránsito se presentan con mayor frecuencia en las vías estructurantes 
            de la ciudad y la región del Biobío, como las rutas 154, 150, y 160.
            <br><br>
            - Corresponsabilidad vial a través de campañas informativas que lleguen a todos los habitantes del Área Metropolitana de Concepción, 
              en cada una de las comunas que la conforman, para prevenir los accidentes de tránsito.
            <br>
            - Un Plan Integral de Acción y Prevención con énfasis en los días previos a los frentes de mal tiempo y eventos meteorológicos, 
              dado que estos días presentan la mayor recurrencia de accidentes de tránsito.
            <br><br>
            <a href="https://citylabbiobio.cl/wp-content/uploads/2024/12/Microestudio_Accidentes-v02.pptx.pdf">
                <button id="cierreButton" class="custom-button">Ver más detalles</button>
            </a>
            
        </p>
    `,
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
            onChapterExit: [],
        },
    ]
};