const $siteList = $(".siteList");
let hashMap = [
    {
        logo: "B",
        url: "https://www.bilibili.com",
    },
    {
        logo: "D",
        url: "https://www.baidu.com"
    }
]
let array = [];
hashMap.forEach((item, index) => {
    console.log(url);
    let string = `
    <li>
        <a href="${url}">
            <div class="siteBox">
                <div class="logo">A</div>
                <div class="site">bilibili.com</div>
            </div>
        </a>
    </li>
    `;
})