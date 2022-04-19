// Sync Exapmle

const p = document.querySelector("#text")

function syncronous(){
    for(let i = 0; i < 1000000; i++){
        console.log(i);
    }
    alert()
}
// syncronous()  // HANGS THE PAGE

// Async example

setTimeout(() => {
    for(let i = 0; i < 1000000; i++){
        console.log(i);
    }
}, 0);
p.textContent = "Did not wait for FOR LOOP"