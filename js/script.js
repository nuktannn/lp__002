//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked");
  });

  //スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    position = jQuery(id).offset().top; // ここで80pxを追加
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 430) {
    document.body.style.width = "430px";
  } else {
    document.body.style.width = "100%";
  }
});

//slider
const swiper = new Swiper("#js-slider-swiper", {
  spaceBetween: 33,
  loop: true,
  speed: 1500, // 少しゆっくり(デフォルトは300)
  autoplay: { // 自動再生
    delay: 1000, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },

  pagination: {
    el: "#js-slider-pagination",
  },

  navigation: {
    nextEl: "#js-slider-next",
    prevEl: "#js-slider-prev",
  },

  breakpoints: {
    0: {
      centeredSlides: true,
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});

//qa
jQuery(document).ready(function ($) {
  // 最初にすべてのqa-box-aを閉じます
  $(".qa__box-a").hide();
  // 最初のqa-box-aだけを開きます
  // $(".qa__box-a").first().show();
  // $(".qa__box-icon").first().addClass("is-open");

  // qa-box-qがクリックされたときの動作を定義します
  $(".qa__box-q").click(function () {
    $(this).next(".qa__box-a").slideToggle();
    $(this).children(".qa__box-icon").toggleClass("is-open");
});
});

//contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact__form");
  const button = form.querySelector(".contact__button");
  const requiredFields = Array.from(
    form.querySelectorAll("input[required]")
  ).filter((field) => ["your-name", "your-company", "your-department", "your-phone", "your-email", "your-message"].includes(field.name));
  const checkbox = form.querySelector('input[type="checkbox"]');

  const checkForm = () => {
    let isFormValid =
      checkbox.checked &&
      requiredFields.every((field) => field.value.trim() !== "");
    button.disabled = !isFormValid;
    button.style.backgroundColor = isFormValid ? "#599CC2" : "#FDFDFD";
    button.style.color = isFormValid ? "#FDFDFD" : "#599CC2";
  };

  checkbox.addEventListener("change", checkForm);
  requiredFields.forEach((field) => field.addEventListener("input", checkForm));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("正常に送信が完了しました");
    form.reset();
    checkForm();
  });

  checkForm();
});
