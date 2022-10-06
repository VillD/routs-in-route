<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="`src/assets/images/${destination.image}`"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section class="expriences">
    <h2>Top expriences in {{destination.name}}</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name:'experience.show', params:{experienceSlug: experience.slug}}"
      >
        <ExperienceCard
          :experience = "experience"
        />
      </router-link>
    </div>
    <router-view/>
  </section>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";

export default {
  components:{
    ExperienceCard,
},
  props:{
    id:{
      type:Number,
      required: true
    },
  },
  
  // data(){
  //   return{
  //     destination: null
  //   }
  // },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
      destination (){
      return sourceData.destinations.find(
        (destination)=>destination.id === this.id
      )
    }
  },
  // methods:{
  //   initDate(){
  //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
  //     this.destination = await response.json()
  //   }
  // }, 
  // async created(){
  //   this.initDate()
  //   this.$watch(()=> this.$route.params, this.initDate)
  // }
};
</script>
