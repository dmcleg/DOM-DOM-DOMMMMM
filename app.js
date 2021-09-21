document.addEventListener("DOMContentLoaded", function () {


    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    const squareContainer = document.createElement("div");
    squareContainer.id = "square-container";
    document.body.appendChild(squareContainer);

    let clicks = 0;


    button.addEventListener("click", function () {
        let div = document.createElement('div');


        clicks++
        div.id = clicks;

        div.className = "square";
        //visible text
        div.addEventListener("mouseover", function () {
            div.textContent = div.id;
        });

        div.addEventListener("mouseout", function () {
            div.textContent = "";
        })
        //color changing
        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor()
        })
        //removing blocks  
        div.addEventListener("dblclick", function () {
            if (div.id % 2 == 0) {
                if (div.nextSibling) {
                    div.nextSibling.remove()
                } else {
                    alert("Doesn't work!")
                }
            } else {
                if (div.previousSibling) {
                    div.previousSibling.remove()
                } else {
                    alert("Doesn't work!")
                }
            }
        })

        document.body.appendChild(div);
    })
})
//random color generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
