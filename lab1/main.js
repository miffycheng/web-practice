// window.onload=function()
// {    
//     //document.write("HelloJavaScript");
// };

$(function(){
    $("input").on("click",function(){
        // alert("Hi");
        $("h1").text("Hello");
    });
});

let imageUR_Array = [
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/386505/2de699f9e38226f2.jpg"
];
let save = 0
$(function(){  
    $("input").on("click",function(){
        // alert("Hi");
        // $("h1").text($("li").eq(1).text());
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        while(save == randomChildNumber)
            randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        save = randomChildNumber;
        console.log(randomChildNumber); //放到console
        $("h1").text($("li").eq(randomChildNumber).text());
        //change img -> change img element's src
        $("img").attr("src",imageUR_Array[randomChildNumber]) //數字對應圖片
    });
});
