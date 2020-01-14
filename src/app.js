import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      allCountries: null,
      selectedCountry: null,
      totalPop: null,
      // selectedCountryNeighbours: [],
      favourites: []
    },
    // computed: {
    //   getTotalPop: function () {
    //     this.allCountries = this.fetchAllCountriesPopulation()
    //     for (const i of this.allCountries ) {
    //       console.log(i);
    //       this.totalPop += i.population
    //     }
    //     return getTotalPop;
    //   }
    // },
    mounted: function () {
      this.fetchAllCountriesPopulation()
    },
    methods: {
      fetchAllCountriesPopulation: function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(result => this.allCountries = result)
      },
      fetchCountryDetails: function (index) {
        return this.selectedCountry = this.allCountries[index]
      },
      addToFavourite: function(index) {
        this.favourites.unshift(this.allCountries[index].name)
      },
      // fetchBorders: function (index) {
      //   const bordersArray = this.allCountries[index].borders
      //   // console.log(bordersArray);
      //   for (let country of bordersArray) {
      //     const neighbour = this.allCountries.find(country)
      //     console.log(neighbour);
          // this.selectedCountryNeighbours.push(neighbour.name)
        // }
      // }
      // findCountryByCode: function (code)
    },
  })
})
