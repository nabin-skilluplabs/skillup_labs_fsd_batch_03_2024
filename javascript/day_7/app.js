(function() {
    document.querySelector("form").addEventListener("submit", handleEnrollmentForm);

    function handleEnrollmentForm(event) {
        event.preventDefault();
        let isFormValid = true;
        const form = event.target;
        const data = {
            fullName: form.fullName.value,
            email: form.email.value,
            mobile: form.mobile.value,
            address: form.address.value,
            education: form.education.value,
            college: form.college.value,
            course: form.course.value,
            enrollmentDate: form.enrollmentDate.value,
            courseFee:  form.courseFee.value,
            ClassTime: form.ClassTime.value
        }
        console.log({data})

        console.log('Form Submitted!');
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

        if(!data.mobile) {
            isFormValid = false;
            document.querySelector("#mobile_error").textContent = "Mobile is required!";
        }
        else {
            document.querySelector("#mobile_error").textContent = "";
        }

        if(!data.ClassTime) {
            isFormValid = false;
            document.querySelector("#ClassTime_error").textContent = "Class Time is required!";
        }
        else {
            document.querySelector("#ClassTime_error").textContent = "";
        }

        if(!data.college) {
            isFormValid = false;
            document.querySelector("#college_error").textContent = "College is required!";
        }
        else {
            document.querySelector("#college_error").textContent = "";
        }
        if(!data.course) {
            isFormValid = false;
            document.querySelector("#course_error").textContent = "Course is required!";
        }
        else {
            document.querySelector("#course_error").textContent = "";
        }





        if(isFormValid){
            form.reset();
        }
    }


})();