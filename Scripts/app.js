// Custom JS scripts

(function(){
    "use strict";
    console.log("App Started . . .");

    // Function for inserting bio information to the About Me page.
    function insertBio(){
        console.log("Inside insertBio function.");
        var bioContent;
        bioContent = document.getElementById("bio");
        bioContent.innerHTML = "<p>I was born in beautiful Barrie, Ontario, and left at a young age to explore the U.S. of A. In my fifteen years there, I lived in Oregon,  North Carolina, and the U.P. of Michigan. Since 2000, I have been back in Ontario.</p><p>I have held many jobs in my life, starting with the distinguished trade of horse-stall cleaner when I was 15. There have been construction jobs, food-service jobs, retail, and administrative jobs. I have finally found what I consider to be a career path that will truly interest and challenge me: WEB DEVELOPMENT.</p><p>I really enjoy that development for the world-wide web can be both technical and creative at the same time. I truly enjoy solving problems, and that is what development is all about. There is also team work and independent work. Web development is a flexible career path that requires a flexible participant. For someone who is curious and enjoys learning like I do, this is ideal.</p>";
    }


    // Call replaceFirstParagraph function defined above.
    insertBio();

})();