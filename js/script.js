var app = new Vue({
el: '#app',
data: {
  navBarList: [
    {
      name: 'MISSION',
      link: ''
    },
    {
      name: 'CAUSES',
      link: ''
    },
    {
      name: 'JOURNAL',
      link: ''
    },
  ],
  footerList:[
    {
      name:'AVADA THEME BY THEME FUSION'
    },
    {
      name:'ALL RIGHT RESERVE'
    },
    {
      name:'POWERED BY WORDPRESS'
    }
  ],
}

});
Vue.config.devtools = true;
