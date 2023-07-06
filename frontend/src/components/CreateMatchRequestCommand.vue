<template>
    <v-card outlined>
        <v-card-title>
            CreateMatchRequest
        </v-card-title>

        <v-card-text>
            <String label="RequestId" v-model="value.requestId" :editMode="editMode"/>
            <String label="RequesterId" v-model="value.requesterId" :editMode="editMode"/>
            <Date label="RequestedDate" v-model="value.requestedDate" :editMode="editMode"/>
            <String label="RequestedLocation" v-model="value.requestedLocation" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createMatchRequest"
            >
                CreateMatchRequest
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
        name: 'CreateMatchRequestCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.requestId = '';
            this.value.requesterId = '';
            this.value.requestedDate = '2023-07-06';
            this.value.requestedLocation = '';
        },
        watch: {
        },
        methods: {
            createMatchRequest() {
                this.$emit('createMatchRequest', this.value);
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

