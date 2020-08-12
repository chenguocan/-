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
    return url.replace("http://", "").replace("https://", "").replace("www.", "")
})
let string = "";
hashMap.forEach((item, index) => {
    string += `
    <li>
        <a href="${item.url}">
            <div class="siteBox">
                <div class="logo">${replaceUrl(item.url)[0].toUpperCase()}</div>
                <div class="site">${replaceUrl(item.url)}</div>
            </div>
        </a>
    </li>
    `;
})
$(string).insertBefore($addButton);
$addButton.click(() => {
    let addUrl = window.prompt("请输入要添加的站点");
    let logo = replaceUrl(addUrl)[0];
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
    console.log(hashMap);
})