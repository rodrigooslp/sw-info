<template>
  <v-container>
    <v-row>
      <div class="col-sm-12 col-md-6">
        <v-card id="list-card" :loading="character.loading.list">
          <v-card-title>Characters</v-card-title>
          <v-card-text>
            <v-row>
              <v-col class="pt-0">
                <span>List of Star Wars characters</span>
              </v-col>
            </v-row>

            <v-row>
              <v-divider></v-divider>
            </v-row>

            <v-list id="character-list" min-height="300" max-height="300" class="scrollable">
              <v-list-item
                v-for="character in character.list"
                :key="character.name"
                @click="selectCharacter(character)"
              >
                <v-list-item-avatar>
                  <v-img :src="require('@/assets/avatar-placeholder.svg')"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="character.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-icon color="primary">mdi-chevron-right</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-layout
                v-if="character.next"
                class="pt-1"
                justify-center
              >
                <v-btn color="primary" dark @click="loadMoreCharacters" :loading="character.loading.more">Load More</v-btn>
              </v-layout>
            </v-list>
          </v-card-text>
        </v-card>
      </div>

      <div class="col-sm-12 col-md-6">
        <v-card
          id="info-card"
          :loading="character.loading.info"
          min-height="100%"
        >
          <v-card-title>{{ character.selected.name || 'Select a Character' }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col class="pt-0">
                <span>Selected character information</span>
              </v-col>
            </v-row>

            <v-row>
              <v-divider></v-divider>
            </v-row>

            <character-info :character="character.selected" />
          </v-card-text>
        </v-card>
      </div>
    </v-row>
    <v-row v-if="character.starships.length > 0">
      <div v-for="starship in character.starships" class="col-sm-12 col-md-6" :key="starship.name">
        <v-card min-height="100%" :loading="character.loading.starships">
          <v-card-title>{{ starship.name }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col class="pt-0">
                <span>{{ character.selected.name }}'s Starship</span>
              </v-col>
            </v-row>

            <v-row>
              <v-divider></v-divider>
            </v-row>

            <starship-info :starship="starship"/>
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import CharacterInfo from '@/components/CharacterInfo'
import StarshipInfo from '@/components/StarshipInfo'

export default {
  components: {
    CharacterInfo,
    StarshipInfo
  },

  async created () {
    this.character.loading.list = true
    const { results, next } = await this.getCharacters()

    this.character.list = results
    this.character.next = next
    this.character.loading.list = false
  },

  methods: {
    async selectCharacter (character) {
      this.character.selected = { ...character }
      this.character.starships = []
      this.character.loading.info = true

      const promises = [
        axios.get(character.species),
        axios.get(character.homeworld),
        ...character.films.map(film => axios.get(film))
      ]

      const [{ data: species }, { data: homeworld }, ...films] = await Promise.all(promises)

      this.character.selected.species = species
      this.character.selected.homeworld = homeworld
      this.character.selected.films = films.map(({ data }) => data)
      this.character.loading.info = false

      await this.getStarships(character.starships)
    },

    async getStarships (starships) {
      this.character.loading.starships = true
      this.character.starships = starships.map(starship => axios.get(starship))
      const results = await Promise.all(this.character.starships)
      this.character.starships = results.map(({ data }) => data)
      this.character.loading.starships = false
    },

    async loadMoreCharacters () {
      if (this.character.next) {
        this.character.loading.more = true
        const { data: { results, next } } = await axios.get(this.character.next)
        this.character.next = next
        this.character.list = this.character.list.concat(results)
        this.character.loading.more = false
      }
    },

    async getCharacters () {
      const { data: { results, next } } = await axios.get('https://swapi.co/api/people/')
      return { results, next }
    }
  },

  data () {
    return {
      character: {
        list: [],
        next: null,
        loading: {
          list: false,
          more: false,
          info: false,
          starships: false
        },
        selected: {},
        starships: []
      }
    }
  }
}
</script>

<style lang="scss">
.scrollable {
  overflow-y: scroll;
}
</style>
