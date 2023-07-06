<template>
    <v-card outlined>
        <v-card-title>
            ContactMatchedUser
        </v-card-title>

        <v-card-text>
            <String label="ReceiverId" v-model="value.receiverId" :editMode="editMode"/>
            <String label="MatchedUserId" v-model="value.matchedUserId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="contactMatchedUser"
            >
                ContactMatchedUser
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
        name: 'ContactMatchedUserCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.receiverId = '';
            this.value.matchedUserId = '';
        },
        watch: {
        },
        methods: {
            contactMatchedUser() {
                this.$emit('contactMatchedUser', this.value);
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

