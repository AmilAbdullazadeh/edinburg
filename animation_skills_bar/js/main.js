document.addEventListener('DOMContentLoaded', function() {
    let lang = {
        'html': 90,
        'css': 90,
        'javascript': 70,
        'php': 15,
        'wordpress': 65,
        'bootstrap': 75,
        'laravel': 5
    }

    let delay = 700;
    let multiply = 1;

    for (let language in lang) {

        if (lang.hasOwnProperty(language)) {
            let percent = lang[language];

            setTimeout(function () {
                document.getElementById(language + "-pourcent").innerHTML = percent + "%";
                document.getElementById("progress-" + language).style.width = percent + "%";
            }, delay * multiply);

            multiply++;
        }

    }
});