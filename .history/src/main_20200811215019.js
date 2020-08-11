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
    console.log(item.logo),
        console.log(index);
})