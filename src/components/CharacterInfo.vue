<template>
  <div>
    <v-row>
      <div id="birth_year" class="col-sm-12 col-md-4">
        Birth Year: {{ character.birth_year || '-' }}
      </div>

      <div id="species" class="col-sm-12 col-md-4">
        Species: {{ character.species ? character.species.name : '-' }}
      </div>

      <div id="homeworld" class="col-sm-12 col-md-4">
        Homeworld: {{ character.homeworld ? character.homeworld.name : '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="gender" class="col-sm-12 col-md-4">
        Gender: {{ character.gender || '-' }}
      </div>

      <div id="height" class="col-sm-12 col-md-4">
        Height: {{ character.height || '-' }}
      </div>

      <div id="mass" class="col-sm-12 col-md-4">
        Mass: {{ character.mass || '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="skin_color" class="col-sm-12 col-md-4">
        Skin Color: {{ character.skin_color || '-' }}
      </div>
      <div id="eye_color" class="col-sm-12 col-md-4">
        Eye Color: {{ character.eye_color || '-' }}
      </div>
      <div id="hair_color" class="col-sm-12 col-md-4">
        Hair Color: {{ character.hair_color || '-' }}
      </div>
    </v-row>

    <v-row>
      <v-col class="pb-2">
        Films:
      </v-col>
    </v-row>

    <v-row id="films">
      <div class="pt-0 pb-2 col-sm-12 col-md-6" v-for="film in character.films" :key="film.title">
        {{ film.title }}
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      default: () => ({
        name: null,
        birth_year: null,
        species: {},
        homeworld: {},
        gender: null,
        height: null,
        mass: null,
        skin_color: null,
        eye_color: null,
        hair_color: null,
        films: null,
        starships: null
      })
    }
  }
}
</script>
