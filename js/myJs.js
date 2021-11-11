const textConfig = {
  text1: "Happy birthdayyy ♡",
  text2: "chúc mừng sinh nhật chị P",
  text3: `
          hãy có một ngày thật là vuiiii nhé?
          cf ik chị :>`,
  text4: `=))) oi nhớ lại năm ngoái sn e cho chị hẳn 2p để chúc,
          kiểu mấy năm gần đây cũng quen tắt hết thông báo r cũm kh ai nhớ, cứ nhẹ nhàng tận hưởng một mình, ngày vẫn bao nhiêu là việc với thiếu ngủ @@
          hôm đó chiều còn đi họp ban với c, tóm lại là kiểu, chị như người may mắn được được e chọn =))
          lúc đấy ntin với c e cũng thấy dễ nch :)) dù chỉ là một mẩu 2p nhưng e nghĩ nhiều khi như thế cũng đủ làm nên 1 ngày r ^^ `,
  text5: "khum hahahah",
  text6: "yess nhất định",
  text7: "nhớ mua mì trẻ em cho em đấy ☻",
  text8: "hứa!",
  text9: "oke luôn khi nào gặp mua cho hẳn 10 gói nhó :>",
  text10: "đến giờ học r",
  text11:
    "xem webinar nhé chị :)) e mông lung ~~~ chắc cần c giúp đỡ nhiều",
  text12: "xem thử @@",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://raw.githubusercontent.com/takoizume/20thg10withA3/main/img/logi.gif",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='.....'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://lh5.googleusercontent.com/6n_XZWbkr6SMtnFLWrqODGGg2vCv8GPnsBC4unHE6VsAp7vmN8JBrnSzts-sO9XZ6qJd7C5mdl7xGg=w1512-h844")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.youtube.com/playlist?list=PLuu93uG13bhAjqweoZ51SCBT3yypALkWt";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
