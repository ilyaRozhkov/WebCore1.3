var activeBtn = document.querySelector('.arrows-link');
var activeItems = document.querySelector('.brands__items');

activeBtn.addEventListener('click', function(){
    var check= document.querySelector('.arrows-link--active');
    if(check){
        activeItems.classList.remove('brands__items--active');
        activeBtn.classList.remove('arrows-link--active');
    }else{
    activeItems.classList.add('brands__items--active');
    activeBtn.classList.add('arrows-link--active');
    activeBtn.textContent('Скрыть');
    }
});
