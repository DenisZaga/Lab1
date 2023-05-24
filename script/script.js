let main_button = document.getElementById("main_button");
let final_result = document.querySelector(".final_result");
main_button.onclick = async function getZeroes() {
    const userFunction = encodeURIComponent(document.getElementById("function").value);
    const request = await fetch("https://newton.vercel.app/api/v2/zeroes/" + userFunction);
    const reply = await request.json();
    let result = "Нулі функції: ";
    reply.result.forEach((element) => {
        result += element + "; ";
    });
    final_result.innerHTML = result;
};
