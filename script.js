let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbwTMznntmqVY9CoCgcflKC_MfYHky3ztgfn_s_PrCdPqB35Ac2zE1SmQVaWyWnIFfUW/exec',
        {
            method: "POST", body: data
        })
        .then(res => res.text())
        .then(data => console.log(data));
})