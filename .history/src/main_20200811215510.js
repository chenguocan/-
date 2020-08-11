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
let string = ""
hashMap.forEach((item, index) => {
    string += `
    <li>
        <a href="${item.url}">
            <div class="siteBox">
                <div class="logo">A</div>
                <div class="site">${item.url}</div>
            </div>
        </a>
    </li>
    `;
})
console.log(string);