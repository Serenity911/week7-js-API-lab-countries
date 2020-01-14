import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      allCountriesPopulation: null,
      selectedCountry: null
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
      }
    },
  })
})
