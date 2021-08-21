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
        startGame() {
            this.running = true
            this.ken = 100
            this.ryu = 100
        },
        attack(especial) {
            this.hurt('ken', 5, 10, especial)
            this.hurt('ryu', 7, 12, false)
        },
        hurt(prop, min, max, especial) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})