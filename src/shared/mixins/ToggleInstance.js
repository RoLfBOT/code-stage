export const ToggleInstance = {
  data: function() {
    return {
      showComponent: false
    };
  },

  methods: {
    toggleComponent: function() {
      this.showComponent = !this.showComponent;
    }
  }
};
