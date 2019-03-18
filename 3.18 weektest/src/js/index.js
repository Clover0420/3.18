var lis = document.querySelectorAll(".list li");
var ols = document.querySelector(".ols");
lis.forEach((item, i) => {
    item.index = i;
    item.onclick = function() {
        lis.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active");
        if (this.index == 1) {
            ols.innerHTML = `<li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>
        <li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>`
        } else {
            ols.innerHTML = `<li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>
        <li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>
        <li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>
        <li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>
        <li>
            <div class="clo"></div>
            <p>花婆婆</p>
        </li>`
        }
    }
})