
function openQuestion(event) {

    var questionText;
    
    questionText = getQuestionText('00');

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
    }, 0);

    return;
}

function blankOut(event) {
    event.target.innerHTML = "<NOBR>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </NOBR>";
    //event.target.style.backgroundColor = "darkblue";
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
    if (innerHTML !== "100") {      //CHANGED THIS LINE SO ANYTHING
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
    
}

function getQuestionText(id) {

    const questions = {
        
        // category 1 Math

        '00': "This famous television actress grew up in Roseville, Minnesota and graduated from Alexander Ramsey High School, today's RAHS, in 1963."
        // Empty example

        //'01': "",
        //'11': "",
        //'21': "",
        //'31': "",
        //'41': "",

    };

    return questions[id];
}
