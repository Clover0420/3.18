"use strict";var lis=document.querySelectorAll(".list li"),ols=document.querySelector(".ols");lis.forEach(function(i,l){i.index=l,i.onclick=function(){lis.forEach(function(i){i.classList.remove("active")}),i.classList.add("active"),1==this.index?ols.innerHTML='<li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>\n        <li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>':ols.innerHTML='<li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>\n        <li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>\n        <li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>\n        <li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>\n        <li>\n            <div class="clo"></div>\n            <p>花婆婆</p>\n        </li>'}});