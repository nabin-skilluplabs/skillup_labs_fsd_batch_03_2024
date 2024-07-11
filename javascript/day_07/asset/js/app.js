(function(){

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
            collegeUniversity:form.collegeUniversity.value,
            course: form.course.value,
            enrollmentDate: form.enrollmentDate.value,
            classTimeTable: form.classTimeTable.value,
            courseFee: form.courseFee.value
        }

        console.log({data});
        if (!data.fullName){
            isFormValid = false;
            document.querySelector("#fullNAme_error").textContent = "Fullname is required!";
        }
        else{
            document.querySelector("#fullName_error").textContent = "";
        }

        if (!data.email){
            isFormValid = false;
            document.querySelector("#email_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#email_error").textContent = "";
        }
        if (!data.mobile){
            isFormValid = false;
            document.querySelector("#mobile_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#mobile_error").textContent = "";
        }
        if (!data.course){
            isFormValid = false;
            document.querySelector("#course_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#course_error").textContent = "";
        }

        if (!data.education){
            isFormValid = false;
            document.querySelector("#education_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#education_error").textContent = "";
        }
        if (!data.collegeUniversity){
            isFormValid = false;
            document.querySelector("#collegeUniversity_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#collegeUniversity_error").textContent = "";
        }
        if (!data.enrollmentDate){
            isFormValid = false;
            document.querySelector("#enrollmentDate_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#enrollmentDate_error").textContent = "";
        }
        if (!data.classTimeTable){
            isFormValid = false;
            document.querySelector("#classTimeTable_error").textContent = " Field is empty!";
        }
        else{
            document.querySelector("#classTimeTable_error").textContent = "";
        }

        if(isFormValid){
            form.reset();
        }
        
    }
})();