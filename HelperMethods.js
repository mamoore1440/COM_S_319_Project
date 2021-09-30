function willDie(currentHealth, damage) {
	return (currentHealth < damage);
}

function updateStartPos(spawnSideArg) {
	if (spawnSideArg == "top"){
		startxPos = 650;
		startyPos = 0;
		return("650,0");
	}
	else if (spawnSideArg == "left") {
		startxPos = 0;
		startyPos = 340;
		return("0,340");
	}
	else if (spawnSideArg == "right") {
		startxPos = 1390;
		startyPos = 340;
		return("1390,340");
	}
	else if (spawnSideArg == "bottom") {
		startxPos = 650;
		startyPos = 690;
		return("650,690");
	}
}

module.exports.willDie = willDie
module.exports.updateStartPos = updateStartPos