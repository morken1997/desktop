$(document).ready(function () {
    var devNews = document.getElementsByClassName("devNews");
    console.log(devNews.length);
    $.ajax({
        type: "GET",
        url: "https://dev.to/api/articles",
        dataType: "json",
        success: function (response) {
            console.log(response);
            for (let i = 0; i <= 10; i++) {
                devNews[i].innerHTML = '<a href="' + response[i].url + '" target="_blank">' + JSON.stringify(response[i].title) + '</a>'
                // JSON.stringify(response[i].title)


                // <a href="http://www.w3school.com.cn">Visit W3School</a>
                // console.log(JSON.stringify(response[i]));





            }
        }
    });
});


// window.onload = function news() {
//     var devNews = document.getElementsByClassName("devNews");
//     console.log(devNews.length);
//     $.ajax({
//         type: "GET",
//         url: "https://dev.to/api/listings",
//         dataType: "json",
//         success: function (response) {
//             var devNews = document.getElementsByClassName("devNews");
//             console.log(devNews.length);

//             for (let i = 0; i <= 10; i++) {
//                 devNews[i].innerHTML = '<p>' + i + '</p';
//                 // console.log(JSON.stringify(response[i]));

//             }
//         }
//     });
// }


// window.onload = function loadXMLDoc() {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//         xmlhttp = new XMLHttpRequest();
//     }
//     else {
//         // IE6, IE5 浏览器执行代码
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//             console.log(xmlhttp.responseText);
//             for (let index = 0; index < array.length; index++) {
//                 const element = array[index];

//             }
//         }
//     }
//     xmlhttp.open("GET", "https://dev.to/api/listings", true);
//     xmlhttp.send();
// }