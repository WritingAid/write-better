
$(document).ready(function () {
    var Rating = null;

    $('input[type=radio][name=Enjoying]').change(function () {
        if (this.value == 'yes') {
            $("#section1").addClass("hide");
            $(".span2").addClass("bgDark")
            $("#section2").slideDown();


        } else if (this.value == 'no') {

            $("#section1").addClass("hide");
            $(".span2").addClass("bgDark")
            $("#section3").slideDown();
        }
    });

    $(".star-5").click(function () {
        getRating(5)
        $(".btn1").addClass("hide");
        $(".btn2").slideDown();

        formData.append("rating", 5)
    })

    $(".star-4").click(function () {
        getRating(4)
        $(".btn1").addClass("hide");
        $(".btn2").slideDown();

    })

    $(".star-3").click(function () {
        getRating(3)
        $(".btn1").addClass("hide");
        $(".btn2").slideDown();

    })

    $(".star-2").click(function () {
        getRating(2)
        $(".btn1").addClass("hide");
        $(".btn2").slideDown();

    })

    $(".star-1").click(function () {
        getRating(1)
        $(".btn1").addClass("hide");
        $(".btn2").slideDown();
    })

    const getRating = (rating) => {
        Rating = rating;
    }

    const scriptURL =
        'https://script.google.com/macros/s/AKfycbwq2taqcv_xJbweAYRzpRgiPpm7vwyudNY8L2YOH2SmZ-nSPoRDlyPe7h1igDJo8Jmb/exec'
    const form = document.forms['google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault()
        $("#section1").addClass("hide1")
        $("#section2").addClass("hide1")
        $("#section3").addClass("hide1")
        $("#section5").slideDown()
        var formData = new FormData(form);
        formData.append('Rating', Rating);

        console.log(new FormData(form));
        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                $(".span3").addClass("bgDark")
                $("#section5").addClass("hide1");
                $("#section4").slideDown();
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
});