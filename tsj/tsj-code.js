
function openQuestion(event) {

    const id = event.target.id;
    var dailyDoubleFlag = false;
    var questionText;
    
    // Give this a nonexistent id if you want no daily double
    if (id === '35') {
        dailyDoubleFlag = true;
        questionText = 'DAILY DOUBLE';
    }
    else {
        questionText = getQuestionText(id);
    }

    event.target.innerHTML = dailyDoubleFlag ? 
       '<FONT SIZE=+3>' + questionText + '</FONT>' :
       '<FONT SIZE=-5>' + questionText + '</FONT>';

    var SimpleLightbox = window.SimpleLightbox;

    var questionDiv = '';
    questionDiv += '<div class="contentInPopup">';
    questionDiv += dailyDoubleFlag ? '<table><tr><td class="dailydouble">' : '<table><tr><td class="questiontext">';
    questionDiv += questionText;
    questionDiv += '</td></tr></table>';
    questionDiv += '</div>';

    setTimeout(() => {  

        if (dailyDoubleFlag) {
           dailyDoubleFlag = false;
           SimpleLightbox.defaults.afterClose = () => {
              
              var ddQuestionDiv = '';
              ddQuestionDiv += '<div class="contentInPopup">';
              ddQuestionDiv += '<table><tr><td class="questiontext">';
              ddQuestionDiv += getQuestionText(id);
              ddQuestionDiv += '</td></tr></table>';
              ddQuestionDiv += '</div>';
              
              SimpleLightbox.defaults.afterClose = () => {};
              SimpleLightbox.open({
                 content: ddQuestionDiv,
                 elementClass: 'slbContentEl',
              });
              closeButtonHack();
           }
        }

        SimpleLightbox.open({
            content: questionDiv,
            elementClass: 'slbContentEl',
        });
        
        closeButtonHack();
        blankOut(event);
    }, 800);

    return;
}

function blankOut(event) {
    event.target.innerHTML = " ";
    event.target.style.backgroundColor = "darkblue";
    return;
}

function revertToInit(event) {
	
	 var rowNumber = event.target.classList[1];
    event.target.innerHTML = rowNumber;
	 event.target.style.backgroundColor = "blue";
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
    if (innerHTML === "100" || 
       innerHTML === "200" ||
       innerHTML === "300" ||
       innerHTML === "400" ||
       innerHTML === "500" || 
       innerHTML === "1") {
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
        event.target.innerHTML = 'MATH'
    }
    else if (innerHTML === '<!--2-->') {
        event.target.innerHTML = 'SCIENCE'
    }
    else if (innerHTML === '<!--3-->') {
        event.target.innerHTML = 'WORLD STUDIES'
    }
    else if (innerHTML === '<!--4-->') {
        event.target.innerHTML = 'ENGLISH'
    }
    else if (innerHTML === '<!--5-->') {
        event.target.innerHTML = "ART & MUSIC";
    }
    else if (innerHTML === '<!--6-->') {
        event.target.innerHTML = "COMMON KNOWLEDGE"
    }    
    
    event.target.style.backgroundColor = "#003333";

    return;
}

function getQuestionText(id) {

    const questions = {
        
        // category 1 Math

        '00': "This is the only even prime number.",
        '10': "Of trillion, centillion, and quintillion, this number is the largest.",
        '20': "This is 16 percent of 25.",
        '30': "The ratio of Jenny's trophies to Mia's trophies is 7:4. Jenny has 28 trophies. Mia has this many trophies.",
        '40': "Your mom is at the market. She bought 22kg of fish and 24kg of chicken. You ate 4kg of chicken and 12kg of fish. This many kilograms was left of the two foods combined.",
                
        // category 2 Science

        '01': "This is the largest organ in the human body.",
        '11': "In eukaryotic cells, the citric acid cycle, also known as the Krebs cycle, takes place in this double-membrane bound organelle, discovered in 1857.",
        '21': "At this temperature, Celsius and Fahrenheit degrees are the same value.",
        '31': "This first-person shooter video game developed by Valve and published for Microsoft Windows in 1998 launched a globally successful franchise. The game shares its name with a scientific term frequently used in nuclear physics to describe the instability of atoms.",
        '41': "The visible phenomenon of fire is the product of a combustion reaction, in which a fuel and an oxidant react to release heat, in addition to these two compounds in gaseous form.",

        // category 3 World studies

        '02': "This is the smallest country in the world in area.",
        '12': "Austria declared war on this country, which triggered World War I.",
        '22': 'This conqueror' +"'" + 's name translates to "Emperor of all".',
        '32': "This country issued the world's first paper money, around the year 1024.",
        '42': "In 1893, this country was the first to give women the right to vote.",

        // category 4 English

        '03': 'The line "To be or not to be" comes from this play by Shakespeare.',
        '13': 'Of the words in this sentence, this one is the adverb: "The old bridge was badly rusted."',
        '23': "This is the most commonly used letter of the alphabet in the English language.",
        '33': '"Old news" is an example of one of these, a figure of speech that contains contradictory meanings.',
        '43': "This man, who died in the year 1400, is considered the father of English literature.",

        // category 5 Art and Music

        '04': "This classical composer, who wrote <I>Moonlight Sonata</I>, was famously deaf.",
        '14': "This 20th century Mexican artist, who painted <I>The Wounded Deer</I>, contracted polio as a child.",
        '24': "Painter Vincent Van Gogh sold this many paintings in his lifetime.",
        '34': "Of the four Beatles, this one had dyslexia.",
        '44': "This musical instrument, invented in 1928, is played by moving one's hands through electromagnetic fields and not actually touching it.",


        // category 6 Common Knowledge

        '05': "This event first took place on January 15, 1967 in Los Angeles, California.",
        '15': "The captain of this ill-fated ship was named Edward Smith.",
        '25': "This is the smallest breed of dog.",
        '35': "Appearing on a white background, these are the five colors of the rings on the Olympic flag.",
        '45': "This was the first name of the man who designed the Eiffel Tower.",

        // Empty example

        //'01': "",
        //'11': "",
        //'21': "",
        //'31': "",
        //'41': "",

    };

    return questions[id];
}
