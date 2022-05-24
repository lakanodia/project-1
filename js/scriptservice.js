let serviceFromBlock =document.querySelector('#service-form-block');
let addServiceForm = document.querySelector('#add-service-icon');
let closeForm = document.querySelector('#close-form');
let closeServiceButton = document.querySelector('#close-service-button');
let saveServiceButton = document.querySelector('#save-service-button');
let servicesBlock = document.querySelector('#services-block');

let titleInput = document.querySelector('#service-title');
let descriptionInput = document.querySelector('#service-description');
let imgInput = document.querySelector('#img-input');

addServiceForm.addEventListener('click', function(){
    serviceFromBlock.classList.add('active-post'); 
});

closeForm.addEventListener('click', function(event){
    event.preventDefault();
    resetForm();
    serviceFromBlock.classList.remove('active-post');
});
closeServiceButton.addEventListener('click', function(event){
    event.preventDefault();
    resetForm();
    serviceFromBlock.classList.remove('active-post');
});

let deleteServiceButton1 = document.querySelector('#static-delete-button-1');
deleteServiceButton1.addEventListener('click', function(){
    document.querySelector('#service-div-1').remove();
});

let deleteServiceButton2 = document.querySelector('#static-delete-button-2');
deleteServiceButton2.addEventListener('click', function(){
    document.querySelector('#service-div-2').remove();
});

function addNewPost(){
    let serviceDivElement = document.createElement('div');
    serviceDivElement.classList.add('service-div');

    //add image on img tag
    let serviceImage = document.createElement('img');
    serviceImage.classList.add('service-img');
    serviceImage.setAttribute('src', `img/${imgInput.files[0].name}`);
  
    //add filled title on h2 tag
    let serviceTitle = document.createElement('h2');
    serviceTitle.classList.add('service-title');
    serviceTitle.textContent = titleInput.value;

    //add filled description on p tag
    let serviceDescription = document.createElement('p');
    serviceDescription.classList.add('service-describe');
    serviceDescription.textContent = descriptionInput.value;
    
    // add delete button on service card
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-service-button');
    deleteButton.textContent = 'Delete Service';
    deleteButton.addEventListener('click', function(){
        serviceDivElement.remove();
    })

    serviceDivElement.appendChild(serviceImage);
    serviceDivElement.appendChild(serviceTitle);
    serviceDivElement.appendChild(serviceDescription);
    serviceDivElement.appendChild(deleteButton);
    servicesBlock.appendChild(serviceDivElement);
    
    // after filling a form it would clear automatically
    resetForm();
    serviceFromBlock.classList.remove('active-post'); 
}
// this function resets a form
function resetForm() {
    titleInput.value = '';
    descriptionInput.value = '';
    imgInput.value = '';
    let checkBoxDiv = document.querySelector('#checkbox-main-div');
    checkBoxDiv.querySelectorAll('input[type="checkbox"]').forEach(element => {
        element.checked = false;
    });
    document.querySelectorAll('input[type="radio"]').forEach(element =>{
        element.checked = false;
    });
    let emailText = document.querySelector('#email');
    emailText.value ='';
    resetErrors();
}

// this function validates form
function validateForm() {
    let errors = {};
     // validation in the name of the service is a maximum of 25 characters
    let serviceTitle = document.querySelector('#service-title').value;
    if (serviceTitle.length>25 || serviceTitle==''){
        errors.serviceTitle = 'Title can not be empty and can not be more than 25 symbols';
    }

    // validation service description maximum  100 symbols  
    let serviceDescription = document.querySelector('#service-description').value;
    if (serviceDescription.length>100 || serviceDescription==''){
        errors.serviceDescription = 'Description can not be empty and can not be more than 100 symbols';
    }

    // validation at checkbox
    let isCheckBoxInputValid = false;
    let checkBoxDiv = document.querySelector('#checkbox-main-div');
    checkBoxDiv.querySelectorAll('input[type="checkbox"]').forEach(element => {
        if (element.checked){
            isCheckBoxInputValid= true;
        } 
    });
        if (isCheckBoxInputValid==false){
        errors.qualityChoise = 'Please Select';
    }
    // validation on radio
    let isRadioInputValid = false;
    document.querySelectorAll('input[type="radio"]').forEach(element => {
        if(element.checked){
            isRadioInputValid=true;
        }  
    });
    if (isRadioInputValid==false){
        errors.socialMedia = 'Please Select';
    }
    // validation on mail
    let mail = document.querySelector('#email').value;
    if (mail == ''){
        errors.email = 'Email can not be empty';
    }
    // validation on image size, image type and empty image input
    let files = imgInput.files
    if (files.length > 0) {
        let fileType = files[0].type;
        let fileSize = files[0].size;

        let maxFileSizeMb = 1000 * 1024;
        let supportedFileTypes = ['image/png','image/jpeg'];

        if(!supportedFileTypes.includes(fileType)){
            errors.myfile = 'Please select only jpg or png file type';
        }

        if (fileSize > maxFileSizeMb) {
            errors.myfile = 'Please select image size less than 1 MB';
        }
    }else{
        errors.myfile = 'Please select image';
    }
    return errors;
};

document.querySelector('#service-form').addEventListener('submit', onServiceFormSubmit);

// this function valisate form and if there are no mistakes adds it, after this reset error spans
function onServiceFormSubmit(event){
    event.preventDefault();
    let errors = validateForm();

    resetErrors();

    if(Object.keys(errors).length == 0){
        addNewPost();
    }else{
        displayErrors(errors);
    }
}

// this function resets error span texts after opening a service form
function resetErrors() {
    document.querySelectorAll('.span-error').forEach(item => {
        item.innerHTML = '';
    });
}

// this function collerct error texts
function displayErrors(errors) {
    for (let item in errors) {
        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }
}

// this function validate email in live
function validation() {
    let emailText = document.getElementById('email').value;
    let spanText = document.getElementById('error_email'); 
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailText.match(emailStructure)){
        spanText.innerHTML = 'Your email is valid';
        spanText.style.color = 'green';
    }else{
        spanText.innerHTML = 'Your email is not valid';
        spanText.style.color = 'red';
    }
}

// create burger bar
let navigation = document.getElementById('nav-block');
let burgerButton = document.getElementById('burger-bar');
let topChild = document.getElementById('top-child');
let middleChild = document.getElementById('middle-child');
let bottomChild = document.getElementById('bottom-child');

burgerButton.addEventListener('click', function(){
    navigation.classList.toggle('activeNavigation');
    topChild.classList.toggle('top');
    middleChild.classList.toggle('middle');
    bottomChild.classList.toggle('bottom');
});

// This is current date
function currentDate(){
    var today = new Date(); 
    var date = document.getElementById('current-date');
    date.innerHTML = today;
}
currentDate();