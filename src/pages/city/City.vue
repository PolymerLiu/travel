<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetter"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      cities: [],
      letter: ""
    };
  },
  methods: {
    getCityData() {
      axios.get("./api/city.json").then(res => {
        if (res.data.resultCode === 0) {
          let data = res.data.data;
          this.hotCities = data.hotCities;
          this.cities = data.cities;
        }
      });
    },
    handleLetter(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityData();
  }
};
</script>

<style lang="stylus" scoped>
</style>
