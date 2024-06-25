<template>
    <div>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
            <li>Item</li>
            <li>Item</li>
        </ul>
    </div>
        
</template>

<script>
    export default{
        name:'AdminNav',
    }
</script>

<style>
    .ad_head{
        border-bottom: solid 1px black;
    }
</style>