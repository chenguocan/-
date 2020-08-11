const $siteList = $(".siteList");
let hashMap = [
    {
        logo: "B",
        site: "https://www.bilibili.com",
    },
    {
        logo: "D",
        site: "https://www.baidu.com"
    }
]
let array = [];
hashMap.forEach((item, index) => {
    let string = `
    <li>
    <a href="https://www.bilibili.com">
        <div class="siteBox">
            <div class="logo">A</div>
            <div class="site">bilibili.com</div>
        </div>
    </a>
</li>
    `;
})