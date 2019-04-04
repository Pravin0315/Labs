var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var playername = players.find(function(players){
    return players.firstName == 'Mike';
});

var playersposition = players.filter(function(players){
    return players.position == 'RB';
});

var playerslastName = players.map(function(players){
    return players.lastName;
});

var runningBackswithfiveTDs = players.filter(function(players){
    return players.position == 'RB' && players.touchdowns > 5;}) 
    .map(function(players){
        return players.firstName + ' ' + players.lastName
    });

var RBtouchdowns = players.filter(function(players){
    return players.position == 'RB'
    }).reduce(function(sum,current){return sum + current.touchdowns;},0);
    


console.log(playername);
console.log(playersposition);
console.log(playerslastName);
console.log(runningBackswithfiveTDs);
console.log(RBtouchdowns);