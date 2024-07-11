(function(){
    document.querySelector("form").addEventListener("submit", handleEnrollmentForm);

    function handleEnrollmentForm(event){
        event.preventDefault();
        let isFormvalid = true;
        const form = event.target;
        const data = {
            fullName: form.fullName.value,
            email: form.email.value,
            mobile: form.mobile.value,
            address: form.address.value,
            education: form.education.value,
            college: form.college.value,
            courses: form.courses.value,
            date: form.date.value,
            timeTable: form.timeTable.value,
            fee: form.fee.value
        }

        console.log({data})
        console.log('Form Submitted!');

        if(!data.fullName){
            isFormvalid = false;
            document.querySelector("#fullName_error").textContent = "Full Name is Required!";
        }
        else{
            document.querySelector("#fullName_error").textContent = "";
        }

        if(!data.email){
            isFormvalid = false;
            document.querySelector("#email_error").textContent = "Email is Required!";
        }
        else{
            document.querySelector("#email_error").textContent = "";
        }

        if(!data.mobile){
            isFormvalid = false;
            document.querySelector("#mobile_error").textContent = "Mobile  is Required!";
        }
        else{
            document.querySelector("#mobile_error").textContent = "";
        }
        
        if(!data.education){
            isFormvalid = false;
            document.querySelector("#education_error").textContent = "Education is Required!";
        }
        else{
            document.querySelector("#education_error").textContent = "";
        }
        if(!data.college){
            isFormvalid = false;
            document.querySelector("#college_error").textContent = "college is Required!";
        }
        else{
            document.querySelector("#college_error").textContent = "";
        }
        if(!data.courses){
            isFormvalid = false;
            document.querySelector("#fcoursesullName_error").textContent = "courses is Required!";
        }
        else{
            document.querySelector("#courses_error").textContent = "";
        }
        if(!data.date){
            isFormvalid = false;
            document.querySelector("#date_error").textContent = "Enrolment date is Required!";
        }
        else{
            document.querySelector("#date_error").textContent = "";
        }
        if(!data.timeTable){
            isFormvalid = false;
            document.querySelector("#timeTable_error").textContent = "TimeTable is Required!";
        }
        else{
            document.querySelector("#timeTable_error").textContent = "";
        }
       
        if(isFormvalid) {
            
            //handle your form to the server
            form.reset();
        }
    }
})();