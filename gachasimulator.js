//DEFAULT SETTING
var rollCount = 0,
    rollSSR = 0,
    rollElite = 0,
    rollRare = 0,
    rollNormal = 0;
var count = document.querySelectorAll("span p");
document.getElementById("summary_side").style.height = String(innerHeight) + "px";

//CLOSE ANNOUNCEMENT
close_ann = function () {
    document.getElementById("announcement").style.display = "none"
}

//POOL CHOOSE
var firstSubmit = 0;
setPoolLight = function () {
    firstSubmit = 1;
    document.getElementById("currentPool").innerHTML = "Light";
    for (var i = 0; i < 10; i++) {
        x[i].style.display = "none";
        document.getElementsByClassName("frame")[i].style.background = "none";
        document.getElementsByClassName("shipId")[i].innerHTML = "";
    }
    check = 1;
    shipSSR = ['Avrora', 'Belfast', 'Monpeler', 'SanDiego', 'Yukikaze'];
    shipElite = ['Aurora', 'BlakPrinc', 'ChaChun', 'Chaser', 'Clevelad', 'Cleveland', 'Denver', 'Edinbugh', 'Fubuki', 'Helena', 'Javelin', 'Laffey', 'Lena', 'Mikuma', 'Mogami', 'NingHai', 'Nowaki', 'PingHai', 'StLouis', 'TaiYuan', 'Vampire', 'YatSen', 'Yuubari', 'Z1'];
    shipRare = ['Achilles', 'Ajax', 'Amazon', 'Ariake', 'Atlanta', 'Bache', 'Bailey', 'Benson', 'Brooklyn', 'Concord', 'Curacoa', 'Curlew', 'Fletcher', 'Fortune', 'Glasgow', 'Hammann', 'Hatsuharu', 'Hasusimo', 'Hobby', 'Isokaze', 'Jersey', 'Juneau', 'Jupiter', 'Kalk', 'Kamikaze', 'Kiyonami', 'Masukaze', 'Memphis', 'Ooshio', 'Phoenix', 'Smalley', 'Southamp', 'Stanly', 'Tanikaze', 'Thatcher', 'Urakaze', 'Wakaba', 'Yuugure'];
    shipNormal = ['Aulick', 'Beagle', 'Bulldog', 'Cassin', 'Comet', 'Craven', 'Crescent', 'Cygnet', 'Downes', 'Foote', 'Foxhound', 'Koln', 'Koniberg', 'Karlsruhe', 'Kisaragi', 'Leander', 'McCall', 'Mutsuki', 'Nagara', 'Omaha', 'Raleigh', 'Spence', 'Uzuki'];
    reset();
}
setPoolHeavy = function () {
    firstSubmit = 1;
    document.getElementById("currentPool").innerHTML = "Heavy";
    for (var i = 0; i < 10; i++) {
        x[i].style.display = "none";
        document.getElementsByClassName("frame")[i].style.background = "none";
        document.getElementsByClassName("shipId")[i].innerHTML = "";
    }
    check = 1;
    shipSSR = ['Atago', 'Belfast', 'Hood', 'Minpolis', 'Carolina', 'P.o.Wales', 'PriEugen', 'Takao', 'Warspite', 'Washiton'];
    shipElite = ['Hieichan', 'Abercrom', 'GrafSpee', 'Arizona', 'Colorado', 'Edinbugh', 'Erebus', 'Exeter', 'Houston', 'Indipolis', 'Kirishima', 'London', 'Maryland', 'Nelson', 'Eliabeth', 'Renown', 'Rodney', 'Terror', 'York'];
    shipRare = ['Ajax', 'Atlanta', 'Califor', 'Chicago', 'Hyuuga', 'Ise', 'Kent', 'Norfolk', 'Northamp', 'Pennsy', 'lvania', 'Phoenix', 'Portland', 'Repulse', 'Shpshire', 'Suffolk', 'Sussex', 'Tennese'];
    shipNormal = ['Koln', 'Koniberg', 'Karlruhe', 'Kinugasa', 'Leander', 'Nevada', 'Oklahoma', 'Omaha', 'Pensacola', 'Raleigh'];
    reset();
}
setPoolSpecial = function () {
    firstSubmit = 1;
    document.getElementById("currentPool").innerHTML = "Special";
    for (var i = 0; i < 10; i++) {
        x[i].style.display = "none";
        document.getElementsByClassName("frame")[i].style.background = "none";
        document.getElementsByClassName("shipId")[i].innerHTML = "";
    }
    check = 1;
    shipSSR = ['Atago', 'Belfast', 'Centaur', 'Enteprie', 'I-19', 'Illustri', 'PriEugen', 'Shoukaku', 'Taihou', 'Takao', 'U-81', 'Zuikaku'];
    shipElite = ['Akachan', 'Zeppchan', 'ArkRoyal', 'Chaser', 'Dace', 'Edinbugh', 'Hornet', 'Houston', 'I-26', 'I-58', 'Indipolis', 'Lexinton', 'London', 'Saratoga', 'Unicorn', 'Vestal', 'Yorktown'];
    shipRare = ['Ajax', 'Atlanta', 'Chicago', 'Kent', 'LongIsl', 'Norfolk', 'Northamp', 'Phoenix', 'Portland', 'Shrpshire', 'Suffolk'];
    shipNormal = ['Aoba', 'Bogue', 'Hermes', 'Koln', 'Koniberg', 'Karlruhe', 'Kinugasa', 'Langley', 'Leander', 'Omaha', 'Pensacola', 'Raleigh', 'Ranger'];
    reset();
}
    //NOT UPDATE YET
