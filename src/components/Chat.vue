<template>
  <div class="chat container">
      <div class="row">
        <div class="col s12 m12">
          <div class="card center-align">
            <div class="card-content">
              <span class="card-title">Chat room</span>
              
              <div class="chat-wraper" v-chat-scroll>

              <div class="single-message" v-for="(message, i) in messages" :key="i">
                  <div class="messsage"> <span class="name">{{ message.name }}</span> : {{ message.content }} </div>
                  <div class="time">{{ message.time }} </div>
              </div>
              
              </div>

              <NewMessage :name="name" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import NewMessage from '@/components/NewMessage'
import db from '@/firebase/config'
import moment from 'moment'

export default {
  name: 'Chat',
  components: {
      NewMessage
  },
  props: ['name'],
  data () {
    return {
       messages: [],
     
    }
  },
  methods: {
    
  },
  created(){
      let ref = db.collection('messages').orderBy('time')
      
      ref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
              if(change.type == "added"){
                 let doc = change.doc

                 this.messages.push({
                      name: doc.data().name,
                      content: doc.data().content,
                      time: moment(doc.data().time).format('lll'), 
                      id: doc.data().id
                 })


              }
          });
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.chat.container{
  margin-top:100px;
}
.single-message {
    text-align: left;
    margin: 20px;
}
span.card-title {
    position: absolute;
    top: -70px;
    left: 41%;
}

.time {
    font-size: 13px;
    padding-top: 5px;
}

.chat-wraper{
  max-height: 300px;
  overflow: auto;
}

/* Scrollbar styles */

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ddd; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>
