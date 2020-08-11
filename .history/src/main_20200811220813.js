const $siteList = $(".siteList");
const $addButton = $(".addButton")
let hashMap = [
    {
        logo: "B",
        url: "https://www.bilibili.com",
    },
    {
        logo: "D",
        url: "https://www.baidu.com"
    }
];
const replaceUrl = ((url) => {
    url.replace("http://", "").replace("https://", "").replace("www.", "")
})
let array = [];
let string = "";
hashMap.forEach((item, index) => {
    string += `
    <li>
        <a href="${item.url}">
            <div class="siteBox">
                <div class="logo">${item.url.replace("http://", "").replace("https://", "").replace("www.", "")[0]}</div>
                <div class="site">${item.url.replace("http://", "").replace("https://", "").replace("www.", "")}</div>
            </div>
        </a>
    </li>
    `;
})