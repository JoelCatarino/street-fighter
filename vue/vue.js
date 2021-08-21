new Vue({
    el: '#app',
    data: {
        running: false,
        ryu: 100,
        ken: 100
    },
    computed: {
        hasResult() {
            return this.ryu == 0 || this.ken == 0
        }
    },
    methods: {

    },
    watch: {

    }
})