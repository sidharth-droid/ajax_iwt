function loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('content-area').innerHTML = this.responseText;
            const parser = new DOMParser();
            const doc = parser.parseFromString(this.responseText, 'text/html');
            const title = doc.querySelector('title').textContent;
            document.getElementById('current-page').textContent = title;
        } else {
            document.getElementById('content-area').innerHTML = '<p>Error loading page.</p>';
        }
    };
    xhr.send();
}

function displayDoc() {
    var myObj = new XMLHttpRequest();
    myObj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sample").innerHTML = this.responseText;
        } else {
            console.log("Error Found");
        }
    };
    myObj.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    myObj.send();
}

function showData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById("output").innerHTML = xhr.responseText;
       } else if (xhr.readyState === 4) {
          console.error("Failed to fetch data");
       }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/3", true);
    xhr.send();
}

function displayRecords() {
    var zhttp = new XMLHttpRequest();
    zhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("example").innerHTML = this.responseText;
        }
    };
    zhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/6", true);
    zhttp.send();
}

function sendDoc() {
    var qhttp = new XMLHttpRequest();
    qhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            document.getElementById("postResponse").innerHTML = "Data sent successfully!";
        }
    };
    qhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    qhttp.setRequestHeader("Content-type", "application/json");
    qhttp.send(JSON.stringify({
        "title": "Sample Title",
        "userId": 1,
        "body": "Sample body content"
    }));
}

function updateDoc() {
    var uhttp = new XMLHttpRequest();
    uhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("putResponse").innerHTML = "Record updated successfully!";
        }
    };
    uhttp.open("PUT", "https://jsonplaceholder.typicode.com/todos/1", true);
    uhttp.setRequestHeader("Content-type", "application/json");
    uhttp.send(JSON.stringify({
        "title": "Updated Title",
        "userId": 1,
        "body": "Updated body content"
    }));
}

function delDoc() {
    var dhttp = new XMLHttpRequest();
    dhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("deleteResponse").innerHTML = "Record deleted successfully!";
        }
    };
    dhttp.open("DELETE", "https://jsonplaceholder.typicode.com/todos/2", true);
    dhttp.send();
}

function getBinaryData() {
    var myhttp = new XMLHttpRequest();
    myhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    myhttp.responseType = "arraybuffer";
    myhttp.onload = (event) => {
       if (myhttp.status === 200){
          var arraybuffer = myhttp.response;
          var data = new Uint8Array(arraybuffer);
          document.getElementById("example").innerHTML = data;
          console.log("Binary data Received");
       } else {
          console.log("Found error");
       }
    };
    myhttp.send();
}

function handleResponse() {
    var qhttp = new XMLHttpRequest();
    qhttp.onreadystatechange = function() {
       if (qhttp.readyState == 4) {
          if (qhttp.status == 200) {
             console.log(qhttp.responseText)
          } else {
             console.log("Found Error: ", qhttp.status)
          }
       }
    }
}

function sendFormData() {
    var zhttp = new XMLHttpRequest();
    const mFormEle = document.querySelector("#mForm");
    const myForm = new FormData(mFormEle);
    zhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("example").innerHTML = this.responseText;
          console.log("Form Data Posted Successfully");
       }
    };
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    zhttp.send(myForm);
}

function sendFormData() {
    var zhttp = new XMLHttpRequest();
    const myForm = new FormData();
    myForm.append("title", document.querySelector('#Utitle').value);
    myForm.append("UserId", document.querySelector('#UId').value);
    myForm.append("Body", document.querySelector('#Ubody').value);
    myForm.append("Age", document.querySelector('#Uage').value);
    zhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            document.getElementById("example").innerHTML = this.responseText;
            console.log("Form Data Posted Successfully");
        }
    };
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    zhttp.send(myForm);
}

function sendRecords() {
    var zhttp = new XMLHttpRequest();
    const mParameters = {
       title: document.querySelector('#Utitle').value,
       userid: document.querySelector('#UId').value,
       body: document.querySelector('#Ubody').value
    }
    zhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("example").innerHTML = this.responseText;
          console.log("Data Posted Successfully")
       }
       console.log("Error found");
    };
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    zhttp.setRequestHeader('Content-type', 'application/json');
    zhttp.send(JSON.stringify(mParameters));
}

function updateDoc() {
    var uhttp = new XMLHttpRequest();
    uhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          document.getElementById("sample").innerHTML = this.responseText;
          console.log("Data updated successfully");
       }
    };
    uhttp.open("PUT", "https://jsonplaceholder.typicode.com/todos/21", true);
    uhttp.setRequestHeader('Content-type', 'application/json');
    uhttp.send(JSON.stringify({
       "title": "ApplePie",
       "userId": 12,
       "id": 32,
       "body": "ApplePie is made up of Apple"
    }));
}

function sendDoc() {
    var qhttp = new XMLHttpRequest();
    qhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("sample").innerHTML = this.responseText;
          console.log("JSON Data Sent Successfully");
       }
    };
    qhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    qhttp.setRequestHeader('Content-type', 'application/json');
    qhttp.send(JSON.stringify({
       "title": "Mickey",
       "userId": 11,
       "id": 21,
       "body": "Mickey lives in London"
    }));
}

function sendDataObject() {
    var qhttp = new XMLHttpRequest();
    var myDataObject = {
       "name": "Monika",
       "City": "Delhi",
       "Age": 32,
       "Contact Number": 33333333
    }
    qhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("sample").innerHTML = this.responseText;
          console.log("Data object sent successfully");
       }
    };
    qhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    qhttp.setRequestHeader('Content-type', 'application/json');
    var myData = JSON.stringify(myDataObject);
    qhttp.send(myData);
}

function displayProgress() {
   var myObj = new XMLHttpRequest();
   myObj.onprogress = function(myEvent) {
      if (myEvent.lengthComputable) {
         var transferPercentage = (myEvent.loaded / myEvent.total) * 100;
         document.getElementById("status").innerHTML = "Data transfer progress: " + transferPercentage.toFixed(2) + "%";
      }
   };
   myObj.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
   myObj.send();
}

function displayStatus() {
   var myObj = new XMLHttpRequest();
   myObj.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("status").innerHTML = "Data Received: " + this.responseText;
         console.log("Data transfer completed successfully");
      }
   };
   myObj.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
   myObj.send();
}
