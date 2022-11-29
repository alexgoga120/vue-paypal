<template>
    <v-row class="px-6">
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    <p class="">{{ pokemon.name }} - {{ pokemon.id }}</p>
                </v-card-title>
                <v-card-subtitle>
                    <p class="cfw-bolder">
                        {{ getTypes(pokemon.types) }}
                    </p>
                </v-card-subtitle>
                <v-card-text>
                    <v-row>
                        <p>{{ pokemon.base_experience }} - {{ (pokemon.height * 100) }}kg</p>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    name: 'PokemonCard',
    props: {
        pokemon: {
            required: true
        }
    },
    methods: {
        getTypes(types) {
            let textTypes = "";
            types.forEach(({type}) => {
                textTypes += type.name + " ";
            });
            return textTypes;
        }
    }
}
</script>
