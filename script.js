
   (async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
    ).then(response => response.json());
    
    
    const data = [
        ['us-ma', 7], ['us-wa', 106], ['us-ca', 401], ['us-or', 89],
        ['us-wi', 53], ['us-me', 0], ['us-mi', 48], ['us-nv', 61],
        ['us-nm', 0], ['us-co', 63], ['us-wy', 20], ['us-ks', 12],
        ['us-ne', 5], ['us-ok', 20], ['us-mo', 609], ['us-il', 89],
        ['us-in', 18], ['us-vt', 0], ['us-ar', 11], ['us-tx', 139],
        ['us-ri', 0], ['us-al', 7], ['us-ms', 5], ['us-nc', 50],
        ['us-va', 0], ['us-ia', 5], ['us-md', 59], ['us-de', 0],
        ['us-pa', 51], ['us-nj', 12], ['us-ny', 58], ['us-id', 0],
        ['us-sd', 0], ['us-ct', 169], ['us-nh', 0], ['us-ky', 8],
        ['us-oh', 27], ['us-tn', 19], ['us-wv', 0], ['us-dc', 0],
        ['us-la', 11], ['us-fl', 172], ['us-ga', 52], ['us-sc', 58],
        ['us-mn', 46], ['us-mt', 0], ['us-nd', 0], ['us-az', 16],
        ['us-ut', 3], ['us-hi', 8], ['us-ak', 0]
    ];
    
    
    })();
    