// Added slider
let data = [
    {
        id: 1,
        imageUrl: 'https://georgiantravelguide.com/storage/files/ardaganis-tba-batumi-ardagani-lake-batumi-3.jpg',
        title: 'Batumi',
        url:'https://www.google.com/'
    },
    {
        id: 2,
        imageUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t31.18172-8/17434479_1632400220123360_7318023573805875703_o.jpg?_nc_cat=106&ccb=1-6&_nc_sid=9267fe&_nc_ohc=fAs47GWb_zsAX_SnFIg&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT_ag3v8WI_YP0kmkmDn9EF2LbJyjsyOgQcxR0qUbrrwxw&oe=62A111A4',
        title: 'Paliastomi',
        url:'https://www.google.com/'
    },
    {
        id: 3,
        imageUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t31.18172-8/10344384_963275053702550_5483404344653950204_o.jpg?_nc_cat=109&ccb=1-6&_nc_sid=9267fe&_nc_ohc=6S6jovhLCIkAX_DBVUT&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT-YW8UucOcDtqE_8qJtntrN9yOVToMNgrkyDF75TIAJpQ&oe=62A02DC2',
        title: 'Tusheti',
        url:'https://www.google.com/'
    },
    
    {
        id: 4,
        imageUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t31.18172-8/10454355_865190593510997_494723374843033858_o.jpg?_nc_cat=101&ccb=1-6&_nc_sid=9267fe&_nc_ohc=S9PX2LR7ZNwAX-JRx88&tn=e92VBgxIx5ljOt_P&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT9H86hK3kJ36Y5gxpw4ob6QG9eF0Gx6WsLSq3mZamdyPQ&oe=62A2B6C2',
        title: 'Kazbegi',
        url:'https://www.google.com/'
    },
    {
        id: 5,
        imageUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/237838597_379971683493048_3192286133171823919_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=730e14&_nc_ohc=4FtB01WmllUAX8gIl14&tn=e92VBgxIx5ljOt_P&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT9IS71UZKgriFjn3VapWNWGjNyi90CC2r8eHNjclOmTCw&oe=62802A60',
        title: 'Svaneti',
        url:'https://www.google.com/'
    },
    ];

let rightArrow = document.getElementById('rightArrow');
let leftArrow = document.getElementById('leftArrow');
let sliderContent = document.getElementById('sliderContent');
let dotList = document.getElementsByClassName('dot');

let sliderIndex = 0;

function createAtag(item){
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('a-link');

    return aTag;
}

function createImgTag(item){
    sliderContent.style.backgroundImage = 'url(' + item.imageUrl + ')';
    sliderContent.style.backgroundRepeat = "no-repeat";
    sliderContent.style.backgroundSize = "cover";
}

function createH2Tag(item){
    let h2Tag = document.createElement('h2');
    h2Tag.classList.add('h2-link');
    h2Tag.append(item.title);
    
    return h2Tag;
}

function createDots(item){
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

function activeDot(){
    dotList[sliderIndex].classList.add('active');
}


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

function rightArrowClick(){
    if(sliderIndex >= data.length-1){
        sliderIndex = 0;
        setSlider();
        return;
    }
    sliderIndex++;
    setSlider();
}

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
}, 3000);

setSlider();

// Added http request for posts

let mainPostBlock = document.getElementById('mainPostBlock');

function serverRequest(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.addEventListener('load', function(){
        let data = JSON.parse(request.responseText);
        data.forEach(element => {
            createPosts(element);
    
        });
    })
    request.send();
}
serverRequest();

// function printPosts(data) {
//     data.forEach(element => {
//         createPosts(element);             
//     });
// }
// postElement may would change

function createPosts(item){
    let post = document.createElement('div');
    post.classList.add('post-div');
    post.setAttribute('data-id', item.id);

    let postTitle = document.createElement('h2');
    postTitle.classList.add('title');
    postTitle.textContent =  item.id;

    let postElement = document.createElement('h3');
    postElement.classList.add('title');
    postElement.textContent =  item.title;

    let postDeleteButton = document.createElement('button');
    postDeleteButton.textContent = 'Delete Post';
    postDeleteButton.setAttribute('data-id', item.id);

    post.appendChild(postTitle);
    post.appendChild(postElement);
    post.appendChild(postDeleteButton);

    mainPostBlock.appendChild(post);
}
