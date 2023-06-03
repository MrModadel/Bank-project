import axios from 'axios'

let url = 'http://localhost:5050'

let form = document.forms.reg;
form.onsubmit = (event) => {
   event.preventDefault();
   let b = true;
   let obj = {}
   let fm = new FormData(form);
   fm.forEach((value, key) => {
      if (value.length > 0) {
         obj[key] = value
      } else {
         b = false;
      }
   })
   if (b) {
      axios.post(url + '/users/', obj)
         .then(res => {
            if (res.status === 200 || res.status === 201) {
               location.assign('http://localhost:5173/pages/signin/')
            }
         })
   }
   obj = {};
}
