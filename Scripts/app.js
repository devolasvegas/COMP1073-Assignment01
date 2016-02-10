/**
 * Created by devon on 2016-02-04.
 */

"use strict";

// Set up your IIFE (Immediately Invoked Function Expression) or ASEF (Anonymous Self-Executing Function)
(function(){
    "use strict";
    console.log("App Started . . .");

    // named function
    function insertBio(){
        console.log("Inside insertBio function.");
        var bioParagraph;
        bioParagraph = document.getElementById("bio");
        bioParagraph.innerHTML = "My New Paragraph Data";
    }


    // Call replaceFirstParagraph function defined above.
    insertBio();

})();