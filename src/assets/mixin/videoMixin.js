import videojs from 'video.js'

export const videoMixin = {
  created () {
    this.readyLoad()
  },
  methods: {
    readyLoad () {
      const videoSource = {
        type: 'video/mp4',
        src: this.src
      }
      if (this.height !== undefined) {
        this.playerOptions.height = this.height
      }
      this.playerOptions.sources.push(videoSource)
    },
    playerReadied (player) {
      const track = new videojs.AudioTrack({
        id: 'my-spanish-audio-track',
        kind: 'translation',
        label: 'Spanish',
        language: 'es'
      })
      player.audioTracks().addTrack(track)
      // Get the current player's AudioTrackList object.
      const audioTrackList = player.audioTracks()
      // Listen to the "change" event.
      audioTrackList.addEventListener('change', () => {
        // Log the currently enabled AudioTrack label.
        for (let i = 0; i < audioTrackList.length; i++) {
          const track = audioTrackList[i]
          if (track.enabled) {
            videojs.log(track.label)
            return
          }
        }
      })
    }
  }
}
