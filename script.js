function valid() {
    var sbmt = document.myForm.sbmt.value;

    if (document.myForm.email.value=="") {
        document.myForm.email.focus();
        alert("please enter your Email");        
        return false;
    }
    if (document.myForm.pcode.value=="") {
        document.myForm.pcode.focus();
        alert("please enter your Password");
        return false;
    }
    
    return (true);
}

