    var header = document.getElementById("navbar");

    function changeHeader() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        header.classList.toggle("header-background", scrollTop >= 50 );
    }

    var didScroll = false;

    $(window).scroll(function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            didScroll = false;
            changeHeader();
        }
    }, 100);

    changeHeader();
