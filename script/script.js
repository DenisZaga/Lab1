let main_button = document.getElementById("main_button");
let final_result = document.querySelector(".final_result");
main_button.onclick = async function getZeroes() {
    const userFunction = encodeURIComponent(document.getElementById("function").value);
    const response = await fetch("https://newton.vercel.app/api/v2/zeroes/" + userFunction);
    const zeroes = await response.json();
    let result = "Нулі функції: ";
    zeroes.result.forEach((element) => {
        result += element + "; ";
    });
    final_result.innerHTML = result;
};
