const $siteList = $(".siteList");
const $addButton = $(".addButton");
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x');
const xObject = JSON.parse(x);
const hashMap = xObject || [
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
    return url.replace("http://", "").replace("https://", "").replace("www.", "").replace(/\/.*/, '')
})
const hashMapList = () => {
    $siteList.find("li:not(.addButton)").remove();
    hashMap.forEach((item, index) => {
        let $string = $(`
    <li class="site">
        <a href="${item.url}">
            <div class="siteBox">
                <div class="logo">${replaceUrl(item.url)[0].toUpperCase()}</div>
                <div class="siteUrl">${replaceUrl(item.url)}</div>
                <div class="delete">   
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-cha"></use>
                </svg>
               </div>
             </div>
        </a>
    </li>
    `).insertBefore($addButton);
        $(".delete>.icon").on('click', (e) => {
            e.preventDefault(); // 阻止冒泡
            hashMap.splice(index, 1);
            hashMapList();
        })
    })
}
hashMapList();
$addButton.on("click", () => {
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
        hashMapList();
    }
})
window.onbeforeunload = (() => {
    const value = JSON.stringify(hashMap);
    window.localStorage.setItem("x", value);
})
$(document).keydown((e) => {
    console.log(e.key);
})