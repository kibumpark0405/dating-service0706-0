<template>
    <v-card outlined>
        <v-card-title>
            CreateMatch
        </v-card-title>

        <v-card-text>
            <String label="ServiceId" v-model="value.serviceId" :editMode="editMode"/>
            <String label="RequestId" v-model="value.requestId" :editMode="editMode"/>
            <String label="ReceiverId" v-model="value.receiverId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createMatch"
            >
                CreateMatch
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
        name: 'CreateMatchCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.serviceId = '';
            this.value.requestId = '';
            this.value.receiverId = '';
        },
        watch: {
        },
        methods: {
            createMatch() {
                this.$emit('createMatch', this.value);
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

