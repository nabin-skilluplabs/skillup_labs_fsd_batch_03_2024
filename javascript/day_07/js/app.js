(function() {
    console.log(1)
    document.querySelector("form").addEventListener("submit", handleEnrolmentForm);
    function handleEnrolmentForm(event){
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
            date: form.date.value,
            timeTable: form.timeTable.value,
            courseFee: form.courseFee.value


        }
    
        console.log({data})
        console.log('Form submitted!');
        if(!data.fullName) {
            isFormValid = false;
            document.querySelector('#fullName_error').textContent = "Full name is required!";

        }

        else {
            document.querySelector('#fullName_error').textContent = "";

        }
        if(!data.email) {
            isFormValid = false;
            document.querySelector('#email_error').textContent = "Email is required!";

        }
        else {
            document.querySelector('#email_error').textContent = "";

        }
        if(!data.mobile) {
            isFormValid = false;
            document.querySelector('#mobile_error').textContent = "mobile is required!";

        }
        else {
            document.querySelector('#mobile_error').textContent = "";

        }
        if(!data.address) {
            isFormValid = false;
            document.querySelector('#address_error').textContent = "address is required!";

        }
        else {
            document.querySelector('#address_error').textContent = "";

        }
        if(!data.college) {
            isFormValid = false;
            document.querySelector('#college_error').textContent = "mobile is required!";

        }
        else {
            document.querySelector('#college_error').textContent = "";

        }
        if(!data.date) {
            isFormValid = false;
            document.querySelector('#date_error').textContent = " date is required!";

        }
        else {
            document.querySelector('#date_error').textContent = "";

        }
        if(!data.timeTable) {
            isFormValid = false;
            document.querySelector('#timeTable_error').textContent = "timeTable is required!";

        }
        else {
            document.querySelector('#timeTable_error').textContent = "";

        }

        if(isFormValid){
            form.reset();
        }
    }


    })();