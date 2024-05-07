function alphanumeric(str) { 
    return str.replace(/[^a-zA-Z0-9]/g, ''); 
}

function formatted(str) {
    return str.slice(0,2)+"-"+str.slice(2,5)+"-"+str.slice(5,8)+"-"+str.slice(8,11)
}

id = new URLSearchParams(window.location.search).get('cert')
if (id) {
    id = alphanumeric(id.toUpperCase())
    if (certObject[id]) {
        document.getElementById("cert-id").innerHTML = formatted(id)
        document.getElementById("cert-name").innerHTML = certObject[id][1];
        document.getElementById("cert-date").innerHTML = certObject[id][2];
        document.getElementById("cert-down").href = "https://drive.usercontent.google.com/u/0/uc?id=" + certObject[id][0] + "&export=download";
        document.getElementById("cert-link").href = "https://drive.google.com/file/d/" + certObject[id][0] + "/view";
        document.getElementById("cert-view").src = "https://drive.google.com/file/d/" + certObject[id][0] + "/preview";
        document.getElementById("verify-yes").style.display = "flex";
    } else {
        document.getElementById("cert-id").innerHTML = id;
        document.getElementById("verify-no").style.display = "flex";
    }
}