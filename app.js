document.addEventListener("DOMContentLoaded", function () {


    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);




    button.addEventListener("click", function () {
        let div = document.createElement('div');
        let clicks = 0;
        document.getElementsByTagName('button').value = ++clicks;
        div.className = "square";
        document.body.appendChild(div);
        div.setAttribute('id', clicks);
        console.log("click!");
    })
})