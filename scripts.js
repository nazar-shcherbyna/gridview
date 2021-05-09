const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];

let gridView = new GridView();
gridView._header = ['Company', 'Chef', 'Country'];
gridView.headerClass = ['header', 'site-header'];
gridView.attribute = {
    'company': {
        'label': 'Компания',
        'src': 'html',
    },
    'chef': {
        'label': 'Директор',
    },
    'country': {
        'label': 'Страна',
        'value': (data) => {
            if (data['country'] === 'Germany') {
                return data['country'] + ' map'
            }
            return data['country'];
        }
    }
};
gridView._data = dataExample;
gridView.render();