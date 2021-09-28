let data = [
    {
        name : 'Matero',
        age : '30'
    },
    {
        name : 'Bashu',
        age : '20'
    },
    {
        name : 'Abhay',
        age : '25'
    },
    {
        name : 'Bittu',
        age : '35'
    },
    {
        name : 'Siddu',
        age : '44'
    },
    {
        name : 'JavaScript',
        age : '32'
    },
    {
        name : 'efrgtyg',
        age : '35'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + '</div>';
});

info.innerHTML = details.join('\n');
