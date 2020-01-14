import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      allCountriesPopulation: null,
      selectedCountry: null,
      selectedCountryNeighbours: [],
      favourites: []
    },
    // computed: {
    //
    // },
    mounted: function () {
      this.fetchAllCountriesPopulation()
    },
    methods: {
      fetchAllCountriesPopulation: function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(result => this.allCountriesPopulation = result)
      },
      fetchCountryDetails: function (index) {
        return this.selectedCountry = this.allCountriesPopulation[index]
      },
      addToFavourite: function(index) {
        this.favourites.unshift(this.allCountriesPopulation[index].name)
      },
      fetchBorders: function (index) {
        const bordersArray = this.allCountriesPopulation[index].borders
        // console.log(bordersArray);
        for (let country of bordersArray) {
          const neighbour = this.allCountriesPopulation.find(country)
          console.log(neighbour);
          // this.selectedCountryNeighbours.push(neighbour.name)
        }
      },
      findCountryByCode: function (code)
    },
  })
})
