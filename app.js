const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list')
const descriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
   if (listDiv.style.display == 'none') {
      toggleList.textContent = 'Hide List';
      listDiv.style.display = 'block';
    }else {
      toggleList.textContent = 'Show List';
      listDiv.style.display = 'none';
    }
});

descriptionbutton.addEventListener('click', () => {
  descriptionp.innerHTML = descriptioninput.value + ':';
  descriptioninput.value = '';
});

addItemButton.addEventListener('click', () => {
 let ul = document.getElementsByTagName('ul')[0];
 let li = document.createElement('li');
 li.textContent = addItemInput.value;
 ul.appendChild(li);
 addItemInput.value = '';
})

removeItemButton.addEventListener('click', () => {
 let ul = document.getElementsByTagName('ul')[0];
 let li = document.querySelector('li:last-child');
 ul.removeChild(li);
})