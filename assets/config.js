var config = {
    style: 'mapbox://styles/germanfuentes/cm3t6fzv3007601ql8t1a85l9',
    accessToken: 'pk.eyJ1IjoiZ2VybWFuZnVlbnRlcyIsImEiOiJjbTN0NmU3bXYwM3dnMmxwd201MXNtc3R2In0.8md46jHNBme3_OHPPAW7Lw',
    showMarkers: false,
    theme: 'dark',
    markerColor: '#FFCC06',
    inset: true,
    insetOptions: {
        markerColor: 'orange',
    },
    insetPosition: 'bottom-right',
    use3dTerrain: false,

    // Texto
    title: 'what',
    subtitle: 'sup',
    byline: '',
    footer: 'source',

    auto: false,

    // Capítulos de visualización
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: '<span class="custom-title">San Pedro de la Paz</span>',
            image: '',
            description: '<p class="custom-description">Acá queda siempre la zorra misma. Precaución.</p>',
            location: {
                center: [-73.13051, -36.84513],
                zoom: 15.52,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            class: 'text-box', // Clases para la caja de texto
        },
    ]
};
