<template>
    <v-card outlined>
        <v-card-title>
            ManageProfiles
        </v-card-title>

        <v-card-text>
            <String label="ServiceId" v-model="value.serviceId" :editMode="editMode"/>
            <String label="Filter" v-model="value.filter" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="manageProfiles"
            >
                ManageProfiles
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
        name: 'ManageProfilesCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.serviceId = '';
            this.value.filter = '';
        },
        watch: {
        },
        methods: {
            manageProfiles() {
                this.$emit('manageProfiles', this.value);
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

