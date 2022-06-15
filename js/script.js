// Added slider, make slider array
let data = [
    {
        id: 1,
        imageUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/151013223_918985068676502_3849142729251772248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t1H9yehfxmsAX9Zbk85&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT9bcYQOZoNcdLYBkrv5OkifETxq6wYMhRq0XbAC9hIpog&oe=62CFE601',
        title: 'Georgian Memory',
        url:'https://www.facebook.com/georgianmemory'
    },
    {
        id: 2,
        imageUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/121087684_824501508124859_6983482670906501912_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xzyGiF-3r64AX-KHqv5&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT_icTgc7yQcl1z-hjBHYtMR7syY7gzs6Dg18ZLZEbCD_Q&oe=62CF90A3',
        title: 'Georgian Memory',
        url:'https://www.facebook.com/georgianmemory'
    },
    {
        id: 3,
        imageUrl: 'https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/107594425_755290885045922_642042310899406890_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=s-jDBtzu9zwAX_d-8pF&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT8CvLcTEXOsAVhwaD3kgULlSZ5UQNLqZ408kOYhaLAAmg&oe=62CF2D61',
        title: 'Georgian Memory',
        url:'https://www.facebook.com/georgianmemory'
    },
    
    {
        id: 4,
        imageUrl: 'https://i.etsystatic.com/20173918/r/il/fc6af1/2478790956/il_1140xN.2478790956_ezkj.jpg',
        title: 'Nysa Studio',
        url:'https://www.facebook.com/NysaStudioTbilisi'
    },
    {
        id: 5,
        imageUrl: 'https://www.epoxywood.uk/wp-content/uploads/2020/06/seascape-pin1.jpg',
        title: 'Nysa Studio',
        url:'https://www.facebook.com/NysaStudioTbilisi'
    },
    ];

let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let sliderContent = document.getElementById('slider-content');
let dotList = document.getElementsByClassName('dot');

let sliderIndex = 0;

// create a tag to append slider title
function createAtag(item){
    let aTag = document.createElement('a');
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('a-link');

    return aTag;
}

// create background image tag
function createImgTag(item){
    sliderContent.style.backgroundImage = 'url(' + item.imageUrl + ')';
    sliderContent.style.backgroundRepeat = "no-repeat";
    sliderContent.style.backgroundSize = "cover";
}

// create slider title tag
function createH2Tag(item){
    let h2Tag = document.createElement('h2');
    h2Tag.classList.add('h2-link');
    h2Tag.append(item.title);
    
    return h2Tag;
}

// this function will create as many dots as there are slides
// And when we press the point we have to move it to the corresponding slide
function createDots(){
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach(element => {
        let dot = document.createElement('div');
        dot.setAttribute('data-id', element.id-1);
        dot.classList.add('dot');

        dot.onclick = function(event){
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    });
    return dots;
}

// create active dots on slider
function activeDot(){
    dotList[sliderIndex].classList.add('active');
}
// create slider content and aooend all elements
function setSlider(){
    sliderContent.innerHTML = '';
    createImgTag(data[sliderIndex]);
    let tagA = createAtag(data[sliderIndex]);
    let tagH2 = createH2Tag(data[sliderIndex]);
    let dotsDiv = createDots();

    tagA.appendChild(tagH2);
    sliderContent.appendChild(tagA);
    sliderContent.appendChild(dotsDiv);
    activeDot();
}

// arrow
function rightArrowClick(){
    if(sliderIndex >= data.length-1){
        sliderIndex = 0;
        setSlider();
        return;
    }
    sliderIndex++;
    setSlider();
}

// arrow
function leftArrowClick(){
    if(sliderIndex <= 0){
        sliderIndex = data.length-1;
        setSlider();
        return;
    }
    sliderIndex--;
    setSlider();
}
leftArrow.addEventListener('click', leftArrowClick);
rightArrow.addEventListener('click', rightArrowClick);


setInterval(() => {
    rightArrowClick();
}, 4000);

setSlider();

// Added http request for posts json

let mainPostBlock = document.getElementById('main-post-block');
let postContent = document.getElementById('post-content');
let postCard = document.getElementById('post-card');
let postClose = document.getElementById('close');


function serverRequest(url,callBack){
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function(){
        let data = JSON.parse(request.responseText);
        callBack(data);
    })
    request.send();
};
// https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR0Soc4b2H9q4hysAcZHt5CXQ-ysYvYLHpg7vZiY0oWGqo9L5HRhTBeVB9s
serverRequest('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR0Soc4b2H9q4hysAcZHt5CXQ-ysYvYLHpg7vZiY0oWGqo9L5HRhTBeVB9s', function(data){
    printPosts(data)
});

