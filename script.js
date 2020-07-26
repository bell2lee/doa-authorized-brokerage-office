const change_banner = (banner_num) => {
    let banners = document.querySelectorAll("#banners .banner");

    banners.forEach((obj, index) =>{
        obj.style.opacity = index == banner_num ? 1 : 0;
    });
    setTimeout(() => change_banner(banner_num + 1 == banners.length ? 0 : banner_num + 1), 6000);
};


window.onload = () => {
    change_banner(0);
}