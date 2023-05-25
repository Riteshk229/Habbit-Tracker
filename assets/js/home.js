
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('fa-pencil')) {
    const parent = target.parentNode;
    console.log("44444444",parent);
    const id = `myEditForm_${parent.id}`;
    console.log("666666",id);
    document.getElementById(id).style.display = 'block';
    console.log("888888",document.getElementById(id));
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

  if(button.innerHTML == 'Daily View') {
    for(let d of daily) 
      d.style.display = 'none';
    for(let w of weekly)
      w.style.display = 'flex';

    button.innerHTML = "Weekly View";
    button.style.color = "lawngreen";
    button.style.textShadow = "text-shadow: 2px 2px 0px rgb(255,165,49,0.8);"
    // view = weekly;
  } else {
    for(let d of daily) 
      d.style.display = 'flex';
    for(let w of weekly)
      w.style.display = 'none';

    button.innerHTML = "Daily View";
    button.style.color = "Orange";
    button.style.textShadow = "text-shadow: 2px 2px 0px rgb(255,165,49,0.8)";
    // view = daily;
  }
}

changeView();

