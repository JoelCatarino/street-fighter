new Vue({
    el: '#app',
    data: {
        running: false,
        ryu: 100,
        ken: 100,
        logs: []
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
            this.logs = []
        },
        attack(especial) {
            this.hurt('ken', 5, 10, especial, 'ryu', 'ken', 'player')
            if (this.ken > 0) {
                this.hurt('ryu', 7, 12, false, 'ken', 'ryu', 'masters')
            }
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} reached ${target} with ${hurt}.`, cls)
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.ryu = Math.min(this.ryu + heal, 100)
            this.registerLog(`Player gained strength from ${heal}.`, 'player')
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('ryu', 7, 12, false, 'ken', 'ryu', 'ken')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})