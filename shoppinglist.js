'use strict';

//Take items value that are entered into the input and convert them into a usable html syntax and 
function groceryItem(value){
   
  const product=`<li>
    <span class="shopping-item">${value}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;

 
  $('.shopping-list').append(product);

}


$('form').submit(event=>{
  event.preventDefault();
  const value = $('input').val();
  groceryItem(value);



});

// Make a toggle button that will switch the  shopping item checked class on and off.

$('ul').on('click','.shopping-item-toggle',event=>{

  event.preventDefault();
    
  $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  
});

// $('.shopping-item-toggle').click(event => {
//     event.preventDefault();
//     console.log(event.currentTarget);
//     $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
//   }
//   );
  



$('ul').on('click','.shopping-item-delete',event=>{
  event.preventDefault();
  $(event.currentTarget).closest('li').remove();
});











$();




    