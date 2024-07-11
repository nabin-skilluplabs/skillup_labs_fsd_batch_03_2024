(function(){
    console.log("Hello!");
    document.querySelector("form").addEventListener("submit", handleEnrollmentForm);

    function handleEnrollmentForm(event){
        event.preventDefault();

        console.log('Form Submitted!');
    }
})();