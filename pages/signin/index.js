import { getData } from '../../modules/http';

let form = document.forms.login;
form.onsubmit = (event) => {
   event.preventDefault();
   let bulean = true;
   let inUser = {};
   let fm = new FormData(form);
   fm.forEach((value, key) => {
      if (value.length > 0) {
         inUser[key] = value;
      } else {
         bulean = false;
      }
   })


   if (bulean) {
      getData("/users?email=" + inUser.email)
         .then(res => {
            if(res.data[0].password === inUser.password) {
               delete res.data[0].password
               localStorage.setItem('user', JSON.stringify(res.data[0]))
               location.assign('/')
            } else {
               alert('wrong password')
            }
         })

   }
}
