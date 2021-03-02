<template>
<section>
    <ul class="text-muted">
        <li>More</li>
        <li>Policy</li>
        <li>Contacts</li>
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
        height: 25px;
        position: fixed;
        bottom: 15px;
        background-color: rgba(255, 255, 255, .7);
        border:1px solid grey;
        border-radius:10px;
    }
    ul{ 
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        bottom:15px;
    }
    li{
        margin: 0 15px;
    }
    li:hover{
        cursor: pointer;
    }

</style>
