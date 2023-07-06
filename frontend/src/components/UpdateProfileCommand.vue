<template>
    <v-card outlined>
        <v-card-title>
            UpdateProfile
        </v-card-title>

        <v-card-text>
            <String label="UserId" v-model="value.userId" :editMode="editMode"/>
            <String label="Interests" v-model="value.interests" :editMode="editMode"/>
            <String label="Hobbies" v-model="value.hobbies" :editMode="editMode"/>
            <String label="Personality" v-model="value.personality" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="updateProfile"
            >
                UpdateProfile
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
        name: 'UpdateProfileCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.userId = '';
            this.value.interests = [];
            this.value.hobbies = [];
            this.value.personality = '';
        },
        watch: {
        },
        methods: {
            updateProfile() {
                this.$emit('updateProfile', this.value);
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

