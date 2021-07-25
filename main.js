const addbutton = document.querySelector('.addButton')
const contain = document.querySelector('.container')
const mainInput = document.querySelector('.input')
const firstform = document.querySelector('.firstform')

addbutton.addEventListener('click', (e) => {
  e.preventDefault()
  if(mainInput.value.length === 0) {
    alert('input a value please')
  }else
    controls()
    firstform.reset()
})

function controls(){
    const item = document.createElement('div')
    item.className = 'item'
    const Task = document.createElement('p')
    Task.innerHTML = mainInput.value
    Task.className = 'input-text'
    mainInput.setAttribute('required', true)
    const button1 = document.createElement('button')
    button1.innerHTML = 'Edit'
    button1.className  = 'editButton'
    const button2 = document.createElement('button')
    button2.innerHTML = 'Remove'
    button2.className = 'removeButton'
    const button3 = document.createElement('button')
    button3.innerHTML = 'AddTask'
    button3.className  = 'adding'

    button2.addEventListener('click', (e) => {
      e.preventDefault();
        remove(item);
    })

    button3.addEventListener('click', (e) => {
      e.preventDefault()
      form.classList.remove('hide')
    })

    button1.addEventListener('click', (e) => {
      alert('thats for editing')
    })

  const divdate = document.createElement('div')
  divdate.className = 'first'
  const taskdiv = document.createElement('div')
  taskdiv.className = 'first'

  const descdiv = document.createElement('div')
  descdiv.className = 'first'
  divdate.setAttribute('id', 'datetimepicker')

  const form = document.createElement('form')
  form.className = 'hide'
  const firstlabel = document.createElement('label')
  firstlabel.innerHTML = 'task'
  const firstinput = document.createElement('input')
  firstinput.className = 'dateinput'
  firstinput.setAttribute('required', true)


  const secondlabel = document.createElement('label')
  secondlabel.innerHTML = 'Description'
  const secondinput = document.createElement('input')
  secondinput.className = 'dateinput'
  secondinput.setAttribute('required', true)


  const thirdlabel = document.createElement('label')
  thirdlabel.innerHTML = 'duedate'
  const thirdinput = document.createElement('input')
  thirdinput.setAttribute('type', 'date')
  thirdinput.setAttribute('required', true)
  thirdinput.setAttribute('autocomplete', 'off')
  thirdinput.className = 'dateinput form-control'

  const priority = document.createElement('div')
  priority.className = 'priority'
  const highdiv = document.createElement('div')
  highdiv.className = 'radios'
  const high = document.createElement('input')
  const highglabel = document.createElement('label')
  highglabel.innerHTML = 'high'
  high.setAttribute('type', 'radio')
  high.setAttribute('name', 'priority')
  
  const mediumdiv = document.createElement('div')
  mediumdiv.className = 'radios'
  const mediumlabel = document.createElement('label')
  mediumlabel.innerHTML = 'medium'
  const medium = document.createElement('input')
  medium.setAttribute('type', 'radio')
  medium.setAttribute('name', 'priority')
  

  const lowdiv = document.createElement('div')
  lowdiv.className = 'radios'
  const low = document.createElement('input')
  const lowlabel = document.createElement('label')
  lowlabel.innerHTML = 'low'
  low.setAttribute('type', 'radio')
  low.setAttribute('name', 'priority')

  const additems = document.createElement('button')
  additems.className = 'btn btn-primary newbutton'
  additems.innerHTML = 'ADDTASKS'

  const tables = document.createElement('table')
  tables.className = 'list'
  const tablebody = document.createElement('tbody')
  const tablehead = document.createElement('thead')
  const headrow = document.createElement('tr')
  const taskrow = document.createElement('th')
  taskrow.innerHTML = 'TASK'
  const descrow = document.createElement('th')
  descrow.innerHTML = 'Description'
  const daterow = document.createElement('th')
  daterow.innerHTML = 'Due Date'
  const priorityrow = document.createElement('th')
  priorityrow.innerHTML = 'Priority'
  const completedrow = document.createElement('th')
  completedrow.innerHTML = 'Completed'

  const deleterow = document.createElement('th')
  deleterow.innerHTML = 'Delete'

  lowdiv.appendChild(lowlabel)
  lowdiv.appendChild(low)

  mediumdiv.appendChild(mediumlabel)
  mediumdiv.appendChild(medium)

  highdiv.appendChild(highglabel)
  highdiv.appendChild(high)

  priority.appendChild(highdiv)
  priority.appendChild(mediumdiv)
  priority.appendChild(lowdiv)

  
  divdate.appendChild(thirdlabel)
  divdate.appendChild(thirdinput)

  taskdiv.appendChild(firstlabel)
  taskdiv.appendChild(firstinput)

  descdiv.appendChild(secondlabel)
  descdiv.appendChild(secondinput)

  form.appendChild(taskdiv)
  form.appendChild(descdiv)
  form.appendChild(divdate)
  form.appendChild(priority)
  form.appendChild(additems)

  headrow.appendChild(taskrow)
  headrow.appendChild(descrow)
  headrow.appendChild(daterow)
  headrow.appendChild(priorityrow)
  headrow.appendChild(completedrow)
  headrow.appendChild(deleterow)

  tablehead.appendChild(headrow)
  tables.appendChild(tablehead)
  tables.appendChild(tablebody)

    item.appendChild(Task)
    item.appendChild(button1)
    item.appendChild(button2)
    item.appendChild(button3)
    
    item.appendChild(form)
    item.appendChild(tables)
    contain.appendChild(item)
  form.reset();

  additems.addEventListener('click', (e) => {
    e.preventDefault()
    populateTable(tables, firstinput, secondinput, thirdinput, getpriority(), completedrow, deleterow)
    form.reset()
    form.classList.add('hide')
  })

  function getpriority() {
    if (high.checked) {

      return "high";
    }
    if (medium.checked) {
      return "medium";
    }
    if (low.checked) {
      return "low";
    }
    return "no priority";
  }
}

