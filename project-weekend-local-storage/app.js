let input = document.querySelector(`input`),
  btnSub = document.querySelector(`#btn-add`),
  clearBtn = document.querySelector(`#btn-clear`);
let divRow = document.querySelector(`#divRow`);
btnSub.addEventListener(`click`, function () {
  let body = document.body;
  let inputValue = input.value;
  let row = document.createElement(`div`);
  // let para = document.createElement(`p`);
  let deleteBtn = document.createElement(`button`);
  let editBtn = document.createElement(`button`);
  localStorage.setItem(inputValue, inputValue);
  // ---------------------
  body.append(divRow);
  divRow.append(row);
  row.append(inputValue);
  // row.append(para);
  row.append(deleteBtn);
  row.append(editBtn);
  //   --------------------
  divRow.style.cssText = `display:flex;
  flex-direction:column;align-items:center;`;
  row.style.cssText = `border:1px solid grey; color: white;background-color: rgba(240, 255, 255, 0.556);
  height:70px; width:600px;margin-bottom:10px; display:flex;align-items:center;justify-content:space-evenly;`;
  deleteBtn.textContent = `delete`;
  deleteBtn.style.cssText = `border-radius: 100px;border:0px;font-size:20px;`;
  editBtn.textContent = `edit`;
  editBtn.style.cssText = `border-radius: 100px;border:0px;font-size:20px;`;
  deleteBtn.addEventListener("click", function () {
    row.remove();
    localStorage.removeItem(inputValue);
  });
  editBtn.addEventListener(`click`, function () {
    btnSub.innerHTML = editBtn.innerHTML;
    // submit(edit) -> will do edit Action.
    btnSub;
  });
});
clearBtn.addEventListener(`click`, function () {
  localStorage.clear();
  divRow.remove();
});
