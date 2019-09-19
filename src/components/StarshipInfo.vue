<template>
  <div>
    <v-row>
      <div id="model" class="col-sm-12 col-md-6">
        Model: {{ starship.model || '-' }}
      </div>
      <div id="manufacturer" class="col-sm-12 col-md-6">
        Manufacturer: {{ starship.manufacturer || '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="starship_class" class="col-sm-12 col-md-6">
        Starship Class: {{ starship.starship_class || '-' }}
      </div>
      <div id="length" class="col-sm-12 col-md-6">
        Length: {{ starship.length || '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="hyperdrive_rating" class="col-sm-12 col-md-6">
        Hyperdrive Rating: {{ starship.hyperdrive_rating || '-' }}
      </div>
      <div id="max_atmosphering_speed" class="col-sm-12 col-md-6">
        Atmosphering Speed: {{ starship.max_atmosphering_speed || '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="consumables" class="col-sm-12 col-md-6">
        Consumables: {{ starship.consumables || '-' }}
      </div>
      <div id="cargo_capacity" class="col-sm-12 col-md-6">
        Cargo Capacity: {{ starship.cargo_capacity || '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="crew" class="col-sm-12 col-md-6">
        Crew: {{ starship.crew || '-' }}
      </div>
      <div id="passengers" class="col-sm-12 col-md-6">
        Passengers: {{ starship.passengers || '-' }}
      </div>
    </v-row>

    <v-row>
      <div id="cost_in_credits" class="col-sm-12 col-md-6">
        Cost in Credits: {{ starship.cost_in_credits || '-' }}
      </div>
      <div id="MGLT" class="col-sm-12 col-md-6">
        MGLT: {{ starship.MGLT || '-' }}
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    starship: {
      type: Object,
      required: true,
      default: () => ({
        model: null,
        starship_class: null,
        manufacturer: null,
        length: null,
        hyperdrive_rating: null,
        max_atmosphering_speed: null,
        MGLT: null,
        crew: null,
        passengers: null,
        consumables: null,
        cargo_capacity: null,
        cost_in_credits: null
      })
    }
  }
}
</script>
