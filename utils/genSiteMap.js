const fs = require("fs");
const path = require("path");
const request = require("request");

main();

async function main() {
    let url = "https://raw.githubusercontent.com/HoldDie/9zhe.tech/gh-pages/sitemap.xml";
    let stream = fs.createWriteStream(path.join(__dirname, "sitemap.xml"));
    request(url).pipe(stream).on("close", function (err) {
        console.log("文件[ sitemap.xml ]下载完毕");
    })
};
