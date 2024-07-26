(function(){
document.querySelector("form").addEventListener("submit",handleEnrollmentForm);
function handleEnrollmentForm(event){
    event.preventDefault();
    const form = event.target;
    let isFormValid = true;

    const data = {
        fullName: form.fullName.value,
        email: form.email.value,
        mobile: form.mobile.value,
        address: form.address.value,
        education: form.education.value,
        collegeUniversity: form.institute.value,
        course: form.course.value,
        enrollmentDate: form.enrollmentDate.value,
        timeTable: form.timeTable.value,
        courseFee: form.fee.value
    }
    console.log('Form Submitted!');
    
    if(!data.fullName){
        isFormValid = false;
        document.querySelector("#nameError").textContent = "! This field is empty";
    }
    else{
        document.querySelector("#nameError").textContent =""
    }
    if(!data.email){
        isFormValid = false;
        document.querySelector("#emailError").textContent = "! This field is empty";
    }
    else{
        document.querySelector("#emailError").textContent =""
    }
    if(!data.mobile){
        isFormValid = false;
        document.querySelector("#mobileError").textContent = "! This field is empty";
    }
    else{
        document.querySelector("#mobileError").textContent =""
    }
    if(!data.education){
        isFormValid = false;
        document.querySelector("#eduError").textContent = "! This field is empty";
    }
    else{
        document.querySelector("#eduError").textContent =""
    }
    if(!data.collegeUniversity){
        isFormValid = false;
        document.querySelector("#uniError").textContent = "! This field is empty";
    }
    else{
        document.querySelector("#uniError").textContent =""
    }
    if(!data.course){
        isFormValid = false;
        document.querySelector("#courseError").textContent = "! This field is empty";
    }
    else{
        document.querySelector("#courseError").textContent =""
    }
    if(!data.enrollmentDate){
        isFormValid = false;
        document.querySelector("#dateError").textContent = "! This field is empty";
    }
    else{
        
        document.querySelector("#dateError").textContent =""
    }
    if (isFormValid){
        // handle your form to server here
        console.log({data});
        form.reset()
        
    }
    
}
})();