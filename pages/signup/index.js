import { postData } from '../../modules/http';

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
      postData("/users", obj)
         .then(() => location.assign('http://localhost:5173/pages/signin/'))
   }
   obj = {};
}
