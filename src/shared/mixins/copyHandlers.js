export const copyHandlers = {
  methods: {
    onCopy: function(e) {
      e.trigger.setAttribute("data-tooltip", "Copied!");
      e.trigger.classList.add("is-tooltip-active");
      setTimeout(() => {
        e.trigger.setAttribute("data-tooltip", "Copy");
        e.trigger.classList.remove("is-tooltip-active");
      }, 1000);
    },
    onError: function(e) {
      e.trigger.setAttribute("data-tooltip", "Try Again!");
      e.trigger.classList.add("is-tooltip-active");
      setTimeout(() => {
        e.trigger.setAttribute("data-tooltip", "Copy");
        e.trigger.classList.remove("is-tooltip-active");
      }, 1000);
    }
  }
};
