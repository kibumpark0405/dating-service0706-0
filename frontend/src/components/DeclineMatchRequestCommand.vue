<template>
    <v-card outlined>
        <v-card-title>
            DeclineMatchRequest
        </v-card-title>

        <v-card-text>
            <String label="RequestId" v-model="value.requestId" :editMode="editMode"/>
            <String label="ReceiverId" v-model="value.receiverId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="declineMatchRequest"
            >
                DeclineMatchRequest
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'DeclineMatchRequestCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.requestId = '';
            this.value.receiverId = '';
        },
        watch: {
        },
        methods: {
            declineMatchRequest() {
                this.$emit('declineMatchRequest', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

