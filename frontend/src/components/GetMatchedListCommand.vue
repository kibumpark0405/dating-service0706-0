<template>
    <v-card outlined>
        <v-card-title>
            GetMatchedList
        </v-card-title>

        <v-card-text>
            <String label="ReceiverId" v-model="value.receiverId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="getMatchedList"
            >
                GetMatchedList
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
        name: 'GetMatchedListCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.receiverId = '';
        },
        watch: {
        },
        methods: {
            getMatchedList() {
                this.$emit('getMatchedList', this.value);
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

