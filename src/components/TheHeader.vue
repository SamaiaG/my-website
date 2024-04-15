<template>
    <header>
        <img src="../assets/Logo.png" alt="logo" class="logo">
        <div class="headerItems">
            <a href="/" class="hItem">About me </a>
            <a href="/" class="hItem">My works </a>
            <a href="/" class="hItem">Hobbies </a>
            <a href="/" class="hItem">Contact </a>
            <a href="/" class="hItem">Suggestions </a>
        </div>
    </header>
</template>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(172,199,238);
    background: linear-gradient(94deg, rgba(172,199,238,1) 53%, rgba(245,166,184,1) 100%);
    margin: 0;
    padding: 1rem 5rem;
}

.headerItems{
    display: flex;
    gap: 2rem
}

.hItem{
    text-transform: uppercase;
    color: #4F6A92;
    text-decoration: none;
}
.hItem:hover{
    text-shadow: 1px 1px #91a5c3;

}
</style>