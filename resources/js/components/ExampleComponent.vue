<template>
    <v-app>
        <v-app-bar
            app
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title>Vuetify infinite scroll</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-container fluid
                         id="containerScroll"
                         ref="containerScroll"
                         style="height: 60vh; overflow-x: hidden; overflow-y: auto">
                <div class="w-100" v-if="pokemons.length != 0">
                    <PokemonCard v-for="pokemon in pokemons"
                                 :key="pokemon.id"
                                 :pokemon="pokemon"/>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import PokemonCard from "./PokemonCard";

export default {
    name: "ExampleComponent",
    components: {PokemonCard},
    data: () => ({
        dialog: false,
        pokemons: [],
        currentPokeSize: 10
    }),
    created() {
        this.loadMorePosts()
    },
    mounted() {
        const container = this.$refs.containerScroll;
        console.log(container)
        container.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        const container = this.$refs.containerScroll;
        container.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        async handleScroll(e) {
            const container = this.$refs.containerScroll;
            const scrollY = container.scrollHeight - container.scrollTop;
            const height = container.offsetHeight;
            const offset = height - scrollY;

            if (offset == 0 || offset == 1) {
                await this.loadMorePosts()
            }
        },
        async loadMorePosts() {
            console.log("aaaaaaaaaaaaaaaaaaa")
            await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${this.currentPokeSize - 10}`).then(({data}) => {
                return data.results
            }).then(async pokeData => {
                for (const pokeInfo of pokeData) {
                    await axios.get(pokeInfo.url).then(({data}) => {
                        this.pokemons.push(data);
                    });
                }
            }).then(() => this.currentPokeSize += 10);
        }
    }
}
</script>


