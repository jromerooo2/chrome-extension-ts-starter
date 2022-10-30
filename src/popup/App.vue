<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="join">Open youtube</button>
  </div>
</template>

<script lang="ts">
import io from "socket.io-client";

export default {
  name: 'App',
  data() {
    return {
      joined: false,
      message: 'Hello World',
      socketInstance : io()
    };
  },
  methods: {
    join(){
      this.joined = true;

      this.socketInstance = io("http://localhost:3000");
      this.socketInstance.on(
        "info", (data: any) => {
          console.log(data);
        }
      )

    },
    openYt() {
      window.open('https://www.youtube.com');
    },
    doWhatYoureTold() {

    },
  },
};
</script>

<style scoped lang="scss">
  .container {
    text-align: center;

    h1 {
      font-weight: 600;
    }
  }
</style>