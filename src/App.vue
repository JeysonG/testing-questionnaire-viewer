<template>
  <div id="app">
    <pf-landing-page
      :token="token"
      :type="type"
      :urlformviewer="urlFormViewer"
    />
  </div>
</template>

<script>
import { PfLandingPage } from '@brevortriverstudios/vue-core'

export default {
  name: 'app',

  data () {
    return {
      token: '',
      type: '',
      urlformviewer: ''
    }
  },

  components: {
    PfLandingPage
  },

  created () {
    let paramsUrl = location.search
    let params = new URLSearchParams(paramsUrl)

    this.urlFormViewer = process.env.VUE_APP_FORM_VIEWER

    this.token = params.get('token')
    this.type = params.get('type')
  }
}
</script>
