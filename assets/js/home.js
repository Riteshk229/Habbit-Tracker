
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('fa-pencil')) {
    const parent = target.parentNode;
    const id = `myEditForm_${parent.id}`;
    document.getElementById(id).style.display = 'block';
  }
  
  if (target.classList.contains('closeIt')) {
    const id = target.parentNode.parentNode.parentNode.id;
    document.getElementById(id).style.display = 'none';
  }
})


// function to toggle between daily/weekly view

function changeView() {
  
  let weekly = document.querySelectorAll(".weekly-view");
  let daily = document.querySelectorAll(".daily-view");
  let button = document.getElementById("change-view");
  
  console.log(button);
  if(button.innerHTML == 'Show Weekly') {
    for(let d of daily) 
    d.style.display = 'none';
    for(let w of weekly)
    w.style.display = 'flex';
    
    button.innerHTML = "Show Daily";
    button.style.color = "Orange";
    button.style.textShadow = "text-shadow: 2px 2px 0px rgb(255,165,49,0.8)";
  } else {
    for(let d of daily) 
    d.style.display = 'flex';
    for(let w of weekly)
    w.style.display = 'none';
    
    button.innerHTML = "Show Weekly";
    button.style.color = "lawngreen";
    button.style.textShadow = "text-shadow: 2px 2px 0px rgb(255,165,49,0.8);"
  }
}

// changeView();

