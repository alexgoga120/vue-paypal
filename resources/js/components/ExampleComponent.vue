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
                <div class="d-flex justify-content-evenly align-items-center w-100">
                    <v-card max-width="500">
                        <template slot="progress">
                            <v-progress-linear
                                color="deep-purple"
                                height="10"
                                indeterminate
                            ></v-progress-linear>
                        </template>

                        <v-img
                            height="250"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>

                        <v-card-title>
                            Opción 1
                        </v-card-title>
                        <v-card-text>
                            <p>
                                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus
                                nibh. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta
                                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet
                                quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac
                                lectus.
                            </p>
                        </v-card-text>

                        <v-card-actions class="justify-content-end">
                            <v-btn text color="red">
                                Cancelar
                            </v-btn>
                            <v-btn text color="blue" @click="dialog=true">
                                Aceptar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card max-width="500">
                        <template v-slot:progress>
                            <v-progress-linear
                                color="deep-purple"
                                height="10"
                                indeterminate
                            ></v-progress-linear>
                        </template>

                        <v-img
                            height="250"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>

                        <v-card-title>
                            Opción 2
                        </v-card-title>
                        <v-card-text>
                            <p>
                                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus
                                nibh. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta
                                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet
                                quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac
                                lectus.
                            </p>
                        </v-card-text>

                        <v-card-actions class="justify-content-end">
                            <v-btn text color="red">
                                Cancelar
                            </v-btn>
                            <v-btn text color="blue" @click="dialog=true">
                                Aceptar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-container>
        </v-main>
        <v-dialog v-model="dialog" max-width="600">
            <v-card>
                <v-card-title>Prueba de select con imagenes</v-card-title>
                <v-card-text>
                    <v-container class="fill-height" fluid>
                        <v-row>
                            <v-col>
                                <p class="v-label">
                                    Productos
                                </p>
                                <v-select
                                    :items="pokemons"
                                    :item-value="pokemons.id"
                                    filled
                                    rounded
                                    dense
                                >
                                    <template v-slot:selection="{ item, index }">
                                        <div class="d-flex">
                                            <v-img height="90" width="90" :src="item.img">
                                                <template v-slot:placeholder>
                                                    <v-row
                                                        class="fill-height ma-0"
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <v-progress-circular
                                                            indeterminate
                                                            color="grey lighten-5"
                                                        ></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                            <span class="align-self-center">{{ item.name }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item="{ item }">
                                        <div>
                                            <v-img height="90" width="90" :src="item.img">
                                                <template v-slot:placeholder>
                                                    <v-row
                                                        class="fill-height ma-0"
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <v-progress-circular
                                                            indeterminate
                                                            color="grey lighten-5"
                                                        ></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                        </div>
                                        {{ item.name }}
                                    </template>
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
import Vue from 'vue';

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
.v-select__slot .v-input__append-inner {
    align-self: center !important;
}
</style>
