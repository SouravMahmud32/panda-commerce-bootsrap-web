// Number 2

const textColor = document.getElementsByTagName('h2');
for(h2 of textColor){
    h2.style.color = 'lightblue';
};

// Number 3

const bagPacks = document.getElementById('bagpack');
bagPacks.style.backgroundColor = 'tomato';

// Number 4

const allCards = document.getElementsByClassName('card');
for(card of allCards){
    card.style.borderRadius = '30px';
}

// Number 5

function handleOnClick(){
    console.log('button clicked');
}

// Number 6
document.getElementById('main-part').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});

// Number 7

document.getElementById('submit-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const submitButton = document.getElementById('btn-submit');
    if(text === 'email'){
        submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled', true);
    }
})