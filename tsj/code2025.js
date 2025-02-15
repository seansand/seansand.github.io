
function openQuestion(event) {

    const id = event.target.id;
    const questionText = getQuestionText(id);

    event.target.innerHTML = '<FONT SIZE=-5>' + questionText + '</FONT>';

    var SimpleLightbox = window.SimpleLightbox;

    var questionDiv = '';
    questionDiv += '<div class="contentInPopup">';
    questionDiv += '<table><tr><td class="questiontext">';
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
    event.target.style.backgroundColor = "darkblue";
    return;
}

function revertToInit(event) {
    event.target.innerHTML = "1";
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
        event.target.innerHTML = 'GEOGRAPHY'
    }
    else if (innerHTML === '<!--2-->') {
        event.target.innerHTML = 'ATHLETES'
    }
    else if (innerHTML === '<!--3-->') {
        event.target.innerHTML = 'SPECIAL DAYS'
    }
    else if (innerHTML === '<!--4-->') {
        event.target.innerHTML = 'SCIENCE'
    }
    else if (innerHTML === '<!--5-->') {
        event.target.innerHTML = "WINGMEN";
    }
    else if (innerHTML === '<!--6-->') {
        event.target.innerHTML = "THAT'S WHAT SHE SAID"
    }    
    
    event.target.style.backgroundColor = "#003333";

    return;
}

function getQuestionText(id) {

    const questions = {
        
        // category 1 GEOGRAPHY

        '00': "This U.S. state is, perhaps surprisingly, the one geographically closest to Africa.",
        '10': "This southernmost point of South America was not named for its shape; that's a coincidence. It was actually named for its Dutch discoverer's home town.",
        '20': "Radar soundings have shown that this continent actually is an archipelago, not how it's represented on maps. Given its location, it's just hard to tell.",
        '30': "The Nile is longer in length, but by any other measure, this river is the most massive in the world, discharging more than than 200,000 cubic meters per second, greater than the next seven largest rivers combined.",
        '40': "This tiny principality between Switzerland and Austria was accidentally invaded in 2007 by 171 Swiss soldiers who got lost in the rain. Fortunately they realized their mistake, marched home, and everything was cool.",
                
        // category 2 ATHLETES

        '01': 'When asked how fast this man could run a mile, his agent admitted that he never actually has run a mile. This Jamaican sprinter, "the fastest man in the world", is known for running much shorter distances.',
        '11': "Rick Ankiel and Shohei Otani are two of the three Major League baseball players to win ten games as a pitcher and also hit 70 home runs. The other player is this man, who retired in 1935.",
        '21': 'This center played 20 seasons in the NBA for the Milwaukee Bucks and L.A. Lakers, winning six NBA championships and NBA Finals MVP twice. But more importantly, he played co-pilot Roger Murdock in the 1980 movie "Airplane!"',
        '31': "According to a BBC poll, Sir Donald Bradman of Australia, Sachin Tendulkar of India, and Sir Garfield Sobers of the West Indies are among the greatest players ever of this sport.",
        '41': "Becky Sauerbrunn was captain and Abby Wamback was top scorer of this country's team, which are the current champions of the FIFA Women's World Cup.",

        // category 3 SPECIAL DAYS

        '02': "The first Sunday following the first full moon that occurs on or after the vernal equinox.",
        '12': "This man was assassinated in 44 BCE, famously on the 15th of March.",
        '22': 'On March 7th, 1815, this man met a battalion of troops sent to capture him. He shouted "Soldiers! Here is your emperor!" and most of the battalion promptly changed sides to join him.',
        '32': "This event took place on January 15, 1967 in Los Angeles, California.  There have been fifty-four more after that.",
        '42': "The Medes and the Lydians fought a battle on May 28, 585 BCE, the very earliest event that historians know the exact day of, due to this astronomical event, which the two sides took as a sign and wrote up a hasty peace treaty.",

        // category 4 SCIENCE

        '03': "It is the 46th brightest star in the night sky. However, it's one of the easiest to identify because it always appears in the same location, at least in the northern hemisphere.",
        '13': "Costing 62.5 trillion dollars per gram, it is by far the most expensive substance on Earth. It can only be generated by particle accelerators and in theory could be used as fuel for future spacecraft.",
        '23': "The reason this insect's lifecycle is a prime number is to avoid predation from insects with other yearly cycles. The 2021 brood will next appear in the year 2038.",
        '33': "Organic gemstones are those that originate from living creatures. Jet comes from coal, amber comes from pine resin, and two come from sea creatures. One is coral, and the other is this.",
        '43': "It's the Japanese name for the Pleiades star cluster, which appears prominently in the automaker's brand logo with the same name.",

        // category 5 WINGMEN

        '04': "Played by Anthony Mackie, this character is the new Captain America in the Marvel Cinematic Universe.",
        '14': "He is both literally and figuratively Sheriff Woody's wingman in the Toy Story franchise.",
        '24': "Superhero Warren Worthington III, also known as Angel, was a founding member of this Marvel Comics group.",
        '34': "First appearing in Flash Comics #1 in 1940, his real name is Carter Hall and is the Justice League representative for this category.",
        '44': "In Greek mythology, he was the son of the master craftsman Daedalus. His escape attempt from Crete failed because he flew too close to the sun, melting the wax holding his wings together.",

        // category 6 THAT'S WHAT SHE SAID

        '05': 'This U.S. woman, who first gained national prominence in 1955, said, "All I was doing was trying to get home from work."',
        '15': 'This world leader said, "In politics, if you want anything said, ask a man. If you want anything done, ask a woman."',
        '25': 'This scientist said, "I am one of those who think like Nobel, that humanity will draw more good than evil from new discoveries."',
        '35': 'This patron saint of France said, "One life is all we have and we live it as we believe in living it. But to sacrifice what you are and to live without belief, that is a fate more terrible than dying."',
        '45': "She said, " + '"' + "Some guy said to me: 'Don't you think you're too old to sing rock n' roll?' I said: 'You'd better check with Mick Jagger.'" + '"'

        // Empty example

        //'01': "",
        //'11': "",
        //'21': "",
        //'31': "",
        //'41': "",

    };

    return questions[id];
}
