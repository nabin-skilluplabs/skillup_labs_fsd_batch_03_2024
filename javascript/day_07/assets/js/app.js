(function() {
    document.querySelector("form").addEventListener("submit", handleEnrollmentForm);

    function handleEnrollmentForm(event){
        event.preventDefault();
        let isFormValid = true;
        const form = event.target;
        const data = {
            fullName: form.fullName.value,
            email: form.email.value,
            mobile: form.mobile.value,
            address: form.address.value,
            education: form.education.value,
            collegeUniversity: form.collegeUniversity.value,
            course: form.course.value,
            enrollmentDate: form.enrollmentDate.value,
            classTimeTable: form.classTimeTable.value,
            courseFee: form.courseFee.value
        }
       
        console.log('Form submitted!');

        if(!data.fullName) {
            isFormValid = false;
            document.querySelector("#fullName_error").textContent = "Full name is required!";
        }
        else {
            document.querySelector("#fullName_error").textContent = "";
        }

        if(!data.email) {
            isFormValid = false;
            document.querySelector("#email_error").textContent = "Email is required!";
        }
        else {
            document.querySelector("#email_error").textContent = "";
        }



        if(isFormValid) {
            // handle your form to server here
            form.reset();
        }   
        
    }
})();