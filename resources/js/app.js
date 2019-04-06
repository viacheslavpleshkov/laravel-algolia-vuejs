window.Vue = require('vue');

Vue.component('search-component', require('./components/SearchComponent').default);

const app = new Vue({
    el: '#app'
});
