var app = Vue.createApp({
    data(){
        return{
            msg: "welcome to vue",
            tutotialInfo:{
                name: "vue js 3 bangla tutorial",
                githubLink : "github@gmail.com",
            },
            htmlCode: '<a href="https://github.com/Tanvir477/vueJs-learning-VueJsByCdn">HTMLGithub</a>',

            count : 0,
        };
    },

    methods: {
      getCurrentTime(){
        let ct = new Date()
        return new Date()
      },
      increase(){
        this.count++;
      },
      decrease(){
        this.count--;
      },
    },
})

app.mount('#app');