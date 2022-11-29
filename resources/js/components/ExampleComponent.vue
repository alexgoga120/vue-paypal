<template>
    <v-app>
        <v-app-bar
            app
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title>Vuetify paypal</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-container class="fill-height" fluid>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "ExampleComponent",
    data: () => ({
        dialog: false,
        pokemons: []
    }),
    created() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(({data}) => {
            data.results.forEach(pokeInfo => {
                axios.get(pokeInfo.url).then(pokeData => {
                    pokeData = pokeData.data;
                    this.pokemons.push({id: pokeData.id, name: pokeData.name, img: pokeData.sprites.front_default});
                });
            });
        });
    },
    methods: {

    }
}
</script>


<style>

</style>