setPoolEvent = function () {
    var z = document.getElementById("announcement");
    z.style.display = "block";
    z.childNodes[1].innerHTML = "Not available right now";
    firstSubmit = 0;
    document.getElementById("currentPool").innerHTML = "Event";
    for (var i = 0; i < 10; i++) {
        x[i].style.display = "none";
        document.getElementsByClassName("frame")[i].style.background = "none";
        document.getElementsByClassName("shipId")[i].innerHTML = "";
    }
    rollCount = 0;
    rollSSR = 0;
    rollElite = 0;
    rollRare = 0;
    rollNormal = 0;
    count[0].innerHTML = rollCount;
    count[1].innerHTML = rollSSR;
    count[2].innerHTML = rollElite;
    count[3].innerHTML = rollRare;
    count[4].innerHTML = rollNormal;
}

//RESET FUNCTION
reset = function (a) {
    if (a == 1) {
        document.getElementById("currentPool").innerHTML = "Not selected";
        document.getElementById("announcement").childNodes[1].innerHTML = "Please choose a pool!!"
        firstSubmit = 0;
    }
    rollCount = 0;
    rollSSR = 0;
    rollElite = 0;
    rollRare = 0;
    rollNormal = 0;
    count[0].innerHTML = rollCount;
    count[1].innerHTML = rollSSR;
    count[2].innerHTML = rollElite;
    count[3].innerHTML = rollRare;
    count[4].innerHTML = rollNormal;
    for (var i = 0; i < 10; i++) {
        x[i].style.display = "none";
        document.getElementsByClassName("frame")[i].style.background = "none";
        document.getElementsByClassName("shipId")[i].innerHTML = "";
    }
    check = 1;

}

//ROLL FUNCTION
var x = document.getElementsByClassName("type");
var y = document.getElementsByClassName("frame");
var check = 1;
roll = function () {
    //CHECK FIRST CALL
    if (firstSubmit == 0) {
        document.getElementById("announcement").style.display = "block";
        return;
    }

    //SHOW TYPE OF SHIP
    if (check) {
        for (var i = 0; i < 10; i++) {
            x[i].style.display = "block";
        }
        check = 0;
    }
    //ROLL CALCULATOR
    for (var i = 0; i < 10; i++) {
        var y = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (y > 0 && y < 31) {
            x[i].childNodes[1].innerHTML = "Normal";
            document.getElementsByClassName("frame")[i].style.background = "#bdc3c7";
            var tam = Math.floor(Math.random() * (shipNormal.length - 0 + 0) + 0);
            document.getElementsByClassName("shipId")[i].innerHTML = shipNormal[tam];
            ++rollNormal;
            continue;

        }
        if (y > 30 && y < 82) {
            x[i].childNodes[1].innerHTML = "Rare";
            document.getElementsByClassName("frame")[i].style.background = "#48dbfb";
            var tam = Math.floor(Math.random() * (shipRare.length - 0 + 0) + 0);
            document.getElementsByClassName("shipId")[i].innerHTML = shipRare[tam];
            ++rollRare;
            continue;
        }
        if (y > 81 && y < 94) {
            x[i].childNodes[1].innerHTML = "Elite";
            document.getElementsByClassName("frame")[i].style.background = "#9b59b6";
            var tam = Math.floor(Math.random() * (shipElite.length - 0 + 0) + 0);
            document.getElementsByClassName("shipId")[i].innerHTML = shipElite[tam];
            ++rollElite;
            continue;
        }
        if (y > 93 && y < 101) {
            x[i].childNodes[1].innerHTML = "SSR";
            document.getElementsByClassName("frame")[i].style.background = "#fff200";
            var tam = Math.floor(Math.random() * (shipSSR.length - 0 + 0) + 0);
            document.getElementsByClassName("shipId")[i].innerHTML = shipSSR[tam];
            ++rollSSR;
            continue;
        }
    }
    ++rollCount;
    count[0].innerHTML = rollCount;
    count[1].innerHTML = rollSSR;
    count[2].innerHTML = rollElite;
    count[3].innerHTML = rollRare;
    count[4].innerHTML = rollNormal;
}

