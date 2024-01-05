
function openQuestion(event) {

    const id = event.target.id;
    const questionText = getQuestionText(id);

    event.target.innerHTML = '<FONT SIZE=-5>' + questionText + '</FONT>';

    var SimpleLightbox = window.SimpleLightbox;

    var questionDiv = '';
    questionDiv += '<div class="contentInPopup">';
    questionDiv += '<table><tr><td style="background-color: #CC7700" class="questiontext">';
    questionDiv += questionText;
    questionDiv += '</td></tr></table>';
    questionDiv += '</div>';

    setTimeout(() => {  

        SimpleLightbox.open({
            content: questionDiv,
            elementClass: 'slbContentEl',
        });
        closeButtonHack();
        blankOut(event);

    }, 500);

    return;
}

function blankOut(event) {
    event.target.innerHTML = " ";
    event.target.style.backgroundColor = "#663A00";
    return;
}

function revertToInit(event) {
    event.target.innerHTML = "1";
    event.target.style.backgroundColor = "#CC7700";
    return;
}

function closeButtonHack() {
    var closeButton = $('.slbCloseBtn').get(0);
    closeButton.innerHTML = '';
    return;
}

document.querySelectorAll('#catboardid td').forEach(function (cell) { return cell.addEventListener("click", function (event) {
    // Here, `this` refers to the element the event was hooked on
    //let td = event.target;
    //let id: string = td.id;
    var innerHTML = event.target.innerHTML;
    revealCategory(event);

}); });

document.querySelectorAll('#boardid td').forEach(function (cell) { return cell.addEventListener("click", function (event) {
    // Here, `this` refers to the element the event was hooked on
    //let td = event.target;
    //let id: string = td.id;
    var innerHTML = event.target.innerHTML;
    if (innerHTML === "1") {
        openQuestion(event);
    }
    if (innerHTML === "?") {
        blankOut(event);
    }
    if (innerHTML === " ") {
        revertToInit(event);
    }
    
}); });

function revealCategory(event) {
    
    var innerHTML = event.target.innerHTML;
    if (innerHTML === '<!--1-->') {
        event.target.innerHTML = 'SCARY MOVIE QUOTES';
    }
    else if (innerHTML === '<!--2-->') {
        event.target.innerHTML = 'IT HAPPENED ON OCTOBER 31';
    }
    else if (innerHTML === '<!--3-->') {
        event.target.innerHTML = 'HALLOWEEN COSTUMES'
    }
    else if (innerHTML === '<!--4-->') {
        event.target.innerHTML = 'TRANSYLVANIA'
    }
    else if (innerHTML === '<!--5-->') {
        event.target.innerHTML = "FAMOUS GHOSTS";
    }
    else if (innerHTML === '<!--6-->') {
        event.target.innerHTML = '"TRICK" OR "TREAT"'
    }    
    
    event.target.style.backgroundColor = "#003333";

    return;
}

function getQuestionText(id) {

    const questions = {
        
        // category 1 MOVIE QUOTES

        '00': '"Wendy, I' + "'" + 'm home!"',
        '10': '"Back home we got a taxidermy man. He gonna have a heart attack when he see what I brung him."',
        '20': '"Every kid in Haddonfield thinks this place is haunted." "They may be right."',
        '30': '"You moved the cemetery, but you left the bodies, ' + "didn't" + ' you?"',
        '40': '"At this rate ' + "it's" + ' going to take a couple of hours to get everyone down. So, I would suggest that those of us with stout hearts and trim waistlines start using the stairs." "That' + "'" + 's 135 floors." "All downhill."',
                
        // category 2 OCT 31

        '01': "In 1517, this man posted his 95 Theses on the door of the Castle Church in Wittenberg, Germany, kick-starting the Protestant Reformation.",
        '11': "The United Kingdom and France began bombing Egypt on October 31, 1956, in an attempt to force the reopening of this.",
        '21': "This event happened in the Twin Cities in 1991, and thirty years later some of us still talk about it.",
        '31': "In the year 2000, the first residents arrived here, and it has been crewed continuously ever since then.",
        '41': "The global population of humans reached this round number in 2011, and is now recognized by the United Nations as a special day.",
        
        // category 3 HALLOWEEN COSTUMES

        '02': "Red top, red boots, skirt, golden eagle emblem, and Lasso of Truth.",
        '12': "Light blue checkered dress, picnic basket (with dog optional), and most important, ruby slippers.", 
        '22': "Light beige shirt, dark vest, boots, black pants with a dotted-red stripe down the side, belt with blaster, and maybe a pair of lucky Sabacc dice. ",
        '32': "Striped red top, beige patterned skirt, a flower in the hair, and a blue shell pendant. If you can find a Heart of Te Fiti to go in it, even better.",
        '42': "Old, raggedy clothes, and carry a bindle.",

        // category 4 TRANSYLVANIA

        '03': "The modern nation that Transylvania is located in.",
        '13': "The Western world commonly associates Transylvania with vampires because of the novel <I>Dracula</I> that is set there, written by this author.",
        '23': "It conquered Transylvania in the year 106 A.D., and remained there for 165 years.",
        '33': "Transylvania is bordered by this mountain range to the east and south.",
        '43': "Considered one of the most important rulers in Wallachian history and a national hero, it has been suggested that the fictional Dracula was inspired by this real-life prince, who was killed in battle in 1477.",
        
        // category 5 FAMOUS GHOSTS

        '04': "This Gryffindor House ghost was supposed to be executed by beheading, but the job was poorly done.",
        '14': '"A good man of business", he initiated the events of "A Christmas Carol" by appearing in front of his former partner Ebenezer Scrooge.',
        '24': "This ghost was originally portrayed by Sebastian Shaw in 1982, but replaced by Hayden Christiansen in a 2004 DVD release.",
        '34': 'Maybe the most famous baseball player ghost ever, this member of the Chicago White Sox was played by Ray Liotta in "Field of Dreams".',
        '44': 'This "ghost ship" was an American briganteen discovered adrift and deserted in the Atlantic Ocean in 1872. None of those whom had been on board were ever seen again, and exactly what happened remains a mystery to this day.',

        // category 6 "TRICK" OR "TREAT"

        '05': "An outing, meal, or other special occasion at which each participant pays for their share of the expenses.",
        '15': "Three successes of the same kind, especially consecutive ones within a limited period.",
        '25': "A nursery rhyme that begins " + '"' + "As I was going to St. Ives, I met a man with seven wives" + '"' + " is a well-known example of one of these.",
        '35': 'This song by Harry Styles begins with the lyrics "Maybe we can find a place to feel good".',
        '45': 'This Connecticut native got his big break in theatre by starring as Danny Zuko in <i>Grease</I> on Broadway. He has also acted as George Berger in <i>Milo</i>, in Forman' + "'" + 's movie musical <I>Hair</I>, and on TV shows including "Everwood" and "Chesapeake Shores".',
        
        // Empty example

        //'01': "",
        //'11': "",
        //'21': "",
        //'31': "",
        //'41': "",

    };

    return questions[id];
}
