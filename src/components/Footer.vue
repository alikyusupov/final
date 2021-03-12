<template>
<section>
    <ul class="text-muted">
        <li>
            <router-link to="/chat" class="text-muted">
                    <i class="bi bi-chat-left-text"></i> Chat
            </router-link>
        </li>
        <li>
            
            <router-link to="/map" class="text-muted">
                    Map
            </router-link>

        </li>
    </ul>
</section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    section{
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        width:auto;
        min-width: 350px;
        height: 25px;
        bottom: 15px;
        background-color: rgba(255, 255, 255, .7);
        border-radius:10px;
    }
    ul{ 
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        bottom:15px;
    }
    li{
        margin: 0 15px;
    }
    li:hover{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }



</style>