function printPosts(data) {
    data.slice(0,6).forEach(element => {
        createPosts(element);             
    });
}

// post.setAttribute('data-id', item.id-1); setatributes ყველას დავუწერე -1
// this function brings posts from server, get id and title
function createPosts(item){
    let post = document.createElement('div');
    post.classList.add('post-div');
    post.setAttribute('data-id', item.id-1);
       
    let postTitle = document.createElement('h2');
    postTitle.classList.add('h2-title');
    postTitle.textContent =  item.id;

    // დაპრინტულ პოსტებზე გამოვაჩინე IMG 
    let postIMG = document.createElement('img');
    postIMG.classList.add('img-post');
    postIMG.setAttribute('src',item.image);

    let postElement = document.createElement('h3');
    postElement.classList.add('title');
    postElement.textContent =  item.title;

    let postviewButton = document.createElement('button');
    postviewButton.classList.add('view-post');
    postviewButton.textContent = 'View Post';
    postviewButton.setAttribute('data-id', item.id-1);

    post.addEventListener('click', function(event){
        postContent.innerHTML = '';
        let id = event.target.getAttribute('data-id');
        openPostCard(id);
    });
    postTitle.addEventListener('click', onTextClick); 
    postElement.addEventListener('click', onTextClick); 
    postIMG.addEventListener('click', onTextClick); 

    post.appendChild(postTitle);
    post.appendChild(postIMG);
    post.appendChild(postElement);
    post.appendChild(postviewButton);

    mainPostBlock.appendChild(post);
}
// this function opens the post by clicking anywhere
function onTextClick(event) {
    event.stopPropagation();
    postContent.innerHTML = '';
    let id = event.target.parentElement.getAttribute('data-id');
    openPostCard(id);
}
// დავამატე  postCardInfo(data[id]);
// this function opens the specific post that I select
function openPostCard(id){
    postCard.classList.add('active-post');
    let url = `https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR0Soc4b2H9q4hysAcZHt5CXQ-ysYvYLHpg7vZiY0oWGqo9L5HRhTBeVB9s/${id}`;
    serverRequest(url, function(data){
        console.log(data[id]);
        postCardInfo(data[id]);
    });
}
// this function shows what should appear when a post will open
function postCardInfo(item){
    let titlePost = document.createElement('h2');
    titlePost.classList.add('post-title');
    titlePost.innerHTML = item.title;

    let descriptionPost = document.createElement('p');
    descriptionPost.classList.add('post-description');
    descriptionPost.innerHTML = item.description;
// დავამატე სურათის ტეგი
    let postImage = document.createElement('img');
    postImage.classList.add('post-img');
    postImage.setAttribute('src', item.image);
 
    postContent.appendChild(titlePost);
    postContent.appendChild(descriptionPost);
    postContent.appendChild(postImage);
    postCard.appendChild(postContent);

    postClose.addEventListener('click', function(){
        postCard.classList.remove('active-post');
        postContent.innerHTML = '';
    });
}

// This is current date on footer
function currentDate(){
    var today = new Date(); 
    var date = document.getElementById('current-date');
    date.innerHTML = today;
}
currentDate();

// show burger bar 
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


