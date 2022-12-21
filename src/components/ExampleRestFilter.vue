<template>
   <div>
    Filter Albums:
    <select @change="filterExample">
       <option value="100">100</option>
       <option value="75">75</option>
       <option value="50">50</option>
       <option value="25">25</option>
       <option value="10">10</option>
    </select>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import (mapActions)
export default {
   name:"RestFilter",
   methods:mapActions(["filterExample"])
}
</script>
<style>
select{
    margin-top:20px;
    padding:6px;
    border:#41b883 1px solid;
}

</style>