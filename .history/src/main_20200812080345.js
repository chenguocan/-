const $siteList = $(".siteList");
const $addButton = $(".addButton");
const x = localStorage.getItem('x');
const xObject = JSON.parse(x);
let hashMap = xObject || [
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
    return url.replace("http://", "").replace("https://", "").replace("www.", "")
})
function hashMapList(hashMap) {
    hashMap.forEach((item, index) => {
        let string = `
    <li>
        <a href="${item.url}">
            <div class="siteBox">
                <div class="logo">${replaceUrl(item.url)[0].toUpperCase()}</div>
                <div class="site">${replaceUrl(item.url)}</div>
            </div>
        </a>
    </li>
    `;
        $(string).insertBefore($addButton);
    })
}
hashMapList(hashMap);
$addButton.click(() => {
    let addUrl = window.prompt("请输入要添加的站点");
    if (addUrl !== null) {
        let logo = replaceUrl(addUrl)[0].toUpperCase();
        let url = addUrl;
        if (addUrl.indexOf("https") === -1) {
            url = "https://" + addUrl;
        }
        //console.log(logo, url)
        let addList = {
            logo,
            url,
        };
        hashMap.push(addList);
        let string = `
    <li>
        <a href="${url}">
            <div class="siteBox">
                <div class="logo">${logo}</div>
                <div class="site">${replaceUrl(url)}</div>
            </div>
        </a>
    </li>
    `
        $(string).insertBefore($addButton);
        console.log(hashMap);
    }
})
window.onbeforeunload = (() => {
    const value = JSON.stringify(hashMap);
    console.log(value);
    window.localStorage.setItem("x", value);
})