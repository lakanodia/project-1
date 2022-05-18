// Services page add services
// let serviceCard = document.getElementById('serviceCard');
// let serviceContent = document.getElementById('serviceContent');
let serviceFromBlock =document.getElementById('serviceForm-block');
// let serviceClose = document.getElementById('close-service');

let serviceForm = document.getElementById('serviceForm');
let addServiceForm = document.getElementById('add-service-form');

let closeForm = document.getElementById('close-form');

// //////////

let closeServiceButton = document.querySelector('.close-service-button');
let saveServiceButton = document.querySelector('.save-service-button');
let servicesBlock = document.querySelector('.services-block');
let deleteServiceButton = document.querySelector('.delete-service-button');
let serviceDiv = document.querySelector('.service-div');

let titleInput = document.querySelector('.titleInput');
let descriptionInput = document.querySelector('.descriptionInput');
let imgInput = document.querySelector('.imgInput');

addServiceForm.addEventListener('click', function(){
    serviceFromBlock.classList.add('active-post'); 
});

closeForm.addEventListener('click', function(event){
    event.preventDefault();
    serviceFromBlock.classList.remove('active-post');
});
closeServiceButton.addEventListener('click', function(event){
    event.preventDefault();
    serviceFromBlock.classList.remove('active-post');
});
// სწორად არის დასაწერი!!!!!!!!!

deleteServiceButton.addEventListener('click', function(){
    serviceDiv.style.display = "none";
})


    // let X = document.querySelectorAll('.p-tag');
// ყველას გადაუარა და ჩასვა ლიკა და ლაკა
// X.forEach(function(Y){
//     let newText = document.createElement('a');
//     newText.classList.add('text');
//     newText.textContent = 'Laka And Lika'
//     Y.appendChild(newText);
// })


saveServiceButton.addEventListener('click', addNewPost);

function addNewPost(event){
    event.preventDefault();
    let serviceDivElement = document.createElement('div');
    serviceDivElement.classList.add('service-div');
    //3.ატვირთული ფოტო
    let inputImgvalue = imgInput.value;

    // //2. დავამატოთ ეს ფოტო იმგ ტეგში
    let serviceImage = document.createElement('img');
    serviceImage.classList.add('service-img');
    serviceImage.setAttribute('src', inputImgvalue);

    //1. დავამატოთ ეს ჩაწერილი ტექსტი h2 ტეგებში
    let serviceTitle = document.createElement('h2');
    serviceTitle.classList.add('service-title');
    serviceTitle.textContent = titleInput.value;

    //2. დავამატოთ ეს ჩაწერილი ტექსტი p ტეგებში
    let serviceDescription = document.createElement('p');
    serviceDescription.classList.add('service-describe');
    serviceDescription.textContent = descriptionInput.value;
    
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
    
    //3. ჩაწერის შემდეგ უნდა გასუფთავდეს
    titleInput.value = '';
    descriptionInput.value = '';
    serviceFromBlock.classList.remove('active-post'); 
}


