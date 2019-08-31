<template>
  <div class="index container">
      <div class="row">
        <div class="col s12 m12">
          <div class="card center-align">
            <div class="card-content">
              <span class="card-title">Welcome to Vue Chat</span>

              <form class="uname-form" @submit.prevent="enterChat">
                  <label for="uname">Enter your username</label>
                  <input type="text" name="uname" v-model="name">

                  <p v-if="msg" style="color:red;margin-top:10px'">{{ msg }}</p>

                  <button class="btn">Enter Chat</button>
              </form>
                            
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
        name: null,
        msg: null
    }
  },
  methods: {
    enterChat(){
        if(this.name){
            this.$router.push({name: 'Chat', params: { name: this.name }})
        }else{
          this.msg = 'You must enter a name to join'
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.index.container {
    max-width: 500px;
    margin-top: 100px;
}

form.uname-form button {
    margin-top: 30px;
}

</style>
