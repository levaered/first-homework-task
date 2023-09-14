let copyButton = document.getElementById("copy");
let result = document.getElementById("result");
let copiedObj;

copyButton.addEventListener("click", () => {
    let json = document.getElementById("json").value;
    json = JSON.parse(json);
    copiedObj = copyObject(json);
    result.innerHTML = JSON.stringify(copiedObj);
})

function copyObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; 
    }

    if (Array.isArray(obj)) {
        const newObj = [];
        for (let i = 0; i < obj.length; i++) {
            newObj[i] = copyObject(obj[i]);
        }
        return newObj;
    }    

    const newObj = {};
    for (const key in obj) {
        newObj[key] = copyObject(obj[key]);
    }
    return newObj;
}
