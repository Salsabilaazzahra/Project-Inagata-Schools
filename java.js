// Readmore
function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var readMoreLink = document.getElementById("readMoreLink");
    var shareSection = document.getElementById("shareSection");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        readMoreLink.textContent = "Read Less";
        shareSection.style.display = "block"; 
    } else {
        moreText.style.display = "none";
        readMoreLink.textContent = "Read More....";
        shareSection.style.display = "none"; 
    }

    readMoreLink.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Menu
function filterBerita(category) {
    const items = document.querySelectorAll('.berita-item');
    const menuLinks = document.querySelectorAll('.menu ul li a');

    menuLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.menu ul li a[onclick*="${category}"]`).classList.add('active');

    items.forEach(item => {
        if (category === 'semua' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

