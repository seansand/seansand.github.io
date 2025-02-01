
function openQuestion(event) {

    const id = event.target.id;
    var dailyDoubleFlag = false;
    var questionText;
    
    // Give this a nonexistent id if you want no daily double
    if (id === '33') {
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
        event.target.innerHTML = 'GEOGRAPHY'
    }
    else if (innerHTML === '<!--2-->') {
        event.target.innerHTML = 'SPORTS'
    }
    else if (innerHTML === '<!--3-->') {
        event.target.innerHTML = 'FAMOUS PEOPLE'
    }
    else if (innerHTML === '<!--4-->') {
        event.target.innerHTML = 'MINNESOTA'
    }
    else if (innerHTML === '<!--5-->') {
        event.target.innerHTML = "SCIENCE";
    }
    else if (innerHTML === '<!--6-->') {
        event.target.innerHTML = "MOVIES"
    }    
    
    event.target.style.backgroundColor = "#003333";

    return;
}

function getQuestionText(id) {

    const questions = {
        
        // category 1 GEOGRAPHY

        '00': "This is the only continent that doesn't have an active volcano.",
        '10': "The Nile is longer in length, but by any other measure, this river is the most massive in the world, discharging more than than 200,000 cubic meters per second, greater than the next seven largest rivers combined.",
        '20': "This U.S. state is, perhaps surprisingly, the one geographically closest to Africa.",
        '30': "This African nation boasts more pyramids than Egypt, though they're often smaller and steeper.",
        '40': "This tiny principality between Switzerland and Austria was accidentally invaded in 2007 by 171 Swiss soldiers who got lost in the rain. Fortunately they realized their mistake, marched home, and everything was cool.",
                
        // category 2 SPORTS

        '01': 'When asked how fast this man could run a mile, his agent admitted that he never actually has run a mile. This Jamaican sprinter, "the fastest man in the world", is known for running much shorter distances.',
        '11': "This sport was conceived by physical education instructor James Naismith in 1891 as a less injury-prone alternative to football. It quickly gained popularity and has become a global phenomenon.",
        '21': "Canada has two national sports, both played with sticks. The national winter sport is ice hockey and the national summer sport is this.",
        '31': "Still played today, evidence from cave paintings and artifacts suggests its roots stretch back to prehistoric times, making this one-on-one sport the oldest form of organized athletic competition.",
        '41': "According to a BBC poll, Sir Donald Bradman of Australia, Sachin Tendulkar of India, and Sir Garfield Sobers of the West Indies are among the greatest players ever of this sport.",

        // category 3 FAMOUS PEOPLE

        '02': "This U.S. President, while in office, was the first to appear on television, though it was a very different medium than we know today.",
        '12': 'On March 7th, 1815, this man met a battalion of troops sent to capture him. He shouted "Soldiers! Here is your emperor!" and most of the battalion promptly changed sides to join him.',
        '22': 'This scientist who worked with radioactivity, expressed optimism about the future of scientific discovery, stating, "I am one of those who think like Nobel, that humanity will draw more good than evil from new discoveries.',
        '32': 'Now also a prominent fashion icon, her first acting role was as Rocky Blue in the Disney Channel sitcom "Shake It Up" which premiered in 2010.',
        '42': 'This author is known for young adult novels such as "The Fault in Our Stars" and "Looking for Alaska," often featuring witty dialogue and thoughtful explorations of life and death.',

        // category 4 MINNESOTA

        '03': "Their first game was played on October 6, 2000.",
        '13': "This was the Minnesotan who made the first-ever non-stop solo flight across the Atlantic Ocean.",
        '23': "This Minnesota native won the Nobel Prize in Literature in 2016, and is considered one of the most influential musicians of the 20th century.",
        '33': "A large statue of this Norwegian explorer stands in Duluth's Rose Garden.",
        '43': "According to Ojibwe legend, this Minnesota lake, the largest wholly contained within the state, got its name after a wounded moose, thought to be an evil spirit, plunged into it.",

        // category 5 SCIENCE

        '04': "It's the Japanese name for the Pleiades star cluster, which appears prominently in the automaker's brand logo with the same name.",
        '14': "The reason this insect's lifecycle is a prime number is to avoid predation from insects with other yearly cycles. The 2021 brood will next appear in the year 2038.",
        '24': "Organic gemstones are those that originate from living creatures. Jet comes from coal, amber comes from pine resin, and two come from sea creatures. One is coral, and the other is this.",
        '34': "The Medes and the Lydians fought a battle on May 28, 585 BCE, the very earliest event that historians know the exact day of due to this astronomical event, which the two sides took as a sign and wrote up a hasty peace treaty.",
        '44': "Costing 62.5 trillion dollars per gram, it is by far the most expensive substance on Earth. It can only be generated by particle accelerators and in theory could be used as fuel for future spacecraft.",

        // category 6 MOVIES

        '05': "This 1986 film, directed by John Hughes, tells the story of a high school student who feigns sickness to avoid school.",
        '15': "This 2023 motion picture reportedly caused a global shortage of a specific shade of paint due to its extensive use in creating the movie's vibrant, fantastical world.",
        '25': "This 1939 musical fantasy, famous for its Technicolor visuals and memorable songs, was a box office success but lost the Best Picture Oscar to a historical epic.",
        '35': "Of the live-action Disney remakes of animated features, this was the first to get a PG-13 rating.",
        '45': "This film from 2002 is the highest-grossing romantic comedy movie to date. It spawned two less successful sequels and a TV series that lasted just seven episodes.",

        // Empty example

        //'01': "",
        //'11': "",
        //'21': "",
        //'31': "",
        //'41': "",

    };

    return questions[id];
}
