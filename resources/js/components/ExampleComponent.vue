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
                            <v-btn text color="blue" @click="mountpaypalbutton">
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
                            <v-btn text color="blue">
                                Aceptar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>

                <div class="d-flex justify-content-evenly align-items-center w-100" id="paypal-button-container"></div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "ExampleComponent",
    methods: {
        mountpaypalbutton() {
            const swal = this.$swal;
            paypal
                .Buttons({
                    style: {
                        shape: "rect",
                        color: "blue",
                        layout: "vertical",
                        label: "paypal",
                        size: "medium"
                    },
                    createOrder: async function (data, actions) {
                        // Set up the transaction
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: '0.01'
                                }
                            }]
                        });
                    },
                    // eslint-disable-next-line no-unused-vars
                    onApprove: async function (data, actions) {
                        console.log(data);
                        console.log(actions);
                        return actions.order.capture().then(function (details) {
                            console.log(details);
                            swal.fire({
                                icon: "success",
                                title: "Congratulations",
                                text: 'Transaction completed by ' + details.payer.name.given_name,
                                confirmButtonText: "Complete",
                                showLoaderOnConfirm: true,
                                preConfirm: () => {
                                },
                                allowOutsideClick: false
                            });
                        });
                    }
                })
                .render("#paypal-button-container");
        }
    }
}
</script>
