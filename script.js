const queue = document.getElementById("queue");
const itemCount = queue.children.length;
const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");

addButton.addEventListener("click", () => {
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.textContent = `Item ${itemCount + 1}`;
  queue.insertBefore(newItem, queue.firstChild);
});

removeButton.addEventListener("click", () => {
  if (queue.children.length > 0) {
    queue.removeChild(queue.lastChild);
  }
});