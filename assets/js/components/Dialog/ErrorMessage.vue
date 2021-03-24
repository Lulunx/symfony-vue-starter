<template>
    <span v-if="hasErrors">
        <div class="v-messages theme--light error--text mb-2">
            <span class="v-messages__wrapper">
                <span
                    v-for="(message, i) in errors[field]"
                    :key="i"
                    class="v-messages__message"
                >
                    {{ message }}
                </span>
            </span>
        </div>
    </span>
</template>

<script>
export default {
    name: "ErrorMessage",
    computed: {
        hasErrors() {
            return (
                Array.isArray(this.errors[this.field]) &&
                this.errors[this.field].length > 0
            );
        }
    },
    props: {
        errors: {
            type: Object,
            default: {}
        },
        field: {
            type: String,
            default: null
        }
    }
};
</script>

<style scoped lang="scss">
.invalid-feedback > ul {
    margin: 0;
    padding: 0;

    & > li {
        list-style: none;
    }
}
</style>
