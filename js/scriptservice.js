// Services page add services
let servicesData = [
    {
        id: 1,
        serviceImage: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/217962001_1008829033025438_6406558705816845684_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=beTfQCvR-HEAX-UcisU&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT-c5fOm2OGT1OaVzSDhOqiz0ifB1_dQyYVWpnr8Ja8BJw&oe=62859752',
        title: 'Georgian Memory',
        description: 'Georgian brand Georgian Memory, created in 2018. The main line of the brand is Georgian themed scarves. The illustrations on the products tell a small fragment about the history, culture and traditions of Georgia, the products with their packaging are an interesting and memorable souvenir for foreign guests,',
        serviceUrl:'https://www.google.com/'
    },
    {
        id: 2,
        serviceImage: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/241978051_499793074592269_6933785327524383123_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=43UGsW1LLQUAX8ferQM&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT8pS4Az6KbWluxWdRXFUxPOgW9sQw_WxqrGpc_vIsMtrg&oe=6285CF36',
        title: 'Nysa Studio',
        description: 'Nisa is a personalized and unique furniture and decor creator brand for interior and exterior interiors. By working with innovative materials (epoxy) they create completely different, creative items or furniture and at the same time give the customer the opportunity to give their old or standard furniture a new aesthetics and life.',
        serviceUrl:'https://www.google.com/'
    },
    {
        id: 3,
        serviceImage: '',
        title: 'AAAA',
        description: '',
        serviceUrl:'https://www.google.com/'
    },
    {
        id: 4,
        serviceImage: '',
        title: 'BBBB',
        description: '',
        serviceUrl:'https://www.google.com/'
    },
    ];

let servicesBlock = document.getElementById('services-block');
let serviceCard = document.getElementById('serviceCard');
let serviceContent = document.getElementById('serviceContent');
let serviceFromBlock =document.getElementById('serviceForm-block');
let serviceClose = document.getElementById('close-service');
let serviceForm = document.getElementById('serviceForm');
let addServiceForm = document.getElementById('add-service-form');
let closeForm = document.getElementById('close-form');


servicesData.forEach(element => {
    createServiceBox(element);
});


function createServiceBox(item){
    let serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service-div');
    serviceDiv.setAttribute('data-id', item.id);

    let h2ServiceTag = document.createElement('h2');
    h2ServiceTag.classList.add('service-title');
    h2ServiceTag.textContent =item.title;

    let pServiceTag = document.createElement('p');
    pServiceTag.classList.add('service-describe');
    pServiceTag.textContent = item.description;

    let serviceImgTag = document.createElement('img');
    serviceImgTag.setAttribute('src', item.serviceImage);
    serviceImgTag.setAttribute('alt', item.id);
    serviceImgTag.classList.add('service-img');

    let serviceViewButton = document.createElement('button');
    serviceViewButton.classList.add('view-service-button');
    serviceViewButton.textContent = 'View service';
    serviceViewButton.setAttribute('data-id', item.id);

    serviceViewButton.addEventListener('click', function(event){
        serviceContent.innerHTML = '';
        let id = event.target.getAttribute('data-id');
        openServiceCard(id);
    });


    serviceDiv.appendChild(serviceImgTag);
    serviceDiv.appendChild(h2ServiceTag);
    serviceDiv.appendChild(pServiceTag);
    serviceDiv.appendChild(serviceViewButton);
    servicesBlock.appendChild(serviceDiv);
}

function openServiceCard(id){
    serviceCard.classList.add('active-post');
    // let num = servicesData[id]; 
    serviceCardInfo(id);
}


// function openServiceCard(id){
//     serviceCard.classList.add('active-post');
//     // let url = servicesData${id};
// }

function serviceCardInfo(item){
    let titleService = document.createElement('h2');
    titleService.classList.add('service-title');
    titleService.innerText = item.title;
    let descriptionService = document.createElement('p');
    descriptionService.classList.add('service-description');
    descriptionService.innerText = item.body;

    serviceContent.appendChild(titleService);
    serviceContent.appendChild(descriptionService);
    serviceCard.appendChild(serviceContent);

    serviceClose.addEventListener('click', function(){
        serviceCard.classList.remove('active-post');
        serviceContent.innerHTML = '';
    });
}

addServiceForm.addEventListener('click', function(){
    serviceFromBlock.classList.add('active-post');
});

closeForm.addEventListener('click', function(){
    serviceFromBlock.classList.remove('active-post');
    // serviceContent.innerHTML = '';
});













