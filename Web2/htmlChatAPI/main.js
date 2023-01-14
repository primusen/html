const input = document.getElementsByClassName("input-area");
const output = document.getElementsByClassName("output-area");

if (localStorage.getItem('apikey').slice(0, 3) != "sk-") {
  newapikey()
} else {
  apikey = localStorage.getItem('apikey')
}

function newapikey() {
  apikey = window.prompt("Input your ChatGPT apikey? If you dont have one get one at https://beta.openai.com/account/api-keys")
  localStorage.setItem('apikey', apikey);
}

function makeRequest(index) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.openai.com/v1/completions', true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + apikey);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data)
      console.log(data.choices[0].text);

      output[index].style.color = '';
      output[index].textContent = data.choices[0].text.trim();
    } else {
      output[index].textContent = "error";
      console.log(xhr.responseText)
    }
  };
  if (index === 0) {
    var promptValue = `Summarise this text: ${input[index].textContent}`
  } else {
    var promptValue = `Rewrite this text: ${input[index].textContent}`
  }

  var request = {
      model: "text-davinci-003",
      prompt: promptValue,
      max_tokens: 3000,
      temperature: 0.7
  }

  console.log(request)

  xhr.send(JSON.stringify(request));
}

function clearTextarea(index) {
  input[index].textContent = ''
  output[index].style.color = 'grey';
  output[index].textContent = 'Output goes here';
}