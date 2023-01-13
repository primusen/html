const response = document.getElementsByClassName("response");
var completed = undefined;

function request(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            callback(data)
        }
    }

    xhr.send();
}

async function writedata (data, index) {
    return new Promise((resolve) => {
        i = 0
        function write() {
            if (index === 6 && data[i] === "<") {i += 4; response[index].innerHTML = response[index].innerHTML + '<br>'}
            response[index].innerHTML += data[i];
            i++;
            if (i < data.length) {
                setTimeout(write, 25);
            } else {
                resolve();
            }
        }
        write();
    });
}

function randomize() {
    if (completed === false) {return}
    completed = false

    request(async function (data) {
        // Clear old responses
        for (let index = 0; index < response.length; index++) { response[index].textContent = ""; };
        towrite = [];

        // Picture
        document.getElementById("image").src = data["results"][0]["picture"]["large"]

        // Name
        towrite.push(`${data["results"][0]["name"]["title"]} ${data["results"][0]["name"]["first"]} ${data["results"][0]["name"]["last"]}`)

        // Gender
        if (data["results"][0]["gender"][0] === "f") {
            towrite.push("Female");
        } else {
            towrite.push("Male");
        }

        // Age
        towrite.push(`${data["results"][0]["dob"]["age"]} years old`)

        // Date of birth
        dob = data["results"][0]["dob"]["date"].slice(0, 10).split("-")

        switch (dob[1]) {
            case "01":
                month = "January";
                break;
            case "02":
                month = "February";
                break;
            case "03":
                month = "March";
                break;
            case "04":
                month = "April";
                break;
            case "05":
                month = "May";
                break;
            case "06":
                month = "June";
                break;
            case "07":
                month = "July";
                break;
            case "08":
                month = "August";
                break;
            case "09":
                month = "October";
                break;
            case "10":
                month = "September";
                break;
            case "11":
                month = "November";
                break;
            case "12":
                month = "December";
                break;
        }

        towrite.push(`${parseInt(dob[2])} ${month} ${dob[0]}`);

        // Country
        towrite.push(`${data["results"][0]["location"]["country"]}`);

        // City
        towrite.push(`${data["results"][0]["location"]["city"]}`);

        // Address
        towrite.push(`${data["results"][0]["location"]["street"]["name"]} ${data["results"][0]["location"]["street"]["number"]}<br>${data["results"][0]["location"]["state"]} ${data["results"][0]["location"]["postcode"]}`);
        
        // Email
        towrite.push(`${data["results"][0]["email"]}`);

        // Phone
        towrite.push(`${data["results"][0]["phone"]}`);

        // Username
        towrite.push(`${data["results"][0]["login"]["username"]}`);

        // Password
        towrite.push(`${data["results"][0]["login"]["password"]}${data["results"][0]["login"]["salt"]}`);

        for (let index = 0; index < towrite.length; index++) {
            await writedata(towrite[index], index);
        } completed = true;
    });
}

randomize();