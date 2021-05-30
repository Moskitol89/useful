//структура для табов на jquery из dream-spa
$(".process__tab").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(".process__tab").index(this);
    $(".process__tab-item").eq(index).addClass("active")
        .siblings().removeClass("active");
});
//конец структуры для табов на jquery из dream-spa



//свой генератор звездочек из dream-spa
//берет цифру из дата атрибута data-stars-filled дивов с классом rate
//эта цифра - кол-во заполненных звезд, функция дополняет пустыми звездами до 5
//внутри дива с классом rate создается ul к которому цепляются li с фоновыми картинками звезд
let rateDivArr = document.querySelectorAll(".rate");
rateDivArr.forEach(function (rateDiv) {
    let filledStarsNumber = rateDiv.dataset.starsFilled;
    let liStarParentUl = document.createElement("ul");
    rateDiv.appendChild(liStarParentUl);
    for (let i = 0; i < filledStarsNumber; i++) {
        let liStar = document.createElement("li");
        liStar.classList.add("filled-star");
        liStar.style.backgroundImage = "url(img/star-full.svg)";
        liStarParentUl.appendChild(liStar);
    }
    for (; filledStarsNumber < 5; filledStarsNumber++) {
        let liStar = document.createElement("li");
        liStar.classList.add("empty-star");
        liStar.style.backgroundImage = "url(img/star-empty.svg)";
        liStarParentUl.appendChild(liStar);
    }
});
//конец генератора звездочек из dream-spa

