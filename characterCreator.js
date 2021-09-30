var character = new Object();

function createCharacter(){
	character.name = document.getElementById("name").value;
	if (document.getElementById("warrior").checked == true) {
		character.gameClass = "Warrior";
		character.maxHealth = 100;
		character.health = 100;
		character.maxMana=0;
		character.mana = 0;
		character.weapon = "Sword";
	}
	if (document.getElementById("ranger").checked == true) {
		character.gameClass = "Ranger";
		character.maxHealth = 75;
		character.health = 75;
		character.maxMana=15;
		character.mana = 15;
		character.weapon = "Long Bow";
	}
	if (document.getElementById("mage").checked == true) {
		character.gameClass = "Mage";
		character.maxHealth = 50;
		character.health = 50;
		character.maxMana=50;
		character.mana = 50;
		character.weapon = "Staff";
	}
	character.boosters = [false, false, false, false, false];
	if (document.getElementById("boost1").checked == true) {
		character.boosters[0] = true;
	}
	if (document.getElementById("boost2").checked == true) {
		character.boosters[1] = true;
	}
	if (document.getElementById("boost3").checked == true) {
		character.boosters[2] = true;
	}
	if (document.getElementById("boost4").checked == true) {
		character.boosters[3] = true;
	}
	if (document.getElementById("boost5").checked == true) {
		character.boosters[4] = true;
	}
	
	var link = document.getElementById("mapLink")
	link += createLink();
	alert("Your new character is: " + character.name + " who is a " + character.gameClass + " and you have these boosters activated: " + getBoosters());
}

function getBoosters() {
	output = "";
	for (i = 0; i < character.boosters.length; i++) {
		if ((i == character.boosters.length-1) && (character.boosters[i] == true)) {
			output += (i+1);
		}
		else if (character.boosters[i] == true) {
			output += (i+1) + ", ";
		}
	}
	return output;
}

function createLink() {
	
}

