<template>
        <form @submit.prevent="sendMessage">
            <label for="message">Write your message and press enter</label>
            <input type="text" placelholder="message" v-model="content">

            <p v-if="msg" style="color:red;text-align:center;">{{ msg }}</p>
        </form>
</template>

<script>

import db from '@/firebase/config'

export default {
    name: 'NewMessage',
    props: ['name'],
   
    data(){
        return{
            content: null,
            msg: null
        }
    },
    methods: {
        sendMessage(){
            if(this.content){

                db.collection('messages').add({
                    name: this.name,
                    content: this.content,
                    time: Date.now()
                }).catch(err => {
                    console.log(err)
                })

                this.msg = null,
                this.content = null
                
            }else{
                this.msg = 'You must type something to send a message'
            }
        }
    }
}
</script>

<style>

</style>