function remove(item){
  item.remove()
}

function populateTable(table, task, desc, duedate, level, complete, erase){
  const tablebody = table.getElementsByTagName('tbody')[0]
  const newRow = tablebody.insertRow(tablebody.length);
  const cell1 = newRow.insertCell(0);
  cell1.innerHTML = task.value

  const cell2 = newRow.insertCell(1);
  cell2.innerHTML = desc.value

  const cell3 = newRow.insertCell(2);
  cell3.innerHTML = duedate.value

  const cell4 = newRow.insertCell(3);
  cell4.innerHTML = level

  

  const compeleteicon = document.createElement('button')
  compeleteicon.innerHTML = 'false'

  const cell5 = newRow.insertCell(4);
  cell5.appendChild(compeleteicon)
  compeleteicon.className = 'erase'
  cell5.setAttribute('id', 'status')
  
  const eraseicon = document.createElement('button')
  eraseicon.innerHTML = 'X'
  eraseicon.className = 'erase'

  
  
  const cell6 = newRow.insertCell(5);
  cell6.appendChild(eraseicon)

  cell6.addEventListener('click', (e) => {
    e.preventDefault();
    const removerow = e.target.parentElement.parentElement;
    removerow.remove();
  })

  compeleteicon.addEventListener('click', (e) => {
    if (compeleteicon.innerHTML === 'false'){
      compeleteicon.innerHTML = 'true'
      compeleteicon.classList.remove('erase')
      compeleteicon.classList.add('true')
    }
    else if(compeleteicon.innerHTML === 'true'){
      compeleteicon.innerHTML = 'false'
      compeleteicon.classList.remove('true')
      compeleteicon.classList.add('erase')
    }
    else {
      completeicon.innerHTML = 'unanswered'
    }
  })

  if (cell4.innerHTML === "high") {
    cell4.classList.add("high");
  } else if (cell4.innerHTML === "medium") {
    cell4.classList.add("medium");
  } else if (cell4.innerHTML === "low") {
    cell4.classList.add("low");
  } else {
    cell4.classList.add("no-priority");
  }
}





