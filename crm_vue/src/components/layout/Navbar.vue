<template>
    <nav class="navbar is-dark">
        <div class = "navbar-brand">
            <router-link to = "/" class = "navbar-item"> <strong>CRM</strong>
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="buttons">
                    <router-link to="/sign-up" class="button is-success"><strong>Sign up</strong>
                    </router-link>
                    <router-link to="/sign-in" class="button is-light">Login In</router-link>
                </div>
            </div>
        </div>
    </nav>      
</template>

<script>
    export default {
        name : "Navbar"
        }
</script>