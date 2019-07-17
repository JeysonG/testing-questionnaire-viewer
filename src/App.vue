<template>
  <div id="app">
    <pf-landing-page-questionnaires
      :token="token"
      :type="type"
    />
  </div>
</template>

<script>
import { PfLandingPageQuestionnaires } from '@brevortriverstudios/vue-core'
export default {
  name: 'app',

  data () {
    return {
      token: '',
      type: ''
    }
  },

  components: {
    PfLandingPageQuestionnaires
  },

  created () {
    let paramsUrl = location.search
    let params = new URLSearchParams(paramsUrl)

    this.token = params.get('token')
    this.type = params.get('type')
  }
}
</script>
