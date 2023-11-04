/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

window.addEventListener('DOMContentLoaded', function() {
    fetch('/layout/header.html')
        .then(response => response.text())
        .then(headerHtml => {
            document.getElementById('header').innerHTML = headerHtml;
        });

    fetch('/layout/footer.html')
        .then(response => response.text())
        .then(footerHtml => {
            document.getElementById('footer').innerHTML = footerHtml;
        });
});

// toggle 
$(document).ready(function() {

    $('.search-toggle').click(function() {
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function() {
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function() {
        $(this).removeClass('show');
    });

    $('.spinner').click(function() {
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function() {
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function() {
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function() {
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {
                window.location.hash = hash;
            });
        }
    });
});

let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        alert('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}