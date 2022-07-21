// Language: javascript
// Ajax call to Get the radyState of the webpage

const Fetch = (url, spinner) => {
 url = `https://${url}`;

 let tab = window.open("about:blank");
 tab.document.write(spinner);

 return new Promise((resolve, reject) => {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.onload = function () {
     if (this.status == 200) {
       tab.location = url;
       tab.focus();
     } else {
       reject(this.statusText);
     }
   };
   xhr.onreadystatechange = function () {
     if (this.readyState == 4) {
       tab.location = url;
       tab.focus();
     }
   };
   xhr.send();
 });
};

export default Fetch;
