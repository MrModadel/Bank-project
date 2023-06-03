import axios from 'axios'

let url = 'http://localhost:5050'

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
      axios.get(url + '/users/')
         .then(res => {
            let arr = res.data;
            let status = true;
            for (let item of arr) {
               if (item.email === inUser.email && item.password === inUser.password) {
                  localStorage.setItem('user', JSON.stringify(item));
                  status = false;
                  location.assign('http://localhost:5173/');
               }
            }
            if (status) {
               alert('Что то пошло не так!')
            }
         })
         .catch(err => alert('Что то пошло не так!'))
   }
}
