const url = "https://dummyjson.com/products";

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(res => res.json())
        .then(data => sampleDivision(data.products))
        .catch(error => console.error(error));
});
const outerDiv2 = document.createElement("div"); 

function sampleDivision(data) {
    data.forEach(item => {
        const outerDiv = document.createElement("div");
        outerDiv.style.width = "150px";
        outerDiv.style.height = "150px";
        outerDiv.style.border = "1px solid black";
        outerDiv.style.margin = "10px";
        outerDiv.textContent = "ID: " + item.id;
        outerDiv.style.backgroundImage = `url(${item.thumbnail})`;
        outerDiv.style.backgroundSize = "cover";
        outerDiv.style.display = "flex";

        const innerDiv = document.createElement("div");
        innerDiv.style.display = "flex";
        innerDiv.style.flexDirection = "row";
        innerDiv.style.justifyContent = "space-between";
        innerDiv.style.marginTop = "100px"
        innerDiv.style.height = "30px";

        const getDetailButton = document.createElement("button");
        getDetailButton.style.background = "green";
        getDetailButton.style.borderRadius = "14px";
        getDetailButton.textContent = "Detail";

        getDetailButton.addEventListener("click", () => {
            outerDiv2.innerHTML="";
            outerDivision(item)
        });

        // innerDiv.appendChild(cancelButton);
        innerDiv.appendChild(getDetailButton);
        outerDiv.appendChild(innerDiv);
        document.body.appendChild(outerDiv);
    });
}

function outerDivision(item){
    outerDiv2.style.width = `calc(100% - 200px)`;
    outerDiv2.style.height = "150px";
    outerDiv2.style.border = "1px solid black";
    outerDiv2.style.position = "absolute";
    outerDiv2.style.top = "0px";
    outerDiv2.style.right = "0";
    outerDiv2.style.margin = "10px";
    outerDiv2.style.overflow = "auto";
    outerDiv2.textContent = `Detail :- ${item.description}`;
    document.body.appendChild(outerDiv2);
}